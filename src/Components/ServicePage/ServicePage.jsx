import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../../data";
import FAQSection from "../../components/FAQSection/FAQSection";
import styles from "./servicePage.module.css";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// --- Utility: Convert multiline text to JSX blocks (p + ul/li)
function renderTextBlock(text) {
  if (!text) return null;

  const blocks = text
    .replace(/\r/g, "")
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter((block) => block.length > 0);

  return blocks.map((block, index) => {
    if (block.startsWith("•")) {
      const items = block
        .split("\n")
        .map((l) => l.replace("•", "").trim())
        .filter((l) => l.length > 0);

      return (
        <ul key={index} className={styles.listUL}>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }

    return (
      <p key={index} className={styles.paragraph}>
        {block}
      </p>
    );
  });
}

export default function ServicePage() {
  const { slug } = useParams();
  const service = services[slug];

  const sectionIds = [
    "overview",
    "sections",
    "table",
    "services",
    "process",
    "industries",
    "geo",
    "faq",
  ];

  const [activeSection, setActiveSection] = React.useState("overview");

  // Scroll spy effect
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (!service)
    return (
      <div className={styles.notFound}>
        <h2>Service Not Found</h2>
        <p>The service you're looking for doesn't exist.</p>
      </div>
    );

  return (
    <section className={styles.serviceSection}>
      <div className={styles.container}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.stickyBox}>
            <h3 className={styles.sideHeading}>On This Page</h3>
            <ul className={styles.sideLinks}>
              {sectionIds.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={activeSection === id ? styles.activeLink : ""}
                    onClick={() => setActiveSection(id)}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Hero */}
          <motion.div
            className={styles.hero}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <h1>{service.title}</h1>
            <img src={service.image} alt={service.title} />
            <p className={styles.desc}>{service.description}</p>
          </motion.div>

          {/* Overview */}
          <motion.div
            id="overview"
            className={`${styles.glassBox} ${styles.overviewBox}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <h2>Overview</h2>
            {renderTextBlock(service.intro)}
          </motion.div>

          {/* Dynamic Sections */}
          <div id="sections" className={styles.sections}>
            {service.sections.map((sec, idx) => (
              <motion.div
                key={idx}
                className={styles.glassBox}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
              >
                <h2>{sec.heading}</h2>
                {renderTextBlock(sec.text)}
              </motion.div>
            ))}
          </div>

          {/* Table */}
          <motion.div
            id="table"
            className={styles.tableBox}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <h2>Our Design Principles</h2>
            <div className={styles.tableWrapper}>
              <table>
                <thead>
                  <tr>
                    {service.table.headers.map((h, idx) => (
                      <th key={idx}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {service.table.rows.map((row, rIndex) => (
                    <tr key={rIndex}>
                      {row.map((col, cIndex) => (
                        <td key={cIndex}>{col}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Services Offered */}
          <motion.div
            id="services"
            className={styles.glassBox}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <h2>Services We Provide</h2>
            <ul className={styles.list}>
              {service.servicesOffered.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Process */}
          <motion.div
            id="process"
            className={styles.glassBox}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <h2>What Sets Our Process Apart</h2>
            <ul className={styles.list}>
              {service.process.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </motion.div>

          {/* Industries */}
          <div id="industries" className={styles.sections}>
            {service.industries.map((ind, idx) => (
              <motion.div
                key={idx}
                className={styles.glassBox}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
              >
                <h2>{ind.sector}</h2>
                {renderTextBlock(ind.text)}
              </motion.div>
            ))}
          </div>

          {/* Geography */}
          <motion.div
            id="geo"
            className={styles.glassBox}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <h2>Where We Work</h2>
            {renderTextBlock(service.geography)}
          </motion.div>

          {/* CTA */}
          <motion.div
            className={styles.ctaBox}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <p className={styles.ctaText}>
              {service.cta.split(/(?<=\?)/).map((line, i) => (
                <span key={i}>
                  {line.trim()}
                  <br />
                </span>
              ))}
            </p>

            <a href="/contact" className={styles.ctaButton}>
              Contact Us
            </a>
          </motion.div>

          {/* FAQ */}
          <motion.div
            id="faq"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <FAQSection faqs={service.faq} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
