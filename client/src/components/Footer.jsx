const Footer = () => {
  return (
    <footer className="relative py-8 px-6 overflow-hidden">
      <div
        className="relative z-10 w-full
  flex justify-center md:justify-end items-center px-6"
      >
        <p className="text-sm text-smlate-300 tracking-wide">
          © {new Date().getFullYear()} Sakshi Vishwakarma
          <span className="mx-2 text-smlate-500">·</span>
          Built with <span className="text-[rgb(var(--primary))]">React</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
