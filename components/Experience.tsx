import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#080a0d]">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Work History
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-20">
                {/* Dot */}
                <div
                  className={`absolute left-[-4px] md:left-[19px] top-1.5 w-3 h-3 rounded-full border-2 ${
                    exp.current
                      ? "bg-cyan-500 border-cyan-400"
                      : "bg-[#080a0d] border-slate-600"
                  }`}
                />

                <div className="rounded-xl border border-[#1a2535] bg-[#0f1419] p-6 hover:border-cyan-500/40 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 text-sm">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 font-mono">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded-full text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-400">
                        <span className="text-cyan-500 mt-1 shrink-0">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
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
