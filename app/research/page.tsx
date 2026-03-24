'use client';

import { useState, useMemo } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
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

export default function ResearchPage() {
  const [sortBy, setSortBy] = useState('newest');

  const sortedPapers = useMemo(() => {
    const sorted = [...researchData.papers];
    if (sortBy === 'newest') {
      sorted.sort((a, b) => b.date.localeCompare(a.date));
    } else {
      sorted.sort((a, b) => a.date.localeCompare(b.date));
    }
    return sorted;
  }, [sortBy]);

  return (
    <div className="min-h-screen bg-[#080a0d]">
      <Nav />
      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <SectionLabel>Research</SectionLabel>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Publications & Research
              </h1>
              <p className="text-slate-500 mt-2">
                {researchData.papers.length} academic papers across multiple disciplines
              </p>
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="sort" className="text-sm text-slate-500 whitespace-nowrap">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#0f1419] border border-[#1a2535] text-slate-300 rounded-lg px-4 py-2 text-sm hover:border-cyan-500/40 focus:outline-none focus:border-cyan-500/40 cursor-pointer transition-colors"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedPapers.map((paper, index) => (
              <div
                key={paper.id}
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both` }}
              >
                <ResearchCard paper={paper} abstractLines={5} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
