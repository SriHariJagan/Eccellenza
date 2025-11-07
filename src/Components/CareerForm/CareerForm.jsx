import React, { useState } from "react";
import styles from "./careerForm.module.css";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    position: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your application has been submitted successfully!");
  };

  return (
    <section className={styles.careerSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Apply for Your Dream Role</h2>
        <p className={styles.subtitle}>
          Fill out the form below to join our team at Eccellenza Infra.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>


          <div className={styles.formGroup}>
            <label htmlFor="position">Post to Apply</label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            >
              <option value="">Select a position</option>
              <option value="Interior Designer">Interior Designer</option>
              <option value="Civil Engineer">Civil Engineer</option>
              <option value="Electrical Engineer">Electrical Engineer</option>
              <option value="Project Manager">Project Manager</option>
              <option value="Supervisor">Supervisor</option>
            </select>
          </div>

          

          <div className={styles.formGroup}>
            <label htmlFor="cv">Upload CV</label>
            <input
              type="file"
              id="cv"
              name="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address">Current Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter your address"
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default CareerForm;
