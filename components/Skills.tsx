import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          What I Work With
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-[#1a2535] bg-[#0f1419] p-6"
            >
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-5">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm text-slate-300 border border-[#1a2535] bg-[#080a0d] hover:border-cyan-500/40 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
