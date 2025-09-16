import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react if not already

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md shadow-lg z-50 px-6 py-4 flex justify-between items-center"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold text-red-500">My-Portfolio</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.id}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active-link"
            className="relative cursor-pointer text-gray-300 hover:text-red-400 transition group"
          >
            {link.label}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-red-500 to-black rounded-full transition-all duration-300 group-[.active-link]:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-red-400 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-[72px] left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center space-y-6 py-6 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active-link"
                onClick={() => setIsOpen(false)} // close menu after click
                className="cursor-pointer text-gray-300 hover:text-red-400 transition text-lg"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
