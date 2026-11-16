# Marktide website

Company site for **Marktide**, a product + AI engineering studio (Islamabad). It combines the portfolios of the two co-founders for client pitches:

- **Muhammad Farzam Baig**: product management, product ownership, delivery ([portfolio](https://m-farzam.netlify.app/))
- **Muhammad Yasir Khan**: AI and full-stack engineering ([portfolio](https://yasir-khan-7.github.io/Portfolio/))

Live: https://farzam2022.github.io/marktide-website/

## Design system: shadcn/ui, nothing else

The whole UI is built on **[shadcn/ui](https://ui.shadcn.com)** (Radix primitives, `nova` style) with **Tailwind CSS v4** and **lucide** icons. Rules:

- Use shadcn components from `src/components/ui`. If you need a new one, add it with `npx shadcn@latest add <name>`. Don't bring in another UI library.
- Colours, radius and fonts come from the theme tokens in `src/index.css` (`:root` = light, `.dark` = the navy brand sections). Use token classes like `bg-primary` and `text-muted-foreground`, never hex values.
- To make a section navy, add the `dark` class to it.
- No hand-written CSS files. Use Tailwind utilities on top of the tokens.

## Structure

```
src/data/content.ts           all copy: edit text, projects and team here
src/components/site/          page sections (header, hero, services, work, team, process, contact)
src/components/ui/            shadcn components (generated)
src/index.css                 Tailwind + shadcn theme tokens (Marktide blue/navy)
public/img/                   project screenshots
.github/workflows/deploy.yml  builds and deploys to GitHub Pages on every push to main
```

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173/marktide-website/.

## Content rules

Every claim on the site comes from one of our CVs or portfolios. Each work item says who did it and where. Don't add metrics or clients we can't back up.

## TODO

- [ ] Founder photos (swap `AvatarFallback` initials for `AvatarImage`)
- [ ] Marktide company email + custom domain
- [ ] Link to the Marktide LinkedIn company page (currently a search link)
- [ ] Testimonials
