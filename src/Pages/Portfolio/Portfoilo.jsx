import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import styles from "./portfolio.module.css";
import { projects } from "../../data";
import { formatTitle } from "../../Utils/formatTitle";
import LightGalleryWrapper from "../../Components/LightGalleryWrapper";

const Portfolio = () => {
  const mainCategories = Object.keys(projects);

  const [selectedMain, setSelectedMain] = useState(mainCategories[0]);
  const [selectedSub, setSelectedSub] = useState("");

  const subCategories = useMemo(
    () => Object.keys(projects[selectedMain] || {}),
    [selectedMain]
  );

  useEffect(() => {
    setSelectedSub(subCategories[0] || "");
  }, [selectedMain]);

  const galleryImages = useMemo(() => {
    if (!selectedSub) return [];
    return projects[selectedMain][selectedSub] || [];
  }, [selectedMain, selectedSub]);

  return (
    <div className={styles.galleryWrapper}>
      {/* ================= Banner ================= */}
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>Our Portfolio</h1>
        <p className={styles.bannerSubtitle}>
          Explore our commercial and residential interior projects.
        </p>
      </div>

      {/* ================= Main Categories ================= */}
      <div className={styles.categoryButtons}>
        {mainCategories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={`${styles.categoryButton} ${
              selectedMain === cat ? styles.active : ""
            }`}
            onClick={() => setSelectedMain(cat)}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* ================= Sub Categories ================= */}
      <div className={styles.subCategoryButtons}>
        {subCategories.map((sub) => (
          <motion.button
            key={sub}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={`${styles.subCategoryButton} ${
              selectedSub === sub ? styles.subActive : ""
            }`}
            onClick={() => setSelectedSub(sub)}
          >
            {formatTitle(sub)}
          </motion.button>
        ))}
      </div>

      {/* ================= Images with LightGallery ================= */}
      <div className={styles.galleryGrid}>
        <LightGalleryWrapper className={styles.lightWrapper}>
          {galleryImages.map((src, index) => (
            <a key={index} href={src} className={styles.galleryCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={src}
                  alt={`project-${index}`}
                  className={styles.galleryImage}
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </LightGalleryWrapper>
      </div>
    </div>
  );
};

export default Portfolio;
