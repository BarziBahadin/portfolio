import { profile } from "@/lib/data";

const stats = [
  { value: "3+", label: "Years at Ruyat" },
  { value: "4", label: "Roles progressed" },
  { value: "5+", label: "Certifications" },
  { value: "B2", label: "English (IELTS 6.5)" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>About</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Who I Am
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Summary */}
          <div className="md:col-span-2">
            <p className="text-slate-400 leading-relaxed text-base md:text-lg">
              {profile.summary}
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-4 self-start">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-[#1a2535] bg-[#0f1419] p-5 text-center"
              >
                <div
                  className="text-2xl font-bold bg-clip-text text-transparent mb-1"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                  }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-slate-500 leading-snug">{s.label}</div>
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
