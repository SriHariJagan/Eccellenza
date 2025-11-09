import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "../../data";
import styles from "./gallery.module.css";
import PhotoAlbumComponent from "../../Components/PhotoAlbumComponent/PhotoAlbumComponent";

// Dynamically extract categories from data
const allCategories = [
  "All",
  ...Array.from(new Set(galleryImages.map((img) => img.category))).sort(),
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") return galleryImages;
    return galleryImages.filter(
      (img) =>
        img.category &&
        img.category.toLowerCase().trim() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  return (
    <div className={styles.galleryWrapper}>
      <h2 className={styles.heading}>Our Gallery</h2>

      {/* Category Buttons */}
      <div className={styles.categoryButtons}>
        {allCategories.map((cat) => (
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

      {/* Animated Album Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className={styles.albumSection}
        >
          <PhotoAlbumComponent photos={filteredImages} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
