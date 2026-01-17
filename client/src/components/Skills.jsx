import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaCode,
  FaChartBar,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiPython,
  SiPostgresql,
  SiNextdotjs,
  SiJavascript,
  SiMongodb,
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiPostman,
} from "react-icons/si";

/* ---------- DATA ---------- */

const frontendSkills = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript (ES6+)", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS / Tailwind CSS", icon: SiTailwindcss },
];

const backendSkills = [
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "REST APIs", icon: FaCode },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Firebase", icon: SiFirebase },
];

const dataSkills = [
  { name: "Python", icon: SiPython },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Matplotlib / Seaborn", icon: FaChartBar },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Jupyter Notebooks", icon: SiJupyter },
];

const toolsSkills = [
  { name: "Git & GitHub", icon: FaGitAlt },
  { name: "VS Code", icon: FaCode },
  { name: "Vercel", icon: SiVercel },
  { name: "Postman", icon: SiPostman },
  { name: "Figma (basic)", icon: FaFigma },
];

/* ---------- ANIMATION ---------- */

const chipVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.25 },
  }),
};

const cardHover = {
  rest: { y: 0 },
  hover: {
    y: -10,
    boxShadow: "0 30px 90px -25px rgba(255,77,77,0.4)",
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

/* ---------- COMPONENT ---------- */

const Skills = () => {
  return (
    <section id="skills" className="relative px-6 md:px-10 py-28">
      {/* Background accents */}
      <div className="absolute top-0 left-0 h-[420px] w-[420px] rounded-full bg-[rgb(var(--primary))/10] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-[360px] w-[360px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Skills & Technologies
          </h2>
          {/* <p className="mt-5 max-w-2xl text-slate-400 text-lg">
            A focused toolkit across frontend, backend, data science, and the tools
            I use to ship production-ready projects.
          </p> */}
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* CARD TEMPLATE */}
          {[
            {
              label: "Frontend",
              title: "Modern, component-driven UIs",
              desc:
                "Building responsive and accessible user interfaces using modern JavaScript frameworks, with a focus on clean structure and usability.",
              skills: frontendSkills,
            },
            {
              label: "Backend",
              title: "APIs, databases & backend logic",
              desc:
                "Developing backend services and REST APIs, managing databases, and handling application logic to support full-stack web applications.",
              skills: backendSkills,
            },
            {
              label: "Data analysis & ML",
              title: "From data exploration to models",
              desc:
                "Working with Python libraries to clean, analyze, and visualize data, and applying basic machine learning models for insights and experimentation.",
              skills: dataSkills,
            },
            {
              label: "Tools & development workflow",
              title: "Shipping and collaborating effectively",
              desc:
                "Using modern tools for version control, development, deployment, and collaboration to build and maintain projects efficiently.",
              skills: toolsSkills,
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative rounded-3xl bg-white/5 border border-white/10 p-9 backdrop-blur-md overflow-hidden group"
            >
              {/* gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff7a18]/10 via-transparent to-[#ff2e88]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* category */}
              <p className="text-lg font-semibold tracking-widest uppercase mb-4
                bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]
                bg-clip-text text-transparent">
                {card.label}
              </p>

              {/* title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {card.title}
              </h3>

              {/* desc */}
              <p className="text-base text-slate-400 mb-8 leading-relaxed">
                {card.desc}
              </p>

              {/* chips */}
              <div className="flex flex-wrap gap-3 group">
                {card.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={chipVariants}
                      initial="hidden"
                      whileInView="visible"
                      custom={i}
                      viewport={{ once: true }}
                      whileHover={{ y: -2, scale: 1.05 }}
                      className="chip"
                    >
                      <Icon className="text-orange-400 group-hover:text-pink-400 transition-colors duration-300" />
                      <span>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
