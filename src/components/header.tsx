import { Logo } from '@/components/logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
          <h2 className="font-headline text-lg font-semibold text-foreground/80">
            <span className="hidden sm:inline">Guide Pratique : Accidents ou Pannes</span>
            <span className="sm:hidden">Guide Pratique</span>
          </h2>
        </div>
      </div>
    </header>
  );
}
