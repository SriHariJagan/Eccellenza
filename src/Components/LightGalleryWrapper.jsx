import React from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

// Prevent re-renders → LightGallery becomes instant
const LightGalleryWrapper = React.memo(({ children, className }) => {
  return (
    <LightGallery
      speed={450}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames={className}
    >
      {children}
    </LightGallery>
  );
});

export default LightGalleryWrapper;
