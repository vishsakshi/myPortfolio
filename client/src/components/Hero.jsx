import { useEffect, useState } from "react";

const roles = [
  "Full Stack Web Developer",
  "JavaScript Developer",
  "CS Undergraduate",
  "Problem-Solving Engineer",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const t = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(t);
    } else {
      const pause = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, roleIndex]);

  return (
    <section
      id= "home"
      className="relative min-h-screen flex items-center justify-center
      text-white px-6 md:px-10 overflow-hidden"
    >
      {/* ORIGINAL BACKGROUND BLOBS */}
      <div className="absolute -top-32 -left-32 
        h-[500px] w-[500px] rounded-full 
        bg-[rgb(var(--primary))/18] blur-3xl pointer-events-none z-0" />

      {/* <div className="absolute -bottom-20 right-0 
        h-[500px] w-[500px] rounded-full 
        bg-white/5 blur-3xl pointer-events-none z-0" /> */}

      <div className="absolute -bottom-40 left-1/2 
        h-[500px] w-[500px] -translate-x-1/2 
        rounded-full bg-[rgb(var(--primary))/8] 
        blur-[120px] pointer-events-none z-0" />

      {/* CENTER FOCUS GLOW — SAME PAGE BG, JUST LIGHT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div
          className="h-[400px] w-[400px] rounded-full
    bg-white/10
    blur-[160px]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl text-center">
        <div className="text-center animate-[heroReveal_0.9s_ease-out_both]">

          {/* OPEN TO WORK BADGE */}
          <div className="mb-1 flex justify-center"><span className="inline-flex items-center gap-2
  rounded-full bg-white/5 border border-white/10
  px-6 py-1.5 text-sm text-white">

            <span className="
    h-2 w-2 rounded-full
    bg-amber-500
    animate-pulse
    shadow-[0_0_10px_rgba(255,180,80,0.8)]
  "></span>
            Available for Internships
          </span>
          </div>

          {/* NAME — SIMPLE, WHITE, ONE LINE */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl
  font-extrabold tracking-tight whitespace-nowrap text-white
  drop-shadow-[0_0_35px_rgba(255,255,255,0.35)]"
          >
            Sakshi Vishwakarma
          </h1>

          {/* ROLE — TYPEWRITER WITH GRADIENT */}
          <p
            className="mt-3 text-2xl md:text-2xl
          font-semibold h-[42px]
          bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]
          bg-clip-text text-transparent"
          >
            {text}
            <span className="ml-1 inline-block w-[10px] animate-pulse
    bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]
    bg-clip-text text-transparent">|</span>
          </p>

          {/* DESCRIPTION */}
          <p
            className="mt-3 max-w-2xl mx-auto
          text-smlate-400 leading-relaxed text-base md:text-lg"
          >
            I develop clean, scalable web applications using modern JavaScript technologies, with experience across frontend, backend, and a strong focus on fundamentals and problem-solving.

          </p>

          {/* ACTIONS */}
          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="rounded-xl px-8 py-4
            text-base font-semibold text-white
            bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]
            shadow-lg shadow-[#ff4d4d]/40
            hover:opacity-95 hover:scale-[1.04]
            transition"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="rounded-xl px-8 py-4
            text-base font-semibold text-white bg-slate-900
            border border-white/20
            hover:bg-white/5 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
