import React, { useContext } from "react";
import styles from "./Footer.module.css";
import OfficeServiceLinks from "../../Components/OfficeServiceLinks";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Layers,
  ClipboardCheck,
  Box,
  HardHat,
  BarChart2,
  PenTool,
} from "lucide-react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Instagram, Facebook } from "lucide-react";
import { ThemeContext } from "../../Store/useContext";

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* About Section */}
        <div className={styles.column}>
          <a href="/" className={styles.logoLink}>
            <img
              key={theme} // triggers smooth transition on theme change
              src={
                theme === "light"
                  ? "/Images/logo1.png"
                  : "/Images/darkLogo.png"
              }
              alt="Eccellenza Infra Logo"
              className={styles.logoImage}
            />
          </a>
          <p>
            Eccellenza Infra Build Pvt. Ltd. is a young company with a dynamic
            team of professionals who have been associated with Fit-out & Interior
            Industry for over a decade.
          </p>

          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/company/eccellenza-infra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Eccellenza Infra on LinkedIn"
            >
              <FaLinkedinIn size={20} aria-hidden="true" />
            </a>

            <a
              href="https://x.com/eccellenzainfra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Eccellenza Infra on X (Twitter)"
            >
              <FaXTwitter size={20} aria-hidden="true" />
            </a>

            <a
              href="https://www.instagram.com/eccellenzainfra.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Eccellenza Infra on Instagram"
            >
              <Instagram size={20} aria-hidden="true" />
            </a>

            <a
              href="https://www.facebook.com/eccellenzainfra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Eccellenza Infra on Facebook"
            >
              <Facebook size={20} aria-hidden="true" />
            </a>
          </div>

          <div className={styles.offices}>
            <h3>Our Offices</h3>
            <p>
              <MapPin /> Gurugram (Head office)
            </p>
            <p>
              <MapPin /> Jaipur
            </p>
            <p>
              <MapPin /> Kolkata
            </p>
          </div>
        </div>

        {/* Our Services */}
        <div className={styles.column}>
          <h2>Our Services</h2>
          <ul>
            <li>
              <ClipboardCheck /> Project Management Consultancy
            </li>
            <li>
              <PenTool /> Design Consultancy
            </li>
            <li>
              <Layers /> Design & Built
            </li>
            <li>
              <Box /> TurnKey Projects
            </li>
            <li>
              <HardHat /> Construction Work
            </li>
            <li>
              <BarChart2 /> Audits & Budgets Analysis
            </li>
            <li>
              <MapPin /> Infrastructure Analysis
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className={styles.column}>
          <h2>Useful Links</h2>
          <ul className={styles.usefulLinks}>
            <li>
              <ChevronRight /> <a href="/">Home</a>
            </li>
            <li>
              <ChevronRight /> <a href="/about">About Us</a>
            </li>
            <li>
              <ChevronRight /> <a href="/services">Services</a>
            </li>
            <li>
              <ChevronRight /> <a href="/projects">Projects</a>
            </li>
            <li>
              <ChevronRight /> <a href="/gallery">Gallery</a>
            </li>
            <li>
              <ChevronRight /> <a href="/blogs">Blogs</a>
            </li>
            <li>
              <ChevronRight /> <a href="/career">Career</a>
            </li>
            <li>
              <ChevronRight /> <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.column}>
          <h2>Contact Us</h2>

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <MapPin />
            </div>
            <p>
              <strong>Gurugram:</strong>{" "}
              <a
                href="https://maps.google.com/?q=Iris Tech Park, Sector 48, Gurgaon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unit-405, Fourth Floor, Iris Tech Park, Sector 48, Sohna Road,
                Gurgaon, Haryana-122018
              </a>
            </p>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <MapPin />
            </div>
            <p>
              <strong>Kolkata:</strong>{" "}
              <a
                href="https://maps.google.com/?q=Poddar Court, Kolkata"
                target="_blank"
                rel="noopener noreferrer"
              >
                Poddar Court, 3rd Floor, Gate No. 3, Unit No. S18, Rabindra
                Sarani, Kolkata - 700001
              </a>
            </p>
          </div>

          {/* <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <Phone />
            </div>
            <p>
              <a href="tel:+919998841336">+91 9999841336</a>,{" "}
              <a href="tel:+919717741336">9717741336</a>
            </p>
          </div> */}

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <Mail />
            </div>
            <p>
              <a href="mailto:info@eccellenzainfra.com">
                info@eccellenzainfra.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        © {new Date().getFullYear()} Eccellenza Infra Build Pvt. Ltd. · All Rights Reserved
      </div>

            <OfficeServiceLinks />
    </footer>
  );
};

export default Footer;
