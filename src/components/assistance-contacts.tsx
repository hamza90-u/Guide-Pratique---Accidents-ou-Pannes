import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, LifeBuoy } from "lucide-react";

const contactGroups = [
  {
    title: "Dépannage ou constat",
    contacts: [
      { name: "Assistance Wafa LLD", number: "0802 00 33 33", tel: "0802003333", type: 'tel' as const },
      { name: "Assistance Arval LLD", number: "0522 87 98 79", tel: "0522879879", type: 'tel' as const }
    ]
  },
  {
    title: "Panne ou dysfonctionnement",
    contacts: [
      { name: "Technique Wafa LLD", number: "0522 66 76 67", tel: "0522667667", type: 'tel' as const },
      { name: "Conducteur Arval", number: "0522 87 98 79", tel: "0522879879", type: 'tel' as const }
    ]
  },
  {
    title: "Autres contacts",
    contacts: [
        { name: "Wafa LLD (Général)", number: "0522 58 38 58", tel: "0522583858", type: 'tel' as const },
        { name: "Arval LLD (Général)", number: "0529 05 99 99", tel: "0529059999", type: 'tel' as const },
        { name: "Réclamations Techniques", email: "services.techniques.car.ma@alstomgroup.com", type: 'mail' as const },
    ]
  }
];

export function AssistanceContacts() {
  return (
    <Card id="assistance-contacts" className="w-full overflow-hidden">
      <CardHeader className="p-3 sm:p-4">
        <CardTitle className="font-headline text-lg sm:text-xl">Assistance & Technique</CardTitle>
        <CardDescription className="text-xs">Pour le remorquage, l'assistance ou les questions techniques.</CardDescription>
      </CardHeader>
      <CardContent className="p-3 sm:p-4 grid gap-2 sm:gap-3">
        {contactGroups.map((group, groupIndex) => (
          <div key={group.title}>
            <h4 className={`font-headline font-semibold text-sm mb-2 text-card-foreground ${groupIndex > 0 ? 'mt-3 sm:mt-4' : ''}`}>
              {group.title}
            </h4>
            <div className="grid gap-2 sm:gap-3">
              {group.contacts.map((contact) => (
                <a key={contact.name} href={contact.type === 'tel' ? `tel:${contact.tel}` : `mailto:${contact.email}`} className="block">
                  <Button variant="outline" className="w-full h-auto justify-start p-2 sm:p-3 text-left">
                    <div className="flex items-center gap-2 sm:gap-3 w-full">
                       <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/10 text-accent-foreground flex-shrink-0">
                          <LifeBuoy className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-xs whitespace-normal break-words">{contact.name}</p>
                        <p className="text-[10px] text-muted-foreground break-all">{contact.number || contact.email}</p>
                      </div>
                      {contact.type === 'tel' ? <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" /> : <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />}
                    </div>
                  </Button>
                </a>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
