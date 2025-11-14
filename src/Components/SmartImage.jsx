import React from "react";

/**
 * SmartImage Component
 * Automatically sets width/height, lazy-loads, and prevents layout shifts
 */
const SmartImage = ({ src, alt, width, height, className = "", ...props }) => {
  // If width & height are not given, use aspect-ratio fallback (16/9)
  const style = {
    aspectRatio: width && height ? `${width}/${height}` : "16/9",
    width: "100%",
    height: "auto",
    display: "block",
    backgroundColor: "var(--bg-section)", // ✅ uses theme variable
    borderRadius: "12px",
    objectFit: "cover",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  };

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
      className={className}
      style={style}
      {...props}
    />
  );
};

export default SmartImage;
