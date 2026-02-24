import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Contact, HeartPulse, ParkingCircle, PhoneForwarded, ShieldCheck, Shirt, TriangleAlert, Wrench } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const accidentSteps = [
  { icon: ParkingCircle, text: "Se garer sur le côté ou, idéalement, sur la bande d'arrêt d'urgence." },
  { icon: TriangleAlert, text: "Sécuriser les lieux : Allumez les feux de détresse et placez le triangle de signalisation (à ~30m en ville et 100m sur autoroute)." },
  { icon: Shirt, text: "Se mettre en sécurité : Portez votre gilet de haute visibilité. Faites sortir tous les passagers par les portes du côté droit et mettez-vous à l'abri derrière la barrière de sécurité." },
  { icon: HeartPulse, text: <>Vérifier s'il y a des blessés : Appelez les secours si nécessaire (Police, Pompiers). <a href="#emergency-contacts" className="underline text-primary hover:text-primary/80">Voir ci-dessous</a></> },
  { icon: Contact, text: "Remplir le constat amiable : Échangez les informations avec le service FM par e-mail ou par téléphone." },
  { icon: Camera, text: "Prendre des photos : Documentez la scène, les dégâts et les plaques d'immatriculation." },
  { icon: PhoneForwarded, text: "Contacter l'assistance : Appelez Wafa LLD ou Arval LLD pour le remorquage." },
];

const breakdownSteps = [
  { icon: TriangleAlert, text: "Sécuriser les lieux : Garez-vous sur la bande d'arrêt d'urgence et allumez les feux de détresse." },
  { icon: Shirt, text: "Se mettre en sécurité : Portez le gilet de haute visibilité et passez derrière la barrière de sécurité." },
  { icon: Wrench, text: "Ne pas tenter de réparation complexe : N'intervenez pas sur le moteur ou des pièces complexes." },
  { icon: PhoneForwarded, text: "Contacter l'assistance : Appelez Wafa LLD ou Arval LLD pour une aide technique." },
  { icon: ShieldCheck, text: "Attendre les secours en sécurité : Restez à l'abri et loin de la circulation." },
];

const accidentImage = PlaceHolderImages.find(p => p.id === 'accident-scene');
const breakdownImage = PlaceHolderImages.find(p => p.id === 'breakdown-assist');

export function EmergencyProcedures() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Conduite à tenir en cas d'urgence</CardTitle>
        <CardDescription>Suivez ces étapes en cas d'accident ou de panne pour garantir votre sécurité.</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue="accident">
          <AccordionItem value="accident">
            <AccordionTrigger className="text-lg font-semibold">En cas d'accident</AccordionTrigger>
            <AccordionContent>
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <ul className="space-y-4">
                  {accidentSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <step.icon className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                      <span>{step.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative min-h-[200px] rounded-lg overflow-hidden">
                  {accidentImage && (
                    <Image
                      src={accidentImage.imageUrl}
                      alt={accidentImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={accidentImage.imageHint}
                    />
                  )}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="breakdown">
            <AccordionTrigger className="text-lg font-semibold">En cas de panne</AccordionTrigger>
            <AccordionContent>
               <div className="grid md:grid-cols-2 gap-6 pt-4">
                <ul className="space-y-4">
                  {breakdownSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <step.icon className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                      <span>{step.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative min-h-[200px] rounded-lg overflow-hidden">
                   {breakdownImage && (
                    <Image
                      src={breakdownImage.imageUrl}
                      alt={breakdownImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={breakdownImage.imageHint}
                    />
                  )}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
