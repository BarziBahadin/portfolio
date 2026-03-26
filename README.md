# Barzi Bahaalddin — Personal Portfolio

My personal portfolio website, Data Analyst & IT Engineer. Built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript.

## Live Sections

| Section | Route | Description |
|---|---|---|
| Hero | `/#hero` | Name, title, tagline, CV download, contact CTA |
| About | `/#about` | Professional summary |
| Experience | `/#experience` | Work history at Ruyat Technologies + freelance |
| Skills | `/#skills` | Technical skills, soft skills, languages |
| Certifications | `/#certifications` | Professional certifications |
| Education | `/#education` | BSc Computer Engineering, Komar University |
| Projects | `/#projects` | Selected projects |
| Research | `/#research` | 3 most recent papers with links |
| All Papers | `/research` | Full list of 16 academic papers, sortable |
| Contact | `/#contact` | Contact form / links |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4
- **Icons:** Lucide React
- **Language:** TypeScript 5
- **Fonts:** Geist (via `next/font`)

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx            # Home page — assembles all sections
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── globals.css         # Global styles
│   └── research/
│       └── page.tsx        # Full research papers page
├── components/
│   ├── Nav.tsx             # Sticky navigation bar
│   ├── Hero.tsx            # Landing hero section
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Certifications.tsx
│   ├── Education.tsx
│   ├── Projects.tsx
│   ├── Research.tsx        # Homepage research preview (3 papers)
│   ├── ResearchCard.tsx    # Reusable paper card with expand/collapse
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts             # All site content — edit here to update the site
├── data/
│   └── research.json       # Academic papers metadata + PDF paths
└── public/
    ├── Barzi_Bahadin.pdf   # CV / Resume
    └── research/           # PDF files for all academic papers
```

## Updating Content

All site content lives in two files:

- **`lib/data.ts`** — profile info, experience, skills, certifications, education, and nav links
- **`data/research.json`** — academic papers (title, abstract, date, PDF path)

### Adding a research paper

1. Place the PDF in `public/research/`
2. Add an entry to `data/research.json`:

```json
{
  "id": "paper-018",
  "title": "Your Paper Title",
  "abstract": "Paper abstract text...",
  "date": "2025-06",
  "file": "/research/Your Paper Title.pdf"
}
```

### Removing a research paper

1. Delete the PDF from `public/research/`
2. Remove the corresponding entry from `data/research.json`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build   # production build
npm run start   # serve production build locally
```

