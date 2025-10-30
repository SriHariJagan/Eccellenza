import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Sun,
  Moon,
  Home,
  Info,
  Phone,
  Briefcase,
  Image,
  FolderKanban,
} from "lucide-react";
import styles from "./navbar.module.css";
import { ThemeContext } from "../../Store/useContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRefs = useRef([]);


  const navItems = [
    { path: "/", label: "Home", icon: <Home size={18} /> },
    { path: "/about", label: "About", icon: <Info size={18} /> },
    { path: "/services", label: "Services", icon: <Briefcase size={18} /> },
    { path: "/projects", label: "Projects", icon: <FolderKanban size={18} /> }, // 🏗️ New Projects Page
    { path: "/gallery", label: "Gallery", icon: <Image size={18} /> }, // 🖼️ New Gallery Page
    { path: "/contact", label: "Contact", icon: <Phone size={18} /> },
  ];

  useEffect(() => {
    const index = navItems.findIndex((item) => item.path === location.pathname);
    setActiveIndex(index !== -1 ? index : 0);
    setMenuOpen(false); // close mobile menu on route change
  }, [location.pathname]);

  return (
    <>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <img
              src="/Images/logo1.png"
              alt="Logo"
              className={styles.logoImage}
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className={styles.navLinks}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              ref={(el) => (navRefs.current[index] = el)}
              className={styles.navLink}
            >
              {item.icon} {item.label}
            </Link>
          ))}

          {/* Moving box indicator */}
          {navRefs.current[activeIndex] && (
            <span
              className={styles.navIndicator}
              style={{
                width: navRefs.current[activeIndex].offsetWidth,
                transform: `translateX(${navRefs.current[activeIndex].offsetLeft}px)`,
              }}
            ></span>
          )}
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.themeToggle} onClick={toggleTheme}>
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* ✅ Hamburger Button for Mobile */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.active : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* ✅ Mobile Slide Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <button
          className={styles.mobileCloseButton}
          onClick={() => setMenuOpen(false)}
        >
          <X size={26} />
        </button>
        <div className={styles.mobileMenuContent}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.icon} {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
