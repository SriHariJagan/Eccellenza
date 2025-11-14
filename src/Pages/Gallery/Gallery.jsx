import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "../../data";
import styles from "./gallery.module.css";
import PhotoAlbumComponent from "../../Components/PhotoAlbumComponent/PhotoAlbumComponent";

const allCategories = ["All", ...new Set(galleryImages.map(img => img.category))];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") return galleryImages;
    const selected = selectedCategory.toLowerCase().trim();
    return galleryImages.filter(
      img => img.category?.toLowerCase().trim() === selected
    );
  }, [selectedCategory]);

  const handleCategoryClick = useCallback((cat) => {
    setSelectedCategory(cat);
  }, []);

  return (
    <div className={styles.galleryWrapper}>
      <h2 className={styles.heading}>Our Gallery</h2>

      <div className={styles.categoryButtons}>
        {allCategories.map(cat => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`${styles.categoryButton} ${
              selectedCategory === cat ? styles.active : ""
            }`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className={styles.albumSection}
        >
          <PhotoAlbumComponent photos={filteredImages} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
