import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./portfolio.module.css";
import { projectsData } from "../../data";

const categories = ["Offices", "Residentials", "Restaurant", "Retail"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Offices");
  const normalizedCategory = selectedCategory.toLowerCase();

  // Filter images based on selected category
  const filteredProjects = useMemo(() => {
    if (normalizedCategory === "Offices") return projectsData;
    return projectsData.filter(
      (proj) =>
        proj.category &&
        proj.category.toLowerCase().trim() === normalizedCategory
    );
  }, [normalizedCategory]);

  return (
    <div className={styles.galleryWrapper}>
      <h2 className={styles.heading}>Our Projects</h2>

      {/* Category Filter Buttons */}
      <div className={styles.categoryButtons}>
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${styles.categoryButton} ${
              selectedCategory === cat ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Gallery Grid with smooth slide transitions */}
      <motion.div layout className={styles.galleryGrid}>
        <AnimatePresence mode="wait">
          {filteredProjects.map((proj, index) => (
            <motion.div
              key={proj.src + index}
              layout
              className={styles.galleryCard}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.05,
              }}
            >
              <motion.div
                className={styles.imageWrapper}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={proj.src}
                  alt={proj.name || proj.category}
                  loading="lazy"
                  className={styles.galleryImage}
                />
              </motion.div>
              <div className={styles.imageInfo}>
                <p className={styles.imageTitle}>{proj.name}</p>
                <span className={styles.imageCategory}>{proj.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Portfolio;
