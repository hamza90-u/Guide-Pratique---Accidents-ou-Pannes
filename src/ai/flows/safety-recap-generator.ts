'use server';
/**
 * @fileOverview An AI-powered tool that provides a concise, actionable summary of immediate steps to take during an accident or breakdown.
 *
 * - safetyRecapGenerator - A function that generates a safety recap based on the emergency type.
 * - SafetyRecapGeneratorInput - The input type for the safetyRecapGenerator function.
 * - SafetyRecapGeneratorOutput - The return type for the safetyRecapGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SafetyRecapGeneratorInputSchema = z.object({
  emergencyType: z.enum(['accident', 'breakdown']).describe('The type of emergency (accident or breakdown).'),
  situationDetails: z.string().optional().describe('Optional details about the specific situation, e.g., "car smoking", "flat tire".'),
});
export type SafetyRecapGeneratorInput = z.infer<typeof SafetyRecapGeneratorInputSchema>;

const SafetyRecapGeneratorOutputSchema = z.object({
  summary: z.string().describe('A concise, actionable summary of immediate steps to take.'),
});
export type SafetyRecapGeneratorOutput = z.infer<typeof SafetyRecapGeneratorOutputSchema>;

const safetyRecapPrompt = ai.definePrompt({
  name: 'safetyRecapPrompt',
  input: {schema: SafetyRecapGeneratorInputSchema},
  output: {schema: SafetyRecapGeneratorOutputSchema},
  prompt: `You are an expert Alstom safety guide. Your task is to provide a concise, actionable summary of immediate steps for a driver experiencing an emergency.

Based on the following general guide content, summarize the most critical and immediate steps for the specific emergency. Prioritize safety and clarity.

**General Guide Content: Conduite à tenir en cas d'accident ou de panne (Immediate Steps)**

**In case of an accident:**
1. Secure the area: Turn on hazard lights, place a warning triangle.
2. Ensure safety: Move to a safe location if possible (e.g., behind a safety barrier). Wear a high-visibility vest.
3. Check for injuries: Assist injured persons if safe to do so. Call emergency services (Police, Pompiers, Gendarmerie Royale) if there are injuries.
4. Exchange information: Exchange insurance details, driver's license, and contact information with other parties involved. Do not admit fault.
5. Take photos: Document the scene, vehicle damage, and relevant surroundings.
6. Contact assistance: Call Wafa LLD or Arval LLD for vehicle assistance.

**In case of a breakdown:**
1. Secure the area: Turn on hazard lights, place a warning triangle.
2. Ensure safety: Move to a safe location if possible (e.g., hard shoulder, safe pull-off). Wear a high-visibility vest.
3. Attempt minor fixes: Check basic things if safe (e.g., fuel level, loose cables). Do NOT attempt complex repairs on the side of the road.
4. Contact assistance: Call Wafa LLD or Arval LLD for towing or repair assistance.
5. Wait for help: Stay in a safe place, preferably inside the vehicle if it's safe to do so, with seatbelt on.

Now, generate the summary based on the following:
Emergency Type: {{{emergencyType}}}
{{#if situationDetails}}
Situation Details: {{{situationDetails}}}
{{/if}}

Provide only the actionable steps. Do not include introductory or concluding remarks.
`,
});

const safetyRecapGeneratorFlow = ai.defineFlow(
  {
    name: 'safetyRecapGeneratorFlow',
    inputSchema: SafetyRecapGeneratorInputSchema,
    outputSchema: SafetyRecapGeneratorOutputSchema,
  },
  async (input) => {
    const {output} = await safetyRecapPrompt(input);
    if (!output) {
      throw new Error('Failed to generate safety recap.');
    }
    return output;
  },
);

export async function safetyRecapGenerator(input: SafetyRecapGeneratorInput): Promise<SafetyRecapGeneratorOutput> {
  return safetyRecapGeneratorFlow(input);
}
