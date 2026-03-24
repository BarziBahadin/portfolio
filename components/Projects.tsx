import { Star, GitFork, ExternalLink } from 'lucide-react';
import { profile } from '@/lib/data';

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
}

const langColors: Record<string, string> = {
  Python: '#3572A5',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  'Jupyter Notebook': '#DA5B0B',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
};

function formatRepoName(name: string) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

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

export default async function Projects() {
  let projects: Repo[] = [];

  try {
    const res = await fetch(
      'https://api.github.com/users/BarziBahadin/repos?sort=updated&per_page=100',
      { next: { revalidate: 3600 } }
    );
    if (res.ok) {
      const repos: Repo[] = await res.json();
      projects = repos
        .filter((r) => !r.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6);
    }
  } catch {
    // silently fall through to empty state
  }

  if (projects.length === 0) return null;

  return (
    <section id="projects" className="py-24 px-6 bg-[#080a0d]">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            GitHub Projects
          </h2>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 text-sm transition-colors flex items-center gap-1.5"
          >
            <GitHubIcon className="w-4 h-4" />
            View all on GitHub
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((repo) => {
            const color = repo.language ? (langColors[repo.language] ?? '#8b949e') : '#8b949e';
            return (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl border border-[#1a2535] bg-[#0f1419] p-6 hover:border-cyan-500/40 transition-all duration-300 flex flex-col"
              >
                {/* Hover top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-white text-sm leading-snug group-hover:text-cyan-400 transition-colors">
                    {formatRepoName(repo.name)}
                  </h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-500 transition-colors shrink-0 mt-0.5" />
                </div>

                {/* Description */}
                <p className="text-slate-500 text-xs leading-relaxed flex-grow mb-4 line-clamp-3">
                  {repo.description ?? 'No description provided.'}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#1a2535]">
                  {repo.language ? (
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: color }}
                      />
                      {repo.language}
                    </span>
                  ) : (
                    <span />
                  )}
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        {repo.forks_count}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
