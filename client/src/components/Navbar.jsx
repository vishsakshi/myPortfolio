const Navbar = () => {
  return (
    <nav
      className="
        fixed top-0 left-0 z-50 w-full
        bg-[#0b1220]/70 backdrop-blur-xl
        border-b border-white/10
        animate-[fadeDown_0.6s_ease-out]
      "
    >
      <div className="flex w-full items-center justify-between px-6 md:px-10 py-4">

        {/* SV PROFILE ICON */}
        <a href="#home" className="group relative">
          <div
            className="
              relative flex h-11 w-11 items-center justify-center
              rounded-xl
              bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]
              shadow-lg shadow-[#ff4d4d]/40
              transition-all duration-300
              group-hover:rotate-6
              animate-[svPop_0.6s_ease-out]
            "
          >
            {/* White glow */}
            <div
              className="
                absolute -inset-2 rounded-xl
                bg-white/30 blur-xl
                opacity-60
              "
            />

            {/* Inner overlay */}
            <div
              className="
                absolute inset-[2px] rounded-lg
                bg-black/20
              "
            />

            {/* Text */}
            <span
              className="
                relative z-10 text-base
                font-extrabold tracking-wide
                text-white
              "
            >
              SV
            </span>
          </div>
        </a>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-8">

          {/* NAV LINKS */}
          <div className="hidden md:flex gap-8 text-lg tracking-wide text-white/80">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  relative group hover:text-white transition
                "
              >
                {item}

                {/* Sliding underline */}
                <span
                  className="
                    absolute left-0 -bottom-1 h-[2px] w-0
                    bg-gradient-to-r from-[#ff7a18] to-[#ff2e88]
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </div>

          {/* CTA BUTTON */}
          <a
            href="#contact"
            className="
              rounded-full px-6 py-2.5
              text-smm font-semibold text-white
              bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]
              shadow-lg shadow-[#ff4d4d]/40
              transition-all duration-300
              hover:scale-[1.05]
              hover:shadow-[0_0_40px_rgba(255,77,77,0.6)]
            "
          >
            Let’s talk →
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
