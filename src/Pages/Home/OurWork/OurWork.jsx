import React from "react";
import { motion } from "framer-motion";
import styles from "./ourWork.module.css";

const processSteps = [
  {
    step: "01",
    title: "Alignment",
    desc: "We start by aligning your goals and expectations, ensuring our vision and strategy are perfectly in sync.",
  },
  {
    step: "02",
    title: "Execution",
    desc: "Our team transforms strategy into action through precise execution and dedicated project management.",
  },
  {
    step: "03",
    title: "Evaluation",
    desc: "We measure results and evaluate progress, making sure each milestone delivers real, measurable impact.",
  },
  {
    step: "04",
    title: "Situation Analysis",
    desc: "A thorough understanding of your current environment helps us tailor our approach to real-world challenges.",
  },
  {
    step: "05",
    title: "Direction",
    desc: "We refine the process, set the direction for future success, and ensure continuous growth and improvement.",
  },
];

const OurWork = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>
        We provide the best <br /> <span>Work Process Experience</span>
      </h2>

      <div className={styles.content}>
        <div className={styles.timeline}>
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.stepCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className={styles.stepNumber}>{step.step}</div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.imageSection}>
          <img
            src="/Images/ourWork.jpg"
            alt="Work Process"
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default OurWork;
