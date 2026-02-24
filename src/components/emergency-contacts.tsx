import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Siren, Flame, Shield, Route } from "lucide-react";

const contacts = [
  { name: "Police", number: "19", tel: "19", icon: Siren },
  { name: "Pompiers (Protection Civile)", number: "15", tel: "15", icon: Flame },
  { name: "Gendarmerie Royale", number: "177", tel: "177", icon: Shield },
  { name: "Autoroutes du Maroc", number: "5050", tel: "5050", icon: Route },
];

export function EmergencyContacts() {
  return (
    <Card id="emergency-contacts" className="scroll-mt-24">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Contacts d'urgence</CardTitle>
        <CardDescription>Numéros à appeler immédiatement en cas de situation grave.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {contacts.map((contact) => (
          <a key={contact.name} href={`tel:${contact.tel}`} className="block">
            <Button variant="outline" className="w-full h-auto justify-start p-4 text-left">
              <div className="flex items-center gap-4 w-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-destructive/10 text-destructive">
                   <contact.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{contact.name}</p>
                  <p className="text-sm text-muted-foreground">Appeler le {contact.number}</p>
                </div>
                <Phone className="h-5 w-5 text-muted-foreground" />
              </div>
            </Button>
          </a>
        ))}
      </CardContent>
    </Card>
  );
}
