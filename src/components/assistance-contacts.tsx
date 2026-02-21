import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, LifeBuoy } from "lucide-react";

const contacts = [
  { name: "Wafa LLD", number: "0522 58 38 58", tel: "+212522583858", type: 'tel' },
  { name: "Arval LLD", number: "0529 05 99 99", tel: "+212529059999", type: 'tel' },
  { name: "Réclamations Techniques", email: "services.techniques.car.ma@alstom.com", type: 'mail' },
];

export function AssistanceContacts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Assistance & Technique</CardTitle>
        <CardDescription>Pour le remorquage, l'assistance ou les questions techniques.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {contacts.map((contact) => (
          <a key={contact.name} href={contact.type === 'tel' ? `tel:${contact.tel}` : `mailto:${contact.email}`} className="block">
            <Button variant="outline" className="w-full h-auto justify-start p-4 text-left">
              <div className="flex items-center gap-4 w-full">
                 <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent-foreground">
                   <LifeBuoy className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{contact.name}</p>
                  <p className="text-sm text-muted-foreground">{contact.number || contact.email}</p>
                </div>
                {contact.type === 'tel' ? <Phone className="h-5 w-5 text-muted-foreground" /> : <Mail className="h-5 w-5 text-muted-foreground" />}
              </div>
            </Button>
          </a>
        ))}
      </CardContent>
    </Card>
  );
}
