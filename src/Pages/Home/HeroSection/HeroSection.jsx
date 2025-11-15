import React, { useState, useEffect } from "react";
import styles from "./heroSection.module.css";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Instagram, Facebook } from "lucide-react";


const imageList = [
  "/Images/gallery/office/1.avif",
  "/Images/gallery/office/2.avif",
  "/Images/gallery/office/3.avif",
  "/Images/gallery/office/4.avif",
  "/Images/gallery/office/5.avif",
  "/Images/gallery/office/7.avif",
  "/Images/gallery/office/8.avif",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* ===== Left Text Section ===== */}
        <div className={styles.textContent}>
          <h1 className={styles.heading}>
            Find beauty in <span>simplicity</span>
          </h1>
          <p className={styles.description}>
            Discover timeless elegance through our thoughtfully designed spaces
            that blend modern aesthetics with functional comfort.
          </p>
          <Link to="/gallery" className={styles.exploreBtn}>
            Explore Now
          </Link>

          <div className={styles.socials}>
            <div className={styles.icons}>
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
        </div>

        {/* ===== Right Image Section ===== */}
        <div className={styles.imageContent}>
          <div className={styles.mainImage}>
            <div
              className={styles.sliderTrack}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {imageList.map((img, index) => (
                <div className={styles.slide} key={index}>
                  <img src={img} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>

            {/* Thumbnails */}
            <div className={styles.thumbnailContainer}>
              {imageList.map((img, index) => (
                <div
                  key={index}
                  className={`${styles.thumb} ${
                    index === currentIndex ? styles.activeThumb : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
