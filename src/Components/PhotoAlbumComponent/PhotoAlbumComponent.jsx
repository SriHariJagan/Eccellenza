import React, { useEffect, useMemo, useState } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { motion } from "framer-motion";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import styles from "./PhotoAlbumComponent.module.css";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};


const PhotoAlbumComponent = ({ photos = [] }) => {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "light"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute("data-theme");
      setTheme(newTheme);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  const formattedPhotos = useMemo(
    () =>
      photos
        .filter((p) => p.src)
        .map((p) => ({
          src: p.src,
          alt: p.alt || p.name || "Image",
          width: Number(p.width) || 1200,
          height: Number(p.height) || 800,
        })),
    [photos]
  );

  const handleGalleryOpen = () => {
    document.body.style.overflow = "hidden";
    const navbar = document.querySelector(".navbar");
    if (navbar) navbar.style.display = "none";
  };

  const handleGalleryClose = () => {
    document.body.style.overflow = "";
    const navbar = document.querySelector(".navbar");
    if (navbar) navbar.style.display = "";
  };

  return (
    <div
      className={`${styles.albumWrapper} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames={styles.galleryGrid}
        onAfterOpen={handleGalleryOpen}
        onBeforeClose={handleGalleryClose}
      >
        {formattedPhotos.map((photo, i) => (
          <motion.a
            key={i}
            href={photo.src}
            data-lg-size={`${photo.width}-${photo.height}`}
            className={styles.photoCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
          >
            <ImageWithLoader src={photo.src} alt={photo.alt} />
            <div className={styles.overlay}>
              <span>{photo.alt}</span>
            </div>
          </motion.a>
        ))}
      </LightGallery>
    </div>
  );
};

const ImageWithLoader = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.imageWrapper}>
      {!loaded && <div className={styles.skeletonLoader} />}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${styles.photoImg} ${loaded ? styles.loaded : ""}`}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={loaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
};

export default PhotoAlbumComponent;
