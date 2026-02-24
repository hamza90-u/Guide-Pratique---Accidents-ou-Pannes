import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Car, Droplets, FileText, TriangleAlert } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const checks = [
  {
    icon: Car,
    title: "État général",
    description: "Vérifier l'état général (carrosserie, pneus, rétroviseieurs, feux...)."
  },
  {
    icon: Droplets,
    title: "Niveaux des fluides",
    description: "Vérifier le niveau des fluides (gasoil, huile, lave-glace)."
  },
  {
    icon: FileText,
    title: "Documents de bord",
    description: "Vérifier la présence des documents (carte grise, assurance, vignette, visite technique, autorisation de circulation ou location)."
  },
  {
    icon: TriangleAlert,
    title: "Signalement",
    description: <>Signaler tout dommage préexistant lors de la réception ou de la restitution du véhicule au service FM, ou par email : <strong className="font-semibold text-card-foreground">services.techniques.car.ma@alstomgroup.com</strong></>
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
              <h3 className="font-headline text-2xl font-semibold leading-none tracking-tight">Avant d'utiliser un véhicule Alstom</h3>
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
                      <p className="text-sm text-muted-foreground break-words">{check.description}</p>
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
