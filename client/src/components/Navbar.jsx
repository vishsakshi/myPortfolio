import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = ["Home","About", "Skills", "Projects", "Experience"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
          fixed top-0 left-0 z-50 w-full
          bg-[#0b1220]/70 backdrop-blur-xl
          border-b border-white/10
        "
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-4">

          {/* MOBILE: HAMBURGER (LEFT) */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
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
                h-10 w-10 rounded-xl
                flex items-center justify-center
                bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]
                shadow-md
              "
            >
              <span className="text-sm font-bold text-white">SV</span>
            </div>
          </a>

          {/* DESKTOP LINKS + CTA */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group text-white/80 hover:text-white transition"
              >
                {item}
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
      </nav>

      {/* MOBILE SLIDE MENU */}
      {/* OVERLAY */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* SIDE DRAWER */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-[75%] max-w-xs
          bg-[#0b1220]
          border-r border-white/10
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="text-lg font-semibold text-white">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="text-2xl text-white"
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-6 px-6 py-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-white/90 hover:text-white transition"
            >
              {item}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="
              mt-4 inline-flex justify-center
              rounded-full px-6 py-3
              text-sm font-semibold text-white
              bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]
              shadow-lg shadow-[#ff4d4d]/40
            "
          >
            Let’s talk →
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
