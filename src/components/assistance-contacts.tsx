import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, LifeBuoy } from "lucide-react";

const contacts = [
  { name: "Wafa LLD", number: "0522 58 38 58", tel: "+212522583858", type: 'tel' },
  { name: "Arval LLD", number: "0529 05 99 99", tel: "+212529059999", type: 'tel' },
  { name: "Réclamations Techniques", email: "services.techniques.car.ma@alstomgroup.com", type: 'mail' },
];

export function AssistanceContacts() {
  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="p-3 sm:p-4">
        <CardTitle className="font-headline text-lg sm:text-xl">Assistance & Technique</CardTitle>
        <CardDescription className="text-xs">Pour le remorquage, l'assistance ou les questions techniques.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2 sm:gap-3">
        {contacts.map((contact) => (
          <a key={contact.name} href={contact.type === 'tel' ? `tel:${contact.tel}` : `mailto:${contact.email}`} className="block">
            <Button variant="outline" className="w-full h-auto justify-start p-2 sm:p-3 text-left">
              <div className="flex items-center gap-2 sm:gap-3 w-full">
                 <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/10 text-accent-foreground flex-shrink-0">
                    <LifeBuoy className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-xs">{contact.name}</p>
                  <p className="text-[10px] text-muted-foreground break-all">{contact.number || contact.email}</p>
                </div>
                {contact.type === 'tel' ? <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" /> : <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />}
              </div>
            </Button>
          </a>
        ))}
      </CardContent>
    </Card>
  );
}
