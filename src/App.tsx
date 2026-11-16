import { SiteHeader } from '@/components/site/header'
import { Contact, Footer, Hero, Process, Services, Stats, Team, Work } from '@/components/site/sections'

export default function App() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Work />
        <Team />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
