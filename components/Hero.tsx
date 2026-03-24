import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 text-sm mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
          {profile.name.split(" ")[0]}{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
            }}
          >
            {profile.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-slate-400 mb-6 font-medium">
          {profile.title}
        </p>

        {/* Tagline */}
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          {profile.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
              boxShadow: "0 0 20px rgba(6,182,212,0.4)",
            }}
          >
            Get in Touch
          </a>
          <a
            href="/Barzi_Bahadin.pdf"
            download
            className="px-8 py-3 rounded-lg font-semibold text-slate-300 border border-slate-600 hover:border-cyan-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            Download CV
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs">
          <span>scroll</span>
          <span className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
