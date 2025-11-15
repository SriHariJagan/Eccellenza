import React, { useState, useContext } from "react";
import styles from "./QuickContactForm.module.css";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { MailContext } from "../../Store/useContext";

const QuickContactForm = () => {
  const { sendQuickMail } = useContext(MailContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  // ----------------- VALIDATION -----------------
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone = "Phone must contain only numbers.";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone must be exactly 10 digits.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ----------------- HANDLE CHANGE -----------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only numbers allowed for phone
    if (name === "phone") {
      if (!/^[0-9]*$/.test(value)) return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for that field
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ----------------- SUBMIT -----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus({ loading: true, success: "", error: "" });

    const res = await sendQuickMail(formData);

    if (res.ok) {
      setStatus({
        loading: false,
        success: "Message sent successfully!",
        error: "",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus({
        loading: false,
        success: "",
        error: "Failed to send your message. Please try again!",
      });
    }

    // Auto-hide status after 5 sec
    setTimeout(() => {
      setStatus({ loading: false, success: "", error: "" });
    }, 5000);
  };

  return (
    <motion.div
      className={styles.quickContact}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className={styles.heading}>Quick Contact</h3>
      <p className={styles.subText}>Have a project in mind? Get in touch with our team today.</p>

      <form className={styles.form} onSubmit={handleSubmit}>

        {/* NAME FIELD */}
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className={styles.fieldError}>{errors.name}</p>}

        {/* EMAIL */}
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className={styles.fieldError}>{errors.email}</p>}

        {/* PHONE */}
        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          maxLength={10}
          onChange={handleChange}
          required
        />
        {errors.phone && <p className={styles.fieldError}>{errors.phone}</p>}

        {/* MESSAGE */}
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        {errors.message && <p className={styles.fieldError}>{errors.message}</p>}

        <motion.button
          type="submit"
          disabled={status.loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {status.loading ? "Sending..." : (
            <>
              <Send size={18} /> Send Message
            </>
          )}
        </motion.button>
      </form>

      {/* SUCCESS POPUP */}
      {status.success && (
        <motion.div
          className={styles.success}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ {status.success}
        </motion.div>
      )}

      {/* ERROR POPUP */}
      {status.error && (
        <motion.div
          className={styles.error}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ❌ {status.error}
        </motion.div>
      )}
    </motion.div>
  );
};

export default QuickContactForm;
