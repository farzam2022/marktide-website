/**
 * All site copy lives here. Every claim is sourced from Farzam's CV / portfolio
 * or Yasir's portfolio (github.com/Yasir-Khan-7/Portfolio). Don't add metrics or
 * clients we can't back up, and keep the "who did what" credit on each item.
 */
const img = (f: string) => `${import.meta.env.BASE_URL}img/${f}`

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Team', href: '#team' },
  { label: 'Process', href: '#process' },
]

export const hero = {
  status: 'Taking on new projects',
  title: 'Product thinking and AI engineering.',
  accent: 'One team.',
  lede: 'Marktide is a two-founder studio from Islamabad. One of us scopes the product, the other builds it. You get a spec your team can trust and software that runs in production.',
  pair: [
    {
      initials: 'FB',
      name: 'Farzam',
      role: 'Product & delivery',
      points: ['Discovery & MVP scope', 'PRDs, user stories, acceptance criteria', 'Sprints, UAT, release SOPs'],
    },
    {
      initials: 'YK',
      name: 'Yasir',
      role: 'AI & full-stack engineering',
      points: ['AI agents, LLM apps, MCP', 'Web & mobile, React / React Native', 'Data pipelines, AWS, Docker'],
    },
  ],
  trustLabel: 'Our experience comes from teams in the UK, the Netherlands and Belgium',
  trust: ['Data Panda', 'Sideline Technologies', 'Top of Mind', 'Orbit Digital', 'Pak Sadat', 'Dataventiv'],
}

export const stats = [
  { value: '18+', label: 'SaaS modules planned and shipped across web, iOS and Android' },
  { value: '2', label: 'client systems taken from first commit to production hosting' },
  { value: '~40%', label: 'faster delivery on mobile and web with AI-assisted engineering' },
  { value: '3', label: 'countries of clients and teams: UK, NL, BE' },
]

export const services = [
  {
    icon: 'compass',
    title: 'Discovery & MVP scoping',
    body: 'Personas, user journeys and a prioritised backlog (RICE / MoSCoW), so you know what to build first and what to leave out.',
    tags: ['Workshops', 'Roadmap', 'Backlog'],
  },
  {
    icon: 'file',
    title: 'PRDs & API specifications',
    body: 'Specs that cover payloads, validation rules, edge cases and error handling as well as the user story. Engineers build from them without asking twice.',
    tags: ['PRDs', 'Gherkin', 'OpenAPI'],
  },
  {
    icon: 'bot',
    title: 'AI agents & LLM apps',
    body: 'Multi-agent workflows, retrieval and tool use, and MCP integrations, inside interfaces people actually use. Example: sales-visit recordings turned into CRM reports.',
    tags: ['Claude', 'OpenAI', 'MCP', 'RAG'],
  },
  {
    icon: 'smartphone',
    title: 'Web & mobile builds',
    body: 'SaaS platforms, admin panels and iOS / Android apps, built end to end and deployed on infrastructure we set up.',
    tags: ['React', 'React Native', 'Next.js', 'AWS'],
  },
  {
    icon: 'database',
    title: 'Data pipelines & reporting',
    body: 'Ingestion, ETL and dashboards that turn operational data into decisions, from industrial sensors to Power BI.',
    tags: ['Spark', 'Kafka', 'Airflow', 'Fabric', 'Power BI'],
  },
  {
    icon: 'check',
    title: 'Agile delivery & QA',
    body: 'Jira or ClickUp set up properly, a sprint cadence, hands-on QA on real devices, UAT sign-off and release SOPs that keep production stable.',
    tags: ['Scrum', 'Scrumban', 'UAT', 'Releases'],
  },
] as const

export const deliveries = [
  {
    client: 'Orbit Digital',
    meta: 'United Kingdom · Built by Yasir',
    body: 'A complete website for a UK client, from development to AWS hosting. The same hands that wrote it put it into production.',
    tags: ['Full website', 'AWS hosting'],
    image: img('orbitdigital_1.webp'),
    href: 'https://orbitdigital.uk/',
    linkLabel: 'orbitdigital.uk',
  },
  {
    client: 'Pak Sadat Travel & Tours',
    meta: 'Hajj & Umrah services · Built by Yasir',
    body: 'A Hajj and Umrah voucher system, developed and deployed end to end. Pilgrims present the right details at onboarding and offboarding.',
    tags: ['Web app', 'Deployment'],
    image: img('paksadat_1.webp'),
    href: 'https://voucher.paksadat.com/login',
    linkLabel: 'voucher.paksadat.com',
  },
]

export const products = [
  {
    name: 'TrainingsManager',
    meta: 'Sports SaaS · Netherlands · Product: Farzam',
    body: 'Multi-tenant, white-label SaaS for tennis and padel academies, on web, iOS and Android. Planning for 18+ modules, from enrollment and scheduling to invoicing and reporting. Release SOPs and QA sign-off introduced, and the Coach apps taken to App Store submission.',
    tags: ['Web admin', 'iOS', 'Android', 'Scrumban'],
    href: 'https://go.trainingsmanager.nl',
    linkLabel: 'go.trainingsmanager.nl',
  },
  {
    name: 'FROY',
    meta: 'Social app · MVP → V1 · Product: Farzam',
    body: 'A social mobile app with a React admin panel and real-time chat. Roadmap ownership across Trust & Safety, Matching, Maps and Notifications, plus integrations for KYC (Yoti / Veriff), Google Maps and Twilio / SignalR.',
    tags: ['iOS', 'Android', 'Admin panel', 'GDPR'],
    href: 'https://panel.froy.app',
    linkLabel: 'panel.froy.app',
  },
  {
    name: 'AI agents & data at Data Panda',
    meta: 'AI & data · Belgium · Product: Farzam',
    body: 'Product and QA for AI agents, a point-of-sale SaaS, a job fair platform with mobile apps, and Power BI reporting. AI workflows prototyped with Claude and MCP.',
    tags: ['AI agents', 'MCP', 'Microsoft Fabric', 'Power BI'],
  },
  {
    name: 'Top of Mind',
    meta: 'Agentic capture · Belgium · Engineering: Yasir',
    body: 'AI agent workflows that pull contacts, tasks and relationship context out of voice, text and photo inputs, with Supabase-backed extraction and React Native mobile features.',
    tags: ['AI agents', 'Supabase', 'React Native'],
  },
]

export const builds = [
  {
    name: 'GoToGenie',
    body: 'Location discovery with five specialised AI agents for place recommendations.',
    image: img('gotogenie.webp'),
    href: 'https://gotogenie.lovable.app/',
  },
  {
    name: 'Agentic Mosaic',
    body: 'Multi-agent pipeline that streams progress to the UI with server-sent events.',
    image: img('agentic-mosaic.webp'),
    href: 'https://agentic-mosaic.lovable.app/',
  },
  {
    name: 'IESA: Energy Scenario Analysis',
    body: 'Energy-planning tool with ML and LLM agents for scenario analysis. Python, Streamlit, MySQL.',
    image: img('iesa.webp'),
    href: 'https://iesa-entry.streamlit.app',
  },
]

export const team = [
  {
    initials: 'FB',
    name: 'Muhammad Farzam Baig',
    role: 'Co-founder · Product Manager / Product Owner',
    bio: 'Product manager with a software engineering background, working on SaaS, data and AI products. At Data Panda (Belgium) he owns product and QA for AI agents and SaaS platforms. Before that, at Sideline Technologies, he ran TrainingsManager and FROY: PRDs, Scrumban, API reviews and App Store releases.',
    skills: ['Product ownership', 'PRDs', 'Scrum', 'API planning', 'QA', 'MCP', 'Power BI'],
    creds: 'BSc Software Engineering, Foundation University · Software Product Management Specialization, University of Alberta',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/farzam2025' },
      { label: 'Portfolio', href: 'https://m-farzam.netlify.app/' },
      { label: 'Email', href: 'mailto:farzambaig2016@gmail.com' },
    ],
  },
  {
    initials: 'YK',
    name: 'Muhammad Yasir Khan',
    role: 'Co-founder · AI Engineer / Forward Deployed Engineer',
    bio: 'Engineer who builds AI-powered apps, data systems and the infrastructure they run on. Data & AI Engineer at Data Panda (Belgium). Previously built agentic capture at Top of Mind, AI-native web and mobile apps at Sideline Technologies, and Spark / Kafka / Airflow pipelines for industrial clients at Dataventiv.',
    skills: ['Python', 'LLMs & agents', 'React / React Native', 'ETL', 'Docker', 'AWS'],
    creds: null,
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yasir-khan7134/' },
      { label: 'Portfolio', href: 'https://yasir-khan-7.github.io/Portfolio/' },
      { label: 'GitHub', href: 'https://github.com/Yasir-Khan-7' },
    ],
  },
]

export const process = [
  { title: 'Discover', body: 'A call, then a short workshop. We agree on users, outcomes and what "done" means.' },
  { title: 'Specify', body: 'Backlog, PRDs and API contracts with acceptance criteria. You approve them before we build.' },
  { title: 'Build', body: 'Two-week sprints with a demo at the end of each. You see working software every sprint.' },
  { title: 'Release & support', body: 'UAT sign-off, a production release with a set procedure, then hotfixes and the next iteration.' },
]

export const contact = {
  title: 'Have something to build?',
  body: "Tell us what you're working on. The first step is a 30-minute discovery call.",
  channels: [
    { icon: 'mail', label: 'Email', value: 'farzambaig2016@gmail.com', href: 'mailto:farzambaig2016@gmail.com?subject=Project%20enquiry%20via%20Marktide' },
    { icon: 'message', label: 'WhatsApp', value: '+92 313 5924469', href: 'https://wa.me/923135924469' },
    { icon: 'linkedin', label: 'LinkedIn', value: 'Marktide', href: 'https://www.linkedin.com/search/results/all/?keywords=Marktide' },
  ],
} as const
