import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative scroll-mt-2 text-white 
      px-6 md:px-10 py-24 overflow-visible"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-20 right-0 
        h-[500px] w-[500px] rounded-full 
        bg-white/5 blur-3xl pointer-events-none z-0"></div>

      <div className="absolute bottom-20 left-0 
        h-[450px] w-[450px] rounded-full 
        bg-[rgb(var(--primary))/15] blur-3xl pointer-events-none z-0"></div>

      <div className="absolute top-1/2 right-1/4 
        h-[300px] w-[300px] rounded-full 
        bg-[rgb(var(--primary))/10] blur-[100px] pointer-events-none z-0"></div>

      {/* MAIN CONTENT */}
      <div
        className="relative z-10 max-w-7xl mx-auto 
        grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] 
        gap-14 lg:gap-24 items-center"
      >
        {/* LEFT — IDENTITY */}
        <div>
          <div className="mb-1 fle"><span className="inline-flex items-center gap-2
  rounded-full bg-white/5 border border-white/10
  px-5 py-1.5 text-s text-slate-300">

            <span className="
    h-2 w-2 rounded-full
    bg-amber-500
    animate-pulse
    shadow-[0_0_10px_rgba(255,180,80,0.8)]
  "></span>
            About me
          </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            I build web systems that feel
            <span
              className="block mt-3 bg-gradient-to-r 
              from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]
              bg-clip-text text-transparent"
            >
              simple, scalable, and reliable.
            </span>
          </h2>

          <div className="space-y-6 pt-6 max-w-2xl">
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              I’m a Computer Science student and full stack web developer who enjoys turning complex problems into clean, practical solutions. I focus on building web applications that are easy to use, well-structured, and grounded in strong fundamentals.

            </p>

            <p className="text-slate-300 leading-relaxed text-sm md:text-lg">
              My approach to development is centered around clarity and balance — writing maintainable code, designing logical backend flows, and creating user interfaces that feel natural to interact with. I care about how different parts of a system work together, not just how they look or function individually.

            </p>
          </div>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-2 gap-6 pt-8 max-w-md">
            <div
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 
              backdrop-blur-sm hover:bg-white/10 
              hover:border-[rgb(var(--primary))/30]
              hover:scale-[1.03] transition-all duration-300"
            >
              <div
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r 
                from-[#ff7a18] to-[#ff4d4d] 
                bg-clip-text text-transparent"
              >
                Hands-on
              </div>
              <div className="text-sm text-slate-300 mt-2 font-medium">
                Project Experience
              </div>
            </div>

            <div
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 
              backdrop-blur-sm hover:bg-white/10 
              hover:border-[rgb(var(--primary))/30]
              hover:scale-[1.03] transition-all duration-300"
            >
              <div
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r 
                from-[#ff4d4d] to-[#ff2e88] 
                bg-clip-text text-transparent"
              >
                Web
              </div>
              <div className="text-sm text-slate-300 mt-2 font-medium">
                Application Developer
              </div>
            </div>
          </div>

          {/* SNAPSHOT ROW */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-400 max-w-3xl">
            {/* <div className="border-l border-white/10 pl-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Based in
              </p>
              <p className="mt-1 font-medium text-slate-200">India</p>
            </div> */}

            <div className="border-l border-white/10 pl-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Focus
              </p>
              <p className="mt-1 font-medium text-slate-200">
                Full-stack development & fundamentals
              </p>
            </div>

            <div className="border-l border-white/10 pl-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Currently
              </p>
              <p className="mt-1 font-medium text-slate-200">
                Building projects & strengthening core concepts
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — PROFILE PHOTO */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Glow */}
            <div
              className="absolute -inset-6 
              bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]
              rounded-[3rem] opacity-25 blur-3xl 
              group-hover:opacity-35 transition-opacity duration-500"
            ></div>

            {/* Frame */}
            <div
              className="absolute inset-0 
              translate-x-5 translate-y-5 
              rounded-[2.5rem] 
              bg-gradient-to-br from-white/10 to-white/5
              transition-transform duration-300
              group-hover:translate-x-3 group-hover:translate-y-3"
            ></div>

            {/* Image */}
            <div
              className="relative 
              h-[400px] w-[300px] md:h-[430px] md:w-[320px] 
              rounded-[2.5rem] overflow-hidden 
              shadow-2xl border border-white/10
              transition-all duration-300
              group-hover:-translate-y-3
              group-hover:shadow-[0_25px_70px_-15px_rgba(255,77,77,0.5)]"
            >
              <img
                src={profile}
                alt="Sakshi Vishwakarma"
                className="h-full w-full object-cover object-center
                transition-transform duration-500 group-hover:scale-110"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t 
                from-black/50 via-transparent to-transparent"
              ></div>

              {/* Badge
              <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2
                px-8 py-3.5 rounded-full
                bg-black/60 backdrop-blur-md border border-white/30
                opacity-0 group-hover:opacity-100 transition-all duration-300
                translate-y-2 group-hover:translate-y-0"
              >
                <p className="text-sm font-bold text-white tracking-wide">
                  CS Undergraduate
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
