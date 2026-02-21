import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Car, FileText, Gauge, Droplets, Lamp } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const checks = [
  {
    icon: Car,
    title: "État général du véhicule",
    description: "Inspect exterior for any visible damage or issues."
  },
  {
    icon: FileText,
    title: "Documents de bord",
    description: "Ensure registration, insurance, and guide are present."
  },
  {
    icon: Gauge,
    title: "Pneumatiques",
    description: "Check tire pressure and look for wear or damage."
  },
  {
    icon: Droplets,
    title: "Niveaux des fluides",
    description: "Verify oil, coolant, and washer fluid levels."
  },
  {
    icon: Lamp,
    title: "Éclairage et signalisation",
    description: "Test all lights, indicators, and hazard signals."
  }
];

const vehicleCheckImage = PlaceHolderImages.find(p => p.id === 'vehicle-check');

export function PreUseChecks() {
  return (
    <Card className="overflow-hidden">
      <Accordion type="single" collapsible defaultValue="pre-use-checks" className="w-full">
        <AccordionItem value="pre-use-checks" className="border-none">
          <AccordionTrigger className="p-6 text-left font-semibold hover:no-underline [&[data-state=open]]:border-b">
            <div>
              <h3 className="font-headline text-2xl font-semibold leading-none tracking-tight">Avant d'utiliser un véhicule</h3>
              <p className="text-sm text-muted-foreground pt-1.5 font-normal">Effectuez ces vérifications critiques pour votre sécurité.</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-6 pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-5">
                {checks.map((check, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <check.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{check.title}</h4>
                      <p className="text-sm text-muted-foreground">{check.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="relative min-h-[250px] md:min-h-0 rounded-lg overflow-hidden">
                {vehicleCheckImage && (
                  <Image
                    src={vehicleCheckImage.imageUrl}
                    alt={vehicleCheckImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={vehicleCheckImage.imageHint}
                  />
                )}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
