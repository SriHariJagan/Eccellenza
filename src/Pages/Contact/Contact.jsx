import React from "react";
import styles from "./contact.module.css";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contactCard}>
        {/* Left Section - Form */}
        <div className={styles.formSection}>
          <h2>Get In Touch</h2>
          <p>We are here for you! How can we help?</p>
          <form className={styles.form}>
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email address" />
            <textarea
              placeholder="Go ahead, we are listening..."
              rows="10"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className={styles.infoSection}>
          {/* Illustration */}
          <div className={styles.illustration}>
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-customer-support-illustration_23-2148908913.jpg"
              alt="Contact Illustration"
            />
          </div>

          {/* Contact Info Items */}
          <div className={styles.infoItems}>
            <div className={styles.infoItem}>
              <MapPin className={styles.icon} />
              <p>
                <strong>Gurugram:</strong> Unit-405, Fourth Floor, Iris Tech
                Park, Sector 48, Sohna Road, Gurgaon, Haryana-122018
              </p>
            </div>

            <div className={styles.infoItem}>
              <MapPin className={styles.icon} />
              <p>
                <strong>Kolkata:</strong> Poddar Court, 3rd Floor, Gate No. 3,
                Unit No. S, 18, Rabindra Sarani, Kolkata - 700001
              </p>
            </div>

            <div className={styles.infoItem}>
              <Phone className={styles.icon} />
              <p>+91 9999841336, +91 9717741336</p>
            </div>

            <div className={styles.infoItem}>
              <Mail className={styles.icon} />
              <p>info@eccellenzainfra.com</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className={styles.socialBar}>
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
      </div>

      {/* Map Section */}
      {/* Map Section - Full Width */}
      <div className={styles.fullMapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3506.8206833327126!2d77.03600100000003!3d28.41740699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI1JzA2LjIiTiA3N8KwMDInMTYuNSJF!5e0!3m2!1sen!2sin!4v1761372792024!5m2!1sen!2sin"
          title="Eccellenza Infra Map"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
