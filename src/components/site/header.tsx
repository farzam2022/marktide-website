import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { nav } from '@/data/content'
import { Logo } from './logo'

export function SiteHeader() {
  return (
    <header className="dark sticky top-0 z-50 border-b bg-background/90 text-foreground backdrop-blur">
      <div className="container mx-auto flex h-16 items-center gap-6 px-4">
        <Logo />
        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Button key={item.href} variant="ghost" asChild>
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>
        <Button asChild className="hidden md:inline-flex">
          <a href="#contact">Start a project</a>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-auto md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="dark bg-background text-foreground">
            <SheetHeader>
              <SheetTitle>Marktide</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {nav.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Button variant="ghost" asChild className="justify-start">
                    <a href={item.href}>{item.label}</a>
                  </Button>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-4">
                  <a href="#contact">Start a project</a>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
