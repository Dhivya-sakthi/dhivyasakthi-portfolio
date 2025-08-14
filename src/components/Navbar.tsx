import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a
              href="#home"
              className="font-mono text-xl font-bold text-white"
            >
              Dhivya <span className="text-blue-500">Sakthi</span>
            </a>

            {/* Hamburger for mobile */}
            <div
              className="w-7 h-5 relative cursor-pointer z-50 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? "✕" : "☰"}
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white text-xl md:hidden">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </>
  );
};
