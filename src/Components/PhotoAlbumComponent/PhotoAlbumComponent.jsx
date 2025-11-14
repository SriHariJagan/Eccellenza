import React, { useEffect, useMemo, useState, useCallback } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import styles from "./PhotoAlbumComponent.module.css";

const PhotoAlbumComponent = ({ photos = [] }) => {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "light"
  );

  useEffect(() => {
    const obs = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute("data-theme");
      if (newTheme !== theme) setTheme(newTheme);
    });

    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => obs.disconnect();
  }, [theme]);

  // Format once → best performance
  const formattedPhotos = useMemo(
    () =>
      photos.map((p) => ({
        src: p.src,
        alt: p.alt || p.name || "Image",
        width: +p.width || 1200,
        height: +p.height || 800,
      })),
    [photos]
  );

  const handleOpen = useCallback(() => {
    document.body.style.overflow = "hidden";
    const nav = document.querySelector(".navbar");
    if (nav) nav.style.visibility = "hidden";
  }, []);

  const handleClose = useCallback(() => {
    document.body.style.overflow = "";
    const nav = document.querySelector(".navbar");
    if (nav) nav.style.visibility = "visible";
  }, []);

  return (
    <div
      className={`${styles.albumWrapper} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <LightGallery
        speed={450}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames={styles.galleryGrid}
        onAfterOpen={handleOpen}
        onBeforeClose={handleClose}
      >
        {formattedPhotos.map((photo, i) => {
          const { ref, inView } = useInView({
            triggerOnce: true, // Animate only first time
            threshold: 0.15,
          });

          return (
            <motion.a
              key={i}
              ref={ref}
              href={photo.src}
              data-lg-size={`${photo.width}-${photo.height}`}
              className={styles.photoCard}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <LazyImage src={photo.src} alt={photo.alt} />
              <div className={styles.overlay}>
                <span>{photo.alt}</span>
              </div>
            </motion.a>
          );
        })}
      </LightGallery>
    </div>
  );
};

const LazyImage = React.memo(({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.imageWrapper}>
      {!loaded && <div className={styles.skeleton} />}

      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`${styles.photoImg} ${loaded ? styles.loaded : ""}`}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={loaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.45 }}
      />
    </div>
  );
});

export default PhotoAlbumComponent;
