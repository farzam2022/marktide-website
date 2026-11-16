# Marktide website

Company site for **Marktide**, a product + AI engineering studio (Islamabad). It combines the portfolios of the two co-founders for client pitches:

- **Muhammad Farzam Baig**: product management, product ownership, delivery ([portfolio](https://m-farzam.netlify.app/))
- **Muhammad Yasir Khan**: AI and full-stack engineering ([portfolio](https://yasir-khan-7.github.io/Portfolio/))

## Stack

Plain HTML, CSS and JS with no build step. You edit `index.html` and push. GitHub Pages deploys from `main`.

```
index.html      all content (sections: hero, services, work, team, process, contact)
styles.css      design tokens are at the top (:root)
main.js         mobile menu + scroll reveal
assets/img/     project screenshots
```

## Run locally

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Content rules

Every claim on the site comes from one of our CVs or portfolios. Each work item says who did it and where. Don't add metrics or clients we can't back up.

## TODO

- [ ] Founder photos (replace the `FB` / `YK` avatars)
- [ ] Marktide company email + custom domain
- [ ] Link to the Marktide LinkedIn company page (currently a search link)
- [ ] Testimonials
