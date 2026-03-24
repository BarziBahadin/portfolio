# Claude Code Prompt: Set Up Research & Publications Page

Copy and paste this entire prompt into Claude Code to have it automatically set up your research page.

---

## PROMPT FOR CLAUDE CODE

I want you to set up a Research & Publications page for my Next.js portfolio. Please do the following:

### 1. Create Folder Structure
Create these folders (if they don't exist):
- `app/research/`
- `components/`
- `data/`
- `public/research/`

### 2. Create the Research Page Component
Create file: `app/research/page.tsx`

```tsx
'use client';

import { useState, useMemo } from 'react';
import ResearchCard from '@/components/ResearchCard';
import researchData from '@/data/research.json';

export default function ResearchPage() {
  const [sortBy, setSortBy] = useState('newest');

  const sortedPapers = useMemo(() => {
    const sorted = [...researchData.papers];
    if (sortBy === 'newest') {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'oldest') {
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    return sorted;
  }, [sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Research & Publications</h1>
              <p className="text-slate-600 mt-2">{researchData.papers.length} papers</p>
            </div>
            
            {/* Sort Filter */}
            <div className="flex items-center gap-3">
              <label htmlFor="sort" className="text-sm font-medium text-slate-700">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm font-medium hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer transition"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Papers Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {sortedPapers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {sortedPapers.map((paper, index) => (
              <div
                key={paper.id}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <ResearchCard paper={paper} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">No research papers yet.</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
```

### 3. Create the Research Card Component
Create file: `components/ResearchCard.tsx`

```tsx
'use client';

import { Download, Calendar } from 'lucide-react';

interface ResearchCardProps {
  paper: {
    id: string;
    title: string;
    abstract: string;
    date: string;
    file: string;
  };
}

export default function ResearchCard({ paper }: ResearchCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString + '-01');
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long'
    }).format(date);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = paper.file;
    link.download = `${paper.title.replace(/\s+/g, '-')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <article className="group relative h-full">
      {/* Card */}
      <div className="h-full bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col">
        
        {/* Date & Meta */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
          <Calendar className="w-4 h-4" />
          <time dateTime={paper.date}>
            {formatDate(paper.date)}
          </time>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {paper.title}
        </h2>

        {/* Abstract */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {paper.abstract}
        </p>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 active:bg-blue-200 transition-colors border border-blue-100 hover:border-blue-200"
          aria-label={`Download ${paper.title}`}
        >
          <Download className="w-4 h-4" />
          <span>Download PDF</span>
        </button>

        {/* Hover accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </article>
  );
}
```

### 4. Create the Data File
Create file: `data/research.json`

```json
{
  "papers": [
    {
      "id": "paper-001",
      "title": "Your First Research Paper Title",
      "abstract": "A brief 2-3 sentence abstract explaining your research topic and key findings.",
      "date": "2024-03",
      "file": "/research/paper-001.pdf"
    },
    {
      "id": "paper-002",
      "title": "Your Second Research Paper",
      "abstract": "Abstract for the second paper with key insights and methodology.",
      "date": "2024-01",
      "file": "/research/paper-002.pdf"
    },
    {
      "id": "paper-003",
      "title": "Third Research Study",
      "abstract": "Abstract explaining the third research and its outcomes.",
      "date": "2023-11",
      "file": "/research/paper-003.pdf"
    }
  ]
}
```

### 5. What You Need To Do Manually

After Claude Code creates these files, you need to:

1. **Convert Word Files to PDF**
   - Convert all 17 research papers from Word format to PDF
   - Save them as: `paper-001.pdf`, `paper-002.pdf`, ... `paper-017.pdf`

2. **Add PDFs to public/research/**
   - Place all converted PDFs in the `public/research/` folder

3. **Fill in research.json**
   - Open `data/research.json`
   - Add all 17 papers with:
     - `id`: paper-001 to paper-017
     - `title`: Your research paper title
     - `abstract`: 2-3 sentence summary
     - `date`: Publication date in YYYY-MM format
     - `file`: Path to the PDF (e.g., `/research/paper-001.pdf`)

4. **Add Navigation Link (Optional)**
   - Add a link to `/research` in your main navigation menu

5. **Test**
   - Run `npm run dev`
   - Visit `http://localhost:3000/research`
   - Make sure PDFs download correctly

---

## Summary

Claude Code will create:
- ✅ `app/research/page.tsx` - Main research page
- ✅ `components/ResearchCard.tsx` - Card component
- ✅ `data/research.json` - Data file template
- ✅ `public/research/` folder - Ready for PDFs

You will need to:
- 📄 Convert Word files → PDF
- 📁 Add PDFs to `public/research/`
- 📝 Fill in `data/research.json` with your 17 papers
- 🔗 Add navigation link (optional)

That's it! Your research page will be live and professional-looking.
