'use server';

import { safetyRecapGenerator, SafetyRecapGeneratorInput, SafetyRecapGeneratorOutput } from '@/ai/flows/safety-recap-generator';
import { z } from 'zod';

const inputSchema = z.object({
  emergencyType: z.enum(['accident', 'breakdown']),
  situationDetails: z.string().optional(),
});

export async function generateSafetyRecap(input: SafetyRecapGeneratorInput): Promise<{ data: SafetyRecapGeneratorOutput | null; error: string | null }> {
  const parsedInput = inputSchema.safeParse(input);

  if (!parsedInput.success) {
    return { data: null, error: 'Invalid input.' };
  }

  try {
    const output = await safetyRecapGenerator(parsedInput.data);
    return { data: output, error: null };
  } catch (e) {
    console.error(e);
    return { data: null, error: 'Failed to generate safety recap. Please try again.' };
  }
}
