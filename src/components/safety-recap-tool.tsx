"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles, AlertTriangle, CheckCircle2 } from "lucide-react";
import { generateSafetyRecap } from "@/app/actions";
import type { SafetyRecapGeneratorOutput } from "@/ai/flows/safety-recap-generator";

const formSchema = z.object({
  emergencyType: z.enum(["accident", "breakdown"], {
    required_error: "You need to select an emergency type.",
  }),
  situationDetails: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function SafetyRecapTool() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SafetyRecapGeneratorOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    setResult(null);
    setError(null);

    const response = await generateSafetyRecap(data);

    if (response.error) {
      setError(response.error);
    } else {
      setResult(response.data);
    }

    setIsLoading(false);
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-primary" />
          <CardTitle className="font-headline text-2xl">AI Safety Recap</CardTitle>
        </div>
        <CardDescription>Obtenez un résumé des actions immédiates à entreprendre généré par l'IA.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="emergencyType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="font-semibold">Type d'urgence *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="accident" />
                        </FormControl>
                        <FormLabel className="font-normal">Accident</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="breakdown" />
                        </FormControl>
                        <FormLabel className="font-normal">Panne</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="situationDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Détails de la situation (optionnel)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: 'pneu crevé sur l'autoroute', 'voiture qui fume', etc."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Générer le résumé
            </Button>
          </CardFooter>
        </form>
      </Form>

      {isLoading && (
        <div className="p-6 pt-0 flex items-center justify-center text-muted-foreground">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Génération en cours...
        </div>
      )}

      {error && (
        <div className="p-6 pt-0">
          <Card className="bg-destructive/10 border-destructive/20 text-destructive-foreground">
            <CardHeader className="flex-row items-center gap-3 space-y-0">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <CardTitle className="text-destructive text-lg">Erreur</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{error}</p>
            </CardContent>
          </Card>
        </div>
      )}

      {result && (
        <div className="p-6 pt-0">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="flex-row items-center gap-3 space-y-0">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <CardTitle className="text-primary text-lg">Vos prochaines étapes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-sm">{result.summary}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </Card>
  );
}
