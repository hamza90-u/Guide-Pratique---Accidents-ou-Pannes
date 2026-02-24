import { Header } from '@/components/header';
import { PreUseChecks } from '@/components/pre-use-checks';
import { EmergencyProcedures } from '@/components/emergency-procedures';
import { EmergencyContacts } from '@/components/emergency-contacts';
import { AssistanceContacts } from '@/components/assistance-contacts';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-8">
        <div className="mb-8 text-center animate-in fade-in duration-300">
            <h1 className="font-headline text-xl sm:text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">Guide pratique en cas d'accident ou de panne</h1>
        </div>
        <div className="grid gap-12">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out">
            <PreUseChecks />
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out delay-100">
            <EmergencyProcedures />
          </div>
          <div className="grid md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out delay-200">
            <EmergencyContacts />
            <AssistanceContacts />
          </div>
        </div>
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Alstom. All rights reserved.
      </footer>
    </div>
  );
}
