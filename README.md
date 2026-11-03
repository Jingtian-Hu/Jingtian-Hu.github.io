# jingtian-hu.github.io

Personal academic website of Jingtian Hu, built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `master`.

## Editing content

| What | Where |
| --- | --- |
| Papers (title, co-authors, status tags, links, abstract) | `src/content/papers/*.md`, one file per paper; the abstract is the Markdown body |
| Bio | `src/pages/index.astro` (English), `src/pages/zh.astro` (Chinese) |
| News, teaching, contact links | `src/data/site.ts` |
| PDFs (papers, posters, slides) | `public/files/` |
| CV | `public/cv/Jingtian_Hu_CV.pdf` |
| Photo | `public/images/portrait.jpg` (4:5) |
| Colors and fonts | `src/styles/global.css` |

## Local preview

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```
