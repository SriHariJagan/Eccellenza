import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import styles from "./projects.module.css";
import { projects } from "../../data";
import { formatTitle } from "../../Utils/formatTitle";

const Projects = () => {
  const mainCategories = useMemo(() => Object.keys(projects), []);
  const [selectedMain, setSelectedMain] = useState(mainCategories[0] || "");
  const [selectedImages, setSelectedImages] = useState(null);

  const subcategories = useMemo(
    () => projects[selectedMain] || {},
    [selectedMain]
  );

  const handleCategorySelect = useCallback((cat) => {
    setSelectedMain(cat);
    setSelectedImages(null);
  }, []);

  const handleOpenGallery = useCallback((images) => {
    // Force re-mount by giving a new unique key every time
    setSelectedImages({
      id: Date.now(), // 👈 ensures unique each click
      images,
    });
  }, []);

  const handleCloseGallery = useCallback(() => {
    setSelectedImages(null);
  }, []);

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>Our Projects</h2>

      {/* Main Category Buttons */}
      <div className={styles.categoryButtons}>
        {mainCategories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${styles.categoryButton} ${
              selectedMain === cat ? styles.active : ""
            }`}
            onClick={() => handleCategorySelect(cat)}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Subcategory Grid */}
      <motion.div layout className={styles.subcategoryGrid}>
        <AnimatePresence mode="popLayout">
          {Object.entries(subcategories).map(([sub, images]) => {
            const previewImage = images?.[0];
            if (!previewImage) return null;

            return (
              <motion.div
                key={sub}
                layout
                className={styles.subcategoryCard}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpenGallery(images)}
              >
                <div className={styles.imageContainer}>
                  <motion.img
                    src={previewImage}
                    alt={sub}
                    className={styles.image}
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  />
                </div>

                <div className={styles.imageInfo}>
                  <p className={styles.subTitle}>{formatTitle(sub)}</p>
                  <span className={styles.mainCategory}>{selectedMain}</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* LightGallery Viewer */}
      {selectedImages && (
        <LightGallery
          key={selectedImages.id} // 👈 this forces remounting
          dynamic
          licenseKey="a"
          dynamicEl={selectedImages.images.map((src) => ({
            src,
            thumb: src,
          }))}
          plugins={[lgZoom, lgThumbnail]}
          closable
          onCloseAfter={() => setSelectedImages(null)}
          onInit={(ref) => ref.instance.openGallery()}
        />
      )}
    </section>
  );
};

export default Projects;
