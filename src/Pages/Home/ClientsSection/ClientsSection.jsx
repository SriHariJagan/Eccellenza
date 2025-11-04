import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./clientsSection.module.css";

const clientLogos = [
  "/Images/clients/1.png",
  "/Images/clients/2.png",
  "/Images/clients/3.png",
  "/Images/clients/4.png",
  "/Images/clients/5.png",
  "/Images/clients/6.png",
  "/Images/clients/7.png",
  "/Images/clients/8.png",
  "/Images/clients/9.png",
  "/Images/clients/10.png",
  "/Images/clients/11.png",
  "/Images/clients/12.png",
  "/Images/clients/13.png",
  "/Images/clients/14.png",    
  "/Images/clients/15.png",    
  "/Images/clients/16.png",    
  "/Images/clients/17.png",    
  "/Images/clients/18.png",    
  "/Images/clients/19.png",    
];

const ClientsSection = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  // When hover starts — stop motion
  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.stop();
  };

  // When hover ends — resume motion
  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      },
    });
  };

  // Start animation initially
  React.useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section className={styles.clientsSection}>
      <h2 className={styles.heading}>
        Our <span>Clients</span>
      </h2>

      <div className={styles.container}>
        <motion.div className={styles.scrollContainer} animate={controls}>
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <motion.div
              className={styles.clientCard}
              key={index}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={logo} alt={`Client ${index + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
