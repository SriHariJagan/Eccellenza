import React, { useState, useEffect } from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";
import styles from "./heroSection.module.css";
import { Link } from "react-router-dom";

const imageList = [
  "https://blog.buyerselect.com/wp-content/uploads/2024/05/organic-modern-interior-design.jpg",
  "https://vishwakarmainteriors.com/wp-content/uploads/2024/02/interior-room-design-with-armchair-potted-plants-1024x683.jpg",
  "https://homestolife.com/cdn/shop/articles/small-apartment-interior-design-ideas-that-scream-personality-homestolife.jpg",
  "https://www.favouritehomes.com/wp-content/uploads/2023/08/Minimalist_apartment_interior_design_Embracing_simplicity_1.jpg",
  "https://homestolife.com/cdn/shop/articles/small-apartment-interior-design-ideas-that-scream-personality-homestolife.jpg",
  "https://www.favouritehomes.com/wp-content/uploads/2023/08/Minimalist_apartment_interior_design_Embracing_simplicity_1.jpg",
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
                target="_blank"
                href="https://www.linkedin.com/company/eccellenza-infra"
              >
                <Facebook size={20} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/eccellenzainfra.in"
              >
                <Instagram size={20} />
              </a>
              <a target="_blank" href="https://x.com/eccellenzainfra">
                <Twitter size={20} />
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
