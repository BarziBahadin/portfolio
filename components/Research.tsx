'use client';

import { ArrowRight } from 'lucide-react';
import ResearchCard from '@/components/ResearchCard';
import researchData from '@/data/research.json';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="w-8 h-px bg-cyan-500" />
      <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">
        {children}
      </span>
    </div>
  );
}

const recentPapers = [...researchData.papers]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3);

export default function Research() {
  return (
    <section id="research" className="py-24 px-6 bg-[#080a0d]">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Research</SectionLabel>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Publications
          </h2>
          <p className="text-slate-500 text-sm">
            {researchData.papers.length} papers across multiple disciplines
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentPapers.map((paper) => (
            <ResearchCard key={paper.id} paper={paper} abstractLines={3} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/research"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-colors text-sm font-medium"
          >
            View All {researchData.papers.length} Papers
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
