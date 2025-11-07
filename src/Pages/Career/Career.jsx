import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Users, Star } from "lucide-react";
import styles from "./Career.module.css";
import CareerForm from "../../Components/CareerForm/CareerForm";

// ===================== DATA =====================
const whyJoinData = [
  {
    icon: <Lightbulb size={32} />,
    title: "Innovate & Create",
    text: "Push the boundaries of design and create groundbreaking solutions.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Grow Your Expertise",
    text: "Continuous learning and professional development with industry leaders.",
  },
  {
    icon: <Users size={32} />,
    title: "Collaborative Spirit",
    text: "Work alongside talented individuals in a supportive and inspiring environment.",
  },
  {
    icon: <Star size={32} />,
    title: "Make an Impact",
    text: "Contribute to projects that shape the future of architectural design.",
  },
];

const lifeData = [
  { img: "/Images/services/audits.avif", title: "Collaborative Design Sessions" },
  { img: "/Images/services/audits.avif", title: "Our Inspiring Workspaces" },
  { img: "/Images/services/audits.avif", title: "Brainstorming New Concepts" },
  { img: "/Images/services/audits.avif", title: "Precision in Every Detail" },
  { img: "/Images/services/audits.avif", title: "Teamwork Makes the Dream Work" },
  { img: "/Images/services/audits.avif", title: "Driving Architectural Innovation" },
  { img: "/Images/services/audits.avif", title: "Moments of Recharge" },
  { img: "/Images/services/audits.avif", title: "Presenting Vision to Clients" },
];

// ===================== COMPONENT =====================
const Career = () => {
  return (
    <main className={styles.careerPage}>
      {/* ===== HERO ===== */}
      <section className={styles.heroSection}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Build Inspiring Spaces. <br />
            <span>Build Your Career at Eccellenzia.</span>
          </h1>
        </motion.div>
      </section>

      {/* ===== WHY JOIN US ===== */}
      <section className={styles.whyJoinUs}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Join Us
        </motion.h2>

        <div className={styles.cardGrid}>
          {whyJoinData.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FORM SECTION ===== */}
      <section className={styles.formSection}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Join Our Team
        </motion.h2>
        <p className={styles.formText}>
          Fill out the form below to explore career opportunities with Eccellenzia.
        </p>
        <CareerForm />
      </section>

      {/* ===== LIFE AT ECCELLENZIA ===== */}
      <section className={styles.lifeSection}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Life at Eccellenzia
        </motion.h2>

        <div className={styles.lifeGrid}>
          {lifeData.map((item, index) => (
            <motion.div
              key={index}
              className={styles.lifeCard}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Career;
