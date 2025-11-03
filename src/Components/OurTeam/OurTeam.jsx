import React from "react";
import styles from "./ourTeam.module.css";

const TeamCard = ({ photo, name, role, desc }) => (
  <article className={styles.card}>
    <div className={styles.media}>
      <img src={photo} alt={name} className={styles.photo} />
    </div>
    <div className={styles.content}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
      <div className={styles.line}></div>
      <p className={styles.desc}>{desc}</p>
    </div>
  </article>
);

const OurTeam = () => {
  const team = [
    {
      photo: "/Images/team1.jpg",
      name: "Anil Kumar",
      role: "Project Director",
      desc: "Leads all design and build operations with 10+ years in commercial interiors.",
    },
    {
      photo: "/Images/team2.jpg",
      name: "Deepak Sharma",
      role: "Lead Architect",
      desc: "Specializes in functional workspace design that balances beauty and efficiency.",
    },
    {
      photo: "/Images/team3.jpg",
      name: "Priya R.",
      role: "Design Consultant",
      desc: "Focuses on bringing client visions to life with modern and sustainable designs.",
    },
  ];

  return (
    <section className={styles.ourTeam} id="team">
      <h2 className={styles.heading}>Our Team</h2>
      <div className={styles.grid}>
        {team.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
