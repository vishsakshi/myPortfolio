import { motion } from "framer-motion";

const experiences = [
  {
    type: "Internship",
    role: "Software Development Intern",
    org: "Core Value Technologies",
    year: "2024",
    desc:
      "Worked on real-world web application features, contributing across frontend and backend components while learning professional development workflows and best practices.",
    points: [
      "Built and refined reusable UI components with clean structure and responsiveness",
      "Integrated frontend features with RESTful backend APIs",
      "Improved layout consistency and cross-device responsiveness",
      "Collaborated within a team using version control and structured development workflows",
    ],
  },
  {
    type: "Research",
    role: "Research Contributor",
    org: "Peer-Reviewed Publication",
    year: "2024",
    desc:
      "Contributed to experimental and statistical analysis of nano-mechanical behaviour in additively manufactured aluminium.",
    points: [
      "Analyzed nanoindentation datasets using Python",
      "Applied statistical distribution fitting and hypothesis testing",
      "Studied heterogeneity in mechanical behaviour",
      "Contributed to peer-reviewed publication documentation",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative px-6 md:px-10 py-32 overflow-visible"
    >
      {/* BACKGROUND BLOBS (UNCHANGED) */}
      <div className="absolute top-24 right-0 h-[460px] w-[460px] rounded-full bg-[rgb(var(--primary))/12] blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 left-1/3 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER (UNCHANGED) */}
        <div className="mb-28 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-5 py-1.5 text-smm text-smlate-300 mb-3">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_rgba(255,180,80,0.8)]" />
            Experience
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Building experience through
            <span className="block bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88] bg-clip-text text-transparent">
              real-world work.
            </span>
          </h2>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="space-y-12 lg:hidden">
          {experiences.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-6 bg-white/5 border border-white/10"
            >
              <span className="text-xs uppercase tracking-wider bg-gradient-to-r from-[#ff7a18] to-[#ff2e88] bg-clip-text text-transparent">
                {item.type}
              </span>

              <h3 className="mt-2 text-xl font-extrabold text-white">
                {item.role}
              </h3>

              <p className="text-smlate-300 text-sm">{item.org}</p>
              <p className="text-xs text-smlate-400 mb-4">{item.year}</p>

              <p className="text-sm text-smlate-300 leading-relaxed mb-4">
                {item.desc}
              </p>

              <ul className="space-y-3 text-sm text-smlate-400">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#ff7a18] to-[#ff2e88]" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
        <div className="relative space-y-32 hidden lg:block">

          {/* spine */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse" />
          <div className="absolute left-6 top-0 -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-transparent via-[#ff4d4d]/30 to-transparent blur-md opacity-80" />

          {experiences.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative group grid grid-cols-[1.3fr_2fr] gap-14"
            >
              {/* dot */}
              <div className="absolute left-6 top-5 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-to-r from-[#ff7a18] to-[#ff2e88] shadow-[0_0_12px_rgba(255,77,77,0.8)] animate-pulse" />

              {/* LEFT META */}
              <div className="pl-14 space-y-4">
                <span className="inline-block text-lg font-semibold tracking-wider uppercase bg-gradient-to-r from-[#ff7a18] to-[#ff2e88] bg-clip-text text-transparent">
                  {item.type}
                </span>

                <h3 className="text-2xl font-extrabold text-white">
                  {item.role}
                </h3>

                <p className="text-lg text-smlate-300">{item.org}</p>
                <p className="text-smm text-smlate-400">{item.year}</p>
              </div>

              {/* RIGHT CONTENT */}
              <div className="relative rounded-2xl p-8 pl-10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/15 shadow-[0_20px_60px_-30px_rgba(255,77,77,0.25)] transition-all duration-300 group-hover:border-[rgb(var(--primary))/60] group-hover:shadow-[0_30px_90px_-35px_rgba(255,77,77,0.45)] group-hover:-translate-y-1">
                <p className="text-smlate-300 text-[17px] leading-7 mb-8 max-w-2xl">
                  {item.desc}
                </p>

                <ul className="space-y-4 text-[16px] text-smlate-400">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-3 items-start hover:text-smlate-200 hover:translate-x-1 transition-all">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#ff7a18] to-[#ff2e88]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
