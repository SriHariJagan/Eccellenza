import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./services.module.css";

const Services = () => {
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

  const services = [
    {
      title: "Project Management Consultancy",
      desc: "Providing strategic leadership and expert coordination across all project phases — from initiation to completion. We ensure strict adherence to timelines, budgets, and quality benchmarks through proactive planning, risk assessment, and seamless stakeholder communication.",
      img: "/Images/services/projectManagement.avif",
    },
    {
      title: "Design Consultancy",
      desc: "Combining innovation with functionality, our design consultancy transforms your vision into impactful spaces and structures. We focus on aesthetics, efficiency, and sustainability, delivering tailored solutions that reflect your goals and brand identity.",
      img: "/Images/services/designConsultancy.avif",
    },
    {
      title: "Design & Build",
      desc: "Offering an integrated approach to design and construction, we manage every aspect from concept to completion. Our design & build services ensure seamless collaboration, faster delivery, cost efficiency, and uncompromised quality — all under one roof.",
      img: "/Images/services/builtDesign.avif",
    },
    {
      title: "Turnkey Projects",
      desc: "Delivering fully managed, end-to-end project solutions where every detail is meticulously handled — from planning and design to execution and final handover. Our turnkey service lets you focus on your vision while we handle the rest, ensuring a hassle-free experience.",
      img: "/Images/services/turnkeyProject.avif",
    },
    {
      title: "Construction Work",
      desc: "Executing construction projects with precision, safety, and craftsmanship. From residential to commercial builds, we use advanced methodologies and high-quality materials to deliver durable structures that meet the highest industry standards.",
      img: "/Images/services/constructionwork.avif",
    },
    {
      title: "Audits & Budget Analysis",
      desc: "Offering transparent, data-driven financial audits and cost assessments to optimize project resources. Our team provides detailed budgeting insights, risk evaluations, and value engineering strategies that drive cost efficiency without compromising quality.",
      img: "/Images/services/audits.avif",
    },
    {
      title: "Infrastructure Analysis",
      desc: "Providing in-depth evaluation of existing and planned infrastructure to ensure reliability, performance, and sustainability. We combine engineering expertise with cutting-edge analytics to deliver actionable insights for long-term infrastructure resilience.",
      img: "/Images/services/infrastructure.avif",
    },
  ];

  return (
    <section
      className={`${styles.servicesWrapper} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our Services
      </motion.h2>

      <div className={styles.layoutContainer}>
        {/* Left - Image */}
        <motion.div
          className={styles.heroImageWrapper}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/Images/services/servicesOverview.avif"
            alt="Architecture overview"
            className={styles.heroImage}
          />
        </motion.div>

        {/* Right - Scrollable Cards */}
        <motion.div
          className={styles.scrollSection}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.servicesList}>
            {services.map((service, i) => (
              <motion.div
                className={styles.serviceCard}
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <div className={styles.serviceImgWrapper}>
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className={styles.serviceImg}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className={styles.serviceInfo}>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
