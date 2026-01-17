import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-10 py-24 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute top-20 left-1/4 h-[500px] w-[500px]
        rounded-full bg-[rgb(var(--primary))/12] blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 h-[450px] w-[450px]
        rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex justify-center">
        {/* CONNECT BOX */}
        <div
          className="w-full max-w-4xl rounded-[2.8rem]
          bg-white/[0.04] border border-white/10
          px-8 sm:px-12 py-12"
        >
          {/* Header */}
          <div className="text-center">
            <span
              className="inline-flex items-center gap-2
              rounded-full bg-white/5 border border-white/10
              px-5 py-1.5 text-xs text-slate-300 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-700"></span>
              Open to work
            </span>

            <h2 className="text-4xl md:text-4xl font-extrabold text-white">
              Get in touch.
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-slate-300 leading-relaxed">
              I’m currently looking for new opportunities. Whether you have a
              question, a project idea, or just want to connect, feel free to
              reach out.
            </p>
          </div>

          {/* EMAIL CARD */}
          <div className="mt-10">
            <div
              className="rounded-3xl bg-white/5
              border border-white/10 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <FaEnvelope className="text-2xl text-[rgb(var(--primary))]" />
                <h3 className="text-lg font-semibold text-white">
                  Email me
                </h3>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-center
                sm:justify-between gap-4
                rounded-2xl bg-black/40
                px-6 py-4 border border-white/10"
              >
                <span className="text-sm text-slate-300 break-all">
                  sakshi.vishwakarma.23cse@bmu.edu.in
                </span>

                <a
                  href="mailto:sakshi.vishwakarma.23cse@bmu.edu.in"
                  className="inline-flex justify-center
                  rounded-xl px-6 py-2.5 text-sm font-semibold
                  bg-gradient-to-r from-[#ff7a18] via-[#ff4d4d] to-[#ff2e88]
                  text-black hover:opacity-90 transition"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="mt-8 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
              <a
                href="https://github.com/vishsakshi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3
                rounded-2xl bg-white/5 border border-white/10
                px-6 py-4 hover:bg-white/[0.08] transition"
              >
                <FaGithub className="text-xl text-[rgb(var(--primary))]" />
                <span className="font-medium text-white">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sakshi-vishwakarma-24ss/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3
                rounded-2xl bg-white/5 border border-white/10
                px-6 py-4 hover:bg-white/[0.08] transition"
              >
                <FaLinkedin className="text-xl text-[rgb(var(--primary))]" />
                <span className="font-medium text-white">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      {/* <div className="mt-12 flex justify-center">
        <p className="text-xs text-slate-400 text-center">
          © {new Date().getFullYear()} Sakshi Vishwakarma
        </p>
      </div> */}
    </section>
  );
};

export default Contact;
