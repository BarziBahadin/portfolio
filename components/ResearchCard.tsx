'use client';

import { useState } from 'react';
import { Download, Calendar, ExternalLink, ChevronDown } from 'lucide-react';

interface Paper {
  id: string;
  title: string;
  abstract: string;
  date: string;
  file: string;
}

interface ResearchCardProps {
  paper: Paper;
  abstractLines?: 3 | 5;
}

function formatDate(dateString: string) {
  const date = new Date(dateString + '-01');
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(date);
}

export default function ResearchCard({ paper, abstractLines = 5 }: ResearchCardProps) {
  const [expanded, setExpanded] = useState(false);
  const clampClass = abstractLines === 3 ? 'line-clamp-3' : 'line-clamp-5';

  return (
    <article className="group relative h-full">
      {/* Hover accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="h-full bg-[#0f1419] rounded-xl border border-[#1a2535] p-5 hover:border-cyan-500/40 transition-all duration-300 flex flex-col">

        {/* Date */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <time dateTime={paper.date}>{formatDate(paper.date)}</time>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-white text-sm leading-snug mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {paper.title}
        </h3>

        {/* Abstract with expand/collapse */}
        <div className="mb-3">
          <div className="relative">
            <p className={`text-slate-500 text-xs leading-relaxed transition-all duration-300 ${expanded ? '' : clampClass}`}>
              {paper.abstract}
            </p>
            {/* Fade gradient when collapsed */}
            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#0f1419] to-transparent pointer-events-none" />
            )}
          </div>

          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 flex items-center gap-1 text-xs text-cyan-500/70 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
            {expanded ? 'Collapse abstract' : 'Read abstract'}
          </button>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <a
            href={paper.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 flex-1 px-3 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-medium hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View PDF
          </a>
          <a
            href={paper.file}
            download
            className="inline-flex items-center justify-center gap-1.5 flex-1 px-3 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-medium hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Download
          </a>
        </div>
      </div>
    </article>
  );
}
