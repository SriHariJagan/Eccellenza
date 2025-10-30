import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Quote } from "lucide-react";
import styles from "./visionMission.module.css";

const clientLogos = [
  "/Images/client1.png",
  "/Images/client2.png",
  "/Images/client3.png",
  "/Images/client4.png",
  "/Images/client5.png",
  "/Images/client6.png",
  "/Images/client7.png",
  "/Images/client8.png",
];

const VisionMission = () => {
  const controls = useAnimation();

  return (
    <>
      {/* ===== Vision & Mission Section ===== */}
      <section className={styles.wrapper}>
        <div className={styles.overlay}></div>
        <h2 className={styles.heading}>
          Our <span>Vision & Mission</span>
        </h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.iconBox}>
              <Quote size={24} />
            </div>
            <div className={styles.textBox}>
              <h3>Vision</h3>
              <p>“To be the most preferred design & build-out partner in India.”</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.iconBox}>
              <Quote size={24} />
            </div>
            <div className={styles.textBox}>
              <h3>Mission</h3>
              <p>
                Deliver customized design & interior solutions to attain customer
                delight through innovation and best industrial practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Clients Section ===== */}
      
    </>
  );
};

export default VisionMission;
