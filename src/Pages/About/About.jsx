import React from "react";
import { Users, Building2, Briefcase, HardHat, Rocket } from "lucide-react"; // 👈 icons
import styles from "./about.module.css";
import OurTeam from "../../Components/OurTeam/OurTeam";
import VisionMission from "../Home/VisionMission/VisionMission";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* ===================== TEXT SECTION ===================== */}
        <div className={styles.textContent}>
          <h2 className={styles.title}>About Us</h2>
          <h3 className={styles.subtitle}>
            Eccellenza Infra Build <span>Private Limited</span>
          </h3>

          <p className={styles.description}>
            <strong>Eccellenza Infra Build Pvt. Ltd.</strong> is a young and
            dynamic company driven by a team of professionals who have been
            associated with the Fit-out & Interior industry for the last decade.
            <br />
            <br />
            <em>
              “An organization is as good as its team is… this is what
              Eccellenza Infra Build has focused on.”
            </em>
            <br />
            <br />
            We are a Commercial Fit-Out company delivering high-quality
            interiors and customized designs for every project. Our mission is
            to create beautiful, functional, and lasting spaces through seamless
            design, precise execution, and consistent quality control.
            <br />
            <br />
            Every element of delivery is supervised personally to ensure client
            satisfaction, adherence to timelines, and transparency in
            communication.
            <br />
            <br />
            We take pride in our responsibility to meet customer expectations on
            quality, budget, and schedule — ensuring that every project is
            delivered as committed and every client remains informed throughout
            the process.
          </p>
        </div>

        {/* ===================== IMAGE SECTION ===================== */}
        <div className={styles.imageContainer}>
          <img
            src="/Images/aboutUs.png"
            alt="Eccellenza Infra Build Team"
            className={styles.image}
          />
        </div>
      </div>

      {/* ===================== STATS SECTION ===================== */}
      <div className={styles.stats}>
        <div className={styles.statBox}>
          <div className={styles.statIcon}>
            <Building2 size={40} strokeWidth={1.6} />
          </div>
          <div className={styles.statText}>
            <h3 className={styles.statNumber}>1 Lakh +</h3>
            <p className={styles.statLabel}>Total Built-up Area</p>
          </div>
        </div>

        <div className={styles.statBox}>
          <div className={styles.statIcon}>
            <Briefcase size={40} strokeWidth={1.6} />
          </div>
          <div className={styles.statText}>
            <h3 className={styles.statNumber}>102 +</h3>
            <p className={styles.statLabel}>Projects Completed</p>
          </div>
        </div>

        <div className={styles.statBox}>
          <div className={styles.statIcon}>
            <HardHat size={40} strokeWidth={1.6} />
          </div>
          <div className={styles.statText}>
            <h3 className={styles.statNumber}>5 +</h3>
            <p className={styles.statLabel}>Years of Experience</p>
          </div>
        </div>

        <div className={styles.statBox}>
          <div className={styles.statIcon}>
            <Users size={40} strokeWidth={1.6} />
          </div>
          <div className={styles.statText}>
            <h3 className={styles.statNumber}>50 +</h3>
            <p className={styles.statLabel}>Dedicated Professionals</p>
          </div>
        </div>
      </div>

      <VisionMission />

      <OurTeam />
    </section>
  );
};

export default About;
