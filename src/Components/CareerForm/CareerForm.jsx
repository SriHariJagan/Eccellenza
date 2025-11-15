import React, { useState, useContext } from "react";
import styles from "./careerForm.module.css";
import { MailContext } from "../../Store/useContext";

const CareerForm = () => {
  const { sendCareerFormMail } = useContext(MailContext);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    position: "",
    cv: null,
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    if (!formData.name.trim()) temp.name = "Full name is required.";
    if (!/^[6-9]\d{9}$/.test(formData.mobile))
      temp.mobile = "Enter a valid 10-digit mobile number.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      temp.email = "Enter a valid email address.";
    if (!formData.position) temp.position = "Please select a position.";
    if (!formData.cv) temp.cv = "Please upload your CV (PDF/DOC/DOCX).";
    if (!formData.address.trim()) temp.address = "Address is required.";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // mobile: allow only digits
    if (name === "mobile") {
      if (!/^[0-9]*$/.test(value)) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const clearAlertsAfter = (ms = 5000) => {
    setTimeout(() => {
      setStatus((prev) => ({ ...prev, success: "", error: "" }));
    }, ms);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus({ loading: true, success: "", error: "" });

    try {
      const res = await sendCareerFormMail(formData);

      // Accept either object { ok: true } or { ok: false, message: "..." }
      if (res && res.ok) {
        setStatus({
          loading: false,
          success: "Your application has been submitted successfully!",
          error: "",
        });

        // reset form
        setFormData({
          name: "",
          mobile: "",
          email: "",
          address: "",
          position: "",
          cv: null,
        });

        setErrors({});
        // reset native file input
        const fileInput = document.getElementById("cv");
        if (fileInput) fileInput.value = "";
      } else {
        const serverMsg = res?.message || "Failed to submit your application. Try again later.";
        setStatus({
          loading: false,
          success: "",
          error: serverMsg,
        });
      }
    } catch (err) {
      console.error("Submit Error:", err);
      setStatus({
        loading: false,
        success: "",
        error: "Network error. Please check your connection and try again.",
      });
    } finally {
      clearAlertsAfter(5000);
    }
  };

  return (
    <section className={styles.careerSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Apply for Your Dream Role</h2>
        <p className={styles.subtitle}>
          Fill out the form below to join our team at Eccellenza Infra.
        </p>

        {/* Success Message */}
        {status.success && <div className={styles.successBox}>{status.success}</div>}

        {/* Error Message */}
        {status.error && <div className={styles.errorBox}>{status.error}</div>}

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {/* Full Name */}
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              className={`${styles.input} ${errors.name ? styles.errorInput : ""}`}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
          </div>

          {/* Mobile */}
          <div className={styles.formGroup}>
            <label htmlFor="mobile">Mobile Number</label>
            <input
              className={`${styles.input} ${errors.mobile ? styles.errorInput : ""}`}
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              maxLength={10}
              placeholder="Enter your 10-digit phone number"
            />
            {errors.mobile && <span className={styles.errorMsg}>{errors.mobile}</span>}
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              className={`${styles.input} ${errors.email ? styles.errorInput : ""}`}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
          </div>

          {/* Position */}
          <div className={styles.formGroup}>
            <label htmlFor="position">Position to Apply</label>
            <select
              id="position"
              name="position"
              className={`${styles.input} ${errors.position ? styles.errorInput : ""}`}
              value={formData.position}
              onChange={handleChange}
            >
              <option value="">Select a position</option>
              <option value="Interior Designer">Interior Designer</option>
              <option value="Civil Engineer">Civil Engineer</option>
              <option value="Electrical Engineer">Electrical Engineer</option>
              <option value="Project Manager">Project Manager</option>
              <option value="Supervisor">Supervisor</option>
            </select>
            {errors.position && <span className={styles.errorMsg}>{errors.position}</span>}
          </div>

          {/* CV Upload */}
          <div className={styles.formGroup}>
            <label htmlFor="cv">Upload CV</label>
            <input
              className={`${styles.inputFile} ${errors.cv ? styles.errorInput : ""}`}
              type="file"
              id="cv"
              name="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
            />
            {errors.cv && <span className={styles.errorMsg}>{errors.cv}</span>}
          </div>

          {/* Address */}
          <div className={styles.formGroup}>
            <label htmlFor="address">Current Address</label>
            <textarea
              className={`${styles.textarea} ${errors.address ? styles.errorInput : ""}`}
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
            {errors.address && <span className={styles.errorMsg}>{errors.address}</span>}
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={status.loading}
            aria-busy={status.loading}
          >
            {status.loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CareerForm;
