import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Education</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Academic Background
        </h2>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#1a2535] bg-[#0f1419] p-6 flex flex-wrap md:flex-nowrap gap-6 items-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <svg
                  className="w-7 h-7 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="text-purple-400 text-sm mb-1">{edu.university}</p>
                <p className="text-slate-500 text-xs">{edu.period}</p>
              </div>

              {/* GPA */}
              <div className="text-right">
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">GPA</div>
                <div
                  className="text-xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                  }}
                >
                  {edu.gpa}
                </div>
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
