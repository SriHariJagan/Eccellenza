import React from "react";
import styles from "./ourTeam.module.css";
import SmartImage from "../SmartImage";

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
      photo: "/Images/OutTeam/Founder & CEO.avif",
      name: "Mr Anil Kumar Sharma",
      role: "Founder & CEO",
      desc: "Leads all design and build operations with 10+ years in commercial interiors.",
    },
    {
      photo: "/Images/OutTeam/Design Lead.avif",
      name: "Ms Megha Rawat",
      role: "Design Lead",
      desc: "Specializes in functional workspace design that balances beauty and efficiency.",
    },
    {
      photo: "/Images/OutTeam/Operations (East & South).avif",
      name: "Mr Bishwajeet Sharma",
      role: "Operations - South & East",
      desc: "Focuses on bringing client visions to life with modern and sustainable designs.",
    },
    {
      photo: "/Images/OutTeam/Operations (North & West).avif",
      name: "Mr Jagdish Sharma",
      role: "Operations- North & West",
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
