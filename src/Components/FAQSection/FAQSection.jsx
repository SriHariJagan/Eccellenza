import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./faq.module.css";

export default function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className={styles.faqWrapper}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>

      <div className={styles.faqList}>
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`${styles.faqCard} ${openIndex === i ? styles.openCard : ""}`}
            onClick={() => toggle(i)} // click anywhere on the card
          >
            <div className={styles.faqQuestion}>
              <span className={styles.questionText}>{item.q}</span>
              <ChevronDown
                className={`${styles.icon} ${openIndex === i ? styles.open : ""}`}
                size={20}
              />
            </div>

            <div
              className={`${styles.faqAnswer} ${
                openIndex === i ? styles.show : ""
              }`}
            >
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
