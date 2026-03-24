import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-[#080a0d]">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Certifications</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Credentials
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#1a2535] bg-[#0f1419] p-5 hover:border-cyan-500/40 transition-colors duration-300 group"
            >
              {/* Icon placeholder */}
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <svg
                  className="w-5 h-5 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>

              <h3 className="font-semibold text-white text-sm mb-1 leading-snug">
                {cert.name}
              </h3>
              <p className="text-xs text-slate-500 mb-2">{cert.issuer}</p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#1a2535]">
                <span className="text-xs text-slate-600 font-mono">{cert.date}</span>
                {cert.reference && (
                  <span className="text-xs text-cyan-500/60 font-mono truncate ml-2">
                    Ref: {cert.reference}
                  </span>
                )}
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
