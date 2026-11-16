import type { ReactNode } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CircleCheck,
  Compass,
  Database,
  FileText,
  Mail,
  MessageCircle,
  Smartphone,
  Users,
} from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { builds, contact, deliveries, hero, process, products, services, stats, team } from '@/data/content'

const serviceIcons = { compass: Compass, file: FileText, bot: Bot, smartphone: Smartphone, database: Database, check: CircleCheck }
const contactIcons = { mail: Mail, message: MessageCircle, linkedin: Users }

/* ---------- shared bits ---------- */

function Section({ id, className, children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={cn('bg-background py-20 text-foreground md:py-28', className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}

function SectionHeader({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">{kicker}</p>
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg text-muted-foreground">{children}</p>}
    </div>
  )
}

function Tags({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <Badge key={t} variant="secondary">
          {t}
        </Badge>
      ))}
    </div>
  )
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Button variant="link" asChild className="h-auto px-0">
      <a href={href} target="_blank" rel="noopener">
        {children}
        <ArrowUpRight data-icon="inline-end" />
      </a>
    </Button>
  )
}

function Subhead({ children }: { children: ReactNode }) {
  return <h3 className="mt-16 mb-6 text-sm font-semibold tracking-widest text-muted-foreground uppercase first:mt-0">{children}</h3>
}

/* ---------- hero ---------- */

export function Hero() {
  return (
    <section className="dark relative overflow-hidden bg-background pt-16 pb-10 text-foreground md:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] size-[700px] rounded-full bg-primary/20 blur-3xl"
      />
      <div className="relative container mx-auto grid items-center gap-12 px-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Badge variant="outline" className="mb-6 h-7 gap-2 px-3 text-sm">
            <span className="size-2 rounded-full bg-emerald-400" />
            {hero.status}
          </Badge>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {hero.title} <span className="text-primary">{hero.accent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{hero.lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="#contact">
                Book a discovery call <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#work">See our work</a>
            </Button>
          </div>
        </div>

        <Card className="bg-card/60 backdrop-blur">
          <CardContent className="flex flex-col gap-3">
            {hero.pair.map((p, i) => (
              <div key={p.name}>
                {i > 0 && <div aria-hidden className="mx-auto mb-3 h-5 w-px bg-primary" />}
                <div className="rounded-lg border bg-background/60 p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <Avatar size="lg">
                      <AvatarFallback className="bg-primary font-semibold text-primary-foreground">{p.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{p.name}</p>
                      <p className="text-sm text-muted-foreground">{p.role}</p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="relative container mx-auto mt-16 px-4">
        <Separator className="mb-8" />
        <p className="mb-4 text-center text-xs font-medium tracking-widest text-muted-foreground uppercase">{hero.trustLabel}</p>
        <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {hero.trust.map((t) => (
            <li key={t} className="font-heading text-lg font-medium text-foreground/80">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- stats ---------- */

export function Stats() {
  return (
    <section aria-label="Track record" className="border-b bg-background">
      <div className="container mx-auto grid grid-cols-2 px-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.value} className={cn('py-8 pr-4', i % 2 === 1 && 'border-l pl-4', i === 2 && 'lg:border-l lg:pl-4', i >= 2 && 'max-lg:border-t')}>
            <p className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">{s.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- services ---------- */

export function Services() {
  return (
    <Section id="services">
      <SectionHeader kicker="Services" title="From the first call to the App Store">
        Hire us for one part or for the whole thing. Most clients start with discovery and stay for the build.
      </SectionHeader>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = serviceIcons[s.icon]
          return (
            <Card key={s.title}>
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-lg">{s.title}</CardTitle>
                <CardDescription className="text-[15px] leading-relaxed">{s.body}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Tags items={s.tags} />
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

/* ---------- work ---------- */

export function Work() {
  return (
    <Section id="work" className="bg-muted">
      <SectionHeader kicker="Work" title="Things we have shipped">
        Client systems, products we have run in production and AI builds. Each one says who did what.
      </SectionHeader>

      <Subhead>Client deliveries</Subhead>
      <div className="flex flex-col gap-6">
        {deliveries.map((d, i) => (
          <Card key={d.client} className="grid gap-0 py-0 md:grid-cols-2">
            <a
              href={d.href}
              target="_blank"
              rel="noopener"
              className={cn('block overflow-hidden bg-secondary', i % 2 === 1 && 'md:order-2')}
            >
              <img
                src={d.image}
                alt={`${d.client} screenshot`}
                loading="lazy"
                className="aspect-[16/10] size-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
              />
            </a>
            <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
              <p className="text-sm font-medium text-primary">{d.meta}</p>
              <h4 className="font-heading text-2xl font-semibold tracking-tight">{d.client}</h4>
              <p className="text-muted-foreground">{d.body}</p>
              <Tags items={d.tags} />
              <div>
                <ExternalLink href={d.href}>{d.linkLabel}</ExternalLink>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Subhead>Products we have run in production</Subhead>
      <div className="grid gap-4 md:grid-cols-2">
        {products.map((p) => (
          <Card key={p.name}>
            <CardHeader>
              <p className="text-sm font-medium text-primary">{p.meta}</p>
              <CardTitle className="text-xl">{p.name}</CardTitle>
              <CardDescription className="text-[15px] leading-relaxed">{p.body}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto flex-col items-start gap-3">
              <Tags items={p.tags} />
              {p.href && <ExternalLink href={p.href}>{p.linkLabel}</ExternalLink>}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Subhead>AI builds</Subhead>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {builds.map((b) => (
          <Card key={b.name} className="pt-0">
            <img src={b.image} alt={`${b.name} screenshot`} loading="lazy" className="aspect-[16/10] w-full border-b object-cover object-top" />
            <CardHeader>
              <CardTitle className="text-lg">{b.name}</CardTitle>
              <CardDescription className="text-[15px] leading-relaxed">{b.body}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <ExternalLink href={b.href}>Live demo</ExternalLink>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  )
}

/* ---------- team ---------- */

export function Team() {
  return (
    <Section id="team">
      <SectionHeader kicker="Team" title="The two people you will talk to">
        No account managers or hand-offs. The people on your call are the people doing the work.
      </SectionHeader>
      <div className="grid gap-6 lg:grid-cols-2">
        {team.map((m) => (
          <Card key={m.name}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="size-16">
                <AvatarFallback className="bg-primary font-heading text-xl font-semibold text-primary-foreground">{m.initials}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl">{m.name}</CardTitle>
                <p className="mt-1 text-sm font-medium text-primary">{m.role}</p>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-[15px] leading-relaxed text-muted-foreground">{m.bio}</p>
              <Tags items={m.skills} />
              {m.creds && <p className="text-sm text-muted-foreground">{m.creds}</p>}
            </CardContent>
            <CardFooter className="mt-auto flex-wrap gap-2">
              {m.links.map((l) => (
                <Button key={l.label} variant="outline" size="sm" asChild>
                  <a href={l.href} target="_blank" rel="noopener">
                    {l.label}
                  </a>
                </Button>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  )
}

/* ---------- process ---------- */

export function Process() {
  return (
    <Section id="process" className="dark">
      <SectionHeader kicker="Process" title="How a project runs">
        We sort out what's unclear before development starts. After that, delivery is a routine.
      </SectionHeader>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((step, i) => (
          <li key={step.title}>
            <Card className="h-full">
              <CardHeader>
                <span className="mb-2 flex size-9 items-center justify-center rounded-full bg-primary font-heading font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <CardTitle className="text-lg">{step.title}</CardTitle>
                <CardDescription className="text-[15px] leading-relaxed">{step.body}</CardDescription>
              </CardHeader>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  )
}

/* ---------- contact + footer ---------- */

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <SectionHeader kicker="Contact" title={contact.title}>
          {contact.body}
        </SectionHeader>
        <div className="flex flex-col gap-3">
          {contact.channels.map((c) => {
            const Icon = contactIcons[c.icon]
            return (
              <Card key={c.label} size="sm" className="transition-colors hover:ring-primary">
                <a href={c.href} target="_blank" rel="noopener" className="flex items-center gap-4 px-(--card-spacing)">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{c.label}</p>
                    <p className="font-medium break-all">{c.value}</p>
                  </div>
                  <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground" />
                </a>
              </Card>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="dark border-t bg-background py-8 text-sm text-muted-foreground">
      <div className="container mx-auto flex flex-wrap justify-between gap-x-6 gap-y-2 px-4">
        <span>© {new Date().getFullYear()} Marktide · Islamabad, Pakistan</span>
        <span>IT services &amp; consulting · Working with clients in Europe and beyond</span>
      </div>
    </footer>
  )
}
