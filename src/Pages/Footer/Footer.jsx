import React from "react";
import styles from "./Footer.module.css";
import {
  Linkedin,
  Twitter,
  Instagram,
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

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* About Section */}
        <div className={styles.column}>
          <a href="/" className={styles.logoLink}>
            <img
              src="/Images/logo1.png"
              alt="Eccellenza Infra Build Pvt. Ltd."
            />
          </a>
          <p>
            Eccellenza Infra Build Pvt. Ltd. is a young company with a dynamic
            team of professionals who have been associated with Fit-out &
            Interior Industry for over a decade.
          </p>

          <div className={styles.social}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </div>

          <div className={styles.offices}>
            <h4>Our Offices</h4>
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
          <h3>Our Services</h3>
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
          <h3>Useful Links</h3>
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
              <ChevronRight /> <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        {/* Contact Section */}
        <div className={styles.column}>
          <h3>Contact Us</h3>

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

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <Phone />
            </div>
            <p>
              <a href="tel:+919998841336">+91 9999841336</a>,{" "}
              <a href="tel:+919717741336">9717741336</a>
            </p>
          </div>

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
        © {new Date().getFullYear()} Eccellenza Infra Build Pvt. Ltd. · All
        Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
