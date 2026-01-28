import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 z-50 w-full
        bg-[#0b1220]/70 backdrop-blur-xl
        border-b border-white/10
      "
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-4">

        {/* MOBILE: Hamburger (LEFT) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(true)}
        >
          <FiMenu />
        </button>

        {/* DESKTOP: SV LOGO (LEFT) */}
        <a href="#home" className="hidden md:block group">
          <div
            className="
              relative flex h-11 w-11 items-center justify-center
              rounded-xl
              bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]
              shadow-lg shadow-[#ff4d4d]/40
              transition-all duration-300
              group-hover:rotate-6
            "
          >
            <span className="text-base font-extrabold text-white">SV</span>
          </div>
        </a>

        {/* MOBILE: SV LOGO (RIGHT) */}
        <a href="#home" className="md:hidden">
          <div
            className="
              h-10 w-10 rounded-xl flex items-center justify-center
              bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]
            "
          >
            <span className="text-sm font-bold text-white">SV</span>
          </div>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {["About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group text-white/80 hover:text-white"
              >
                {item}
                <span
                  className="
                    absolute left-0 -bottom-1 h-[2px] w-0
                    bg-gradient-to-r from-[#ff7a18] to-[#ff2e88]
                    transition-all duration-300 group-hover:w-full
                  "
                />
              </a>
            )
          )}

          <a
            href="#contact"
            className="
              rounded-full px-6 py-2.5
              text-sm font-semibold text-white
              bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]
              shadow-lg shadow-[#ff4d4d]/40
            "
          >
            Let’s talk →
          </a>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div
          className="
      fixed inset-0 z-50 bg-black/80 backdrop-blur-xl
      flex flex-col items-center justify-center gap-8
    "
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-3xl text-white"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {["About", "Skills", "Projects", "Experience"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-2xl font-semibold text-white hover:text-white/80 transition"
            >
              {item}
            </a>
          ))}

          {/* CTA INSIDE MENU */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="
        mt-6 rounded-full px-10 py-4
        text-lg font-semibold text-white
        bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]
        shadow-lg shadow-[#ff4d4d]/40
      "
          >
            Let’s talk →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
