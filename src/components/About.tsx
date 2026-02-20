export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl lg:text-7xl font-bold mb-16">ABOUT ME</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              Hi, I'm Egor — a Senior Product Analyst and product builder.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              I design analytics systems from the ground up: tracking architecture, data models, KPI frameworks, and metric trees used as a single source of truth.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              I run experiments end-to-end and work cross-functionally with product and engineering to turn data into measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="text-6xl font-bold text-[#B7F34D]">6+</div>
              <div className="text-gray-400">Years in Product Analytics</div>
            </div>

            <div className="space-y-2">
              <div className="text-6xl font-bold text-[#B7F34D]">80+</div>
              <div className="text-gray-400">Experiments Designed &amp; Analyzed</div>
            </div>

            <div className="space-y-2">
              <div className="text-6xl font-bold text-[#B7F34D]">KPI</div>
              <div className="text-gray-400">Frameworks &amp; Metric Trees</div>
            </div>

            <div className="space-y-2">
              <div className="text-6xl font-bold text-[#B7F34D]">DATA</div>
              <div className="text-gray-400">Architecture &amp; Data Models</div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm">SQL</span>
          <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm">Python</span>
          <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm">ClickHouse</span>
          <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm">Supabase</span>
          <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm">Next.js</span>
          <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm">A/B Testing</span>
          <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm">Metric Trees</span>
          <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm">Product Strategy</span>
        </div>
      </div>
    </section>
  );
}
