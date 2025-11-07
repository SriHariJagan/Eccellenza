import React from "react";
import { motion } from "framer-motion";
import styles from "./homeServices.module.css";

const services = [
  { title: "Project Management Consultancy", img: "/Images/services/projectManagement.avif" },
  { title: "Design Consultancy", img: "/Images/services/designConsultancy.avif" },
  { title: "Design & Build", img: "/Images/services/builtDesign.avif" },
  { title: "Turnkey Projects", img: "/Images/services/turnkeyProject.avif" },
  { title: "Construction Work", img: "/Images/services/constructionwork.avif" },
  { title: "Audits & Budget Analysis", img: "/Images/services/audits.avif" },
  { title: "Infrastructure Analysis", img: "/Images/services/infrastructure.avif" },
];

const HomeServices = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.heading}>Our Services</h2>

      <div className={styles.container}>
        <motion.div
          className={styles.scrollContainer}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...services, ...services].map((service, index) => (
            <div className={styles.serviceCard} key={index}>
              <div
                className={styles.cardBg}
                style={{ backgroundImage: `url(${service.img})` }}
              ></div>
              <div className={styles.cardOverlay}></div>

              <div className={styles.cardContent}>
                <motion.span
                  className={styles.cardNumber}
                  whileHover={{ y: -12 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  {String((index % services.length) + 1).padStart(2, "0")}
                </motion.span>

                <motion.h3
                  className={styles.title}
                  whileHover={{ y: 12 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  {service.title}
                </motion.h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
