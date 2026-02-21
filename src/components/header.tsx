import { Logo } from '@/components/logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-baseline gap-4">
          <Logo />
          <h2 className="hidden sm:block font-headline text-xl font-semibold text-foreground/80">
            Guide Mobile
          </h2>
        </div>
      </div>
    </header>
  );
}
