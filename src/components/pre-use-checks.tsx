import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
      <div className="grid md:grid-cols-2">
        <div className="p-6">
          <CardHeader className="p-0">
            <CardTitle className="font-headline text-2xl">Avant d'utiliser un véhicule</CardTitle>
            <CardDescription>Effectuez ces vérifications critiques pour votre sécurité.</CardDescription>
          </CardHeader>
          <CardContent className="p-0 mt-6">
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
          </CardContent>
        </div>
        <div className="relative min-h-[250px] md:min-h-0">
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
    </Card>
  );
}
