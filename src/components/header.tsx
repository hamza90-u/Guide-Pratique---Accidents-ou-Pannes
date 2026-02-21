import { Logo } from '@/components/logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="flex min-w-0 items-center gap-2">
          <Logo />
          <h2 className="font-headline text-base font-semibold text-foreground/80 sm:text-lg">
            Guide Pratique : Accidents ou Pannes
          </h2>
        </div>
      </div>
    </header>
  );
}
