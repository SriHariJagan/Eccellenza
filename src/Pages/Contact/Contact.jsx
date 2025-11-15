import React, { useState, useContext } from "react";
import styles from "./contact.module.css";
import { Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MailContext } from "../../Store/useContext";

const Contact = () => {
  const { sendContactMail } = useContext(MailContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const updateField = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      // Only allow digits
      const onlyNums = value.replace(/\D/g, "");
      setForm((prev) => ({ ...prev, mobile: onlyNums }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validateMobile = (mobile) => /^\d{10,15}$/.test(mobile); // 10-15 digits

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ loading: false, success: "", error: "" });

    // Check all fields
    if (!form.name.trim() || !form.email.trim() || !form.mobile.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus({ loading: false, success: "", error: "All fields are required." });
      setTimeout(() => setStatus({ loading: false, success: "", error: "" }), 5000);
      return;
    }

    // Validate email
    if (!validateEmail(form.email)) {
      setStatus({ loading: false, success: "", error: "Enter a valid email address." });
      setTimeout(() => setStatus({ loading: false, success: "", error: "" }), 5000);
      return;
    }

    // Validate mobile
    if (!validateMobile(form.mobile)) {
      setStatus({ loading: false, success: "", error: "Enter a valid mobile number (10-15 digits only)." });
      setTimeout(() => setStatus({ loading: false, success: "", error: "" }), 5000);
      return;
    }

    try {
      setStatus({ loading: true, success: "", error: "" });

      const res = await sendContactMail(form);

      if (res?.ok) {
        setStatus({ loading: false, success: "Message sent successfully!", error: "" });
        setForm({ name: "", email: "", mobile: "", subject: "", message: "" });
      } else {
        setStatus({ loading: false, success: "", error: "Failed to send your message." });
      }
    } catch {
      setStatus({ loading: false, success: "", error: "Something went wrong. Try again later." });
    }

    setTimeout(() => setStatus({ loading: false, success: "", error: "" }), 5000);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.contactCard}>
        {/* FORM SECTION */}
        <div className={styles.formSection}>
          <h2>Get In Touch</h2>
          <p>We’re here to help. Send us your message and we’ll reply shortly.</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter your name" value={form.name} onChange={updateField} autoComplete="off" />
            <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={updateField} autoComplete="off" />
            <input type="tel" name="mobile" placeholder="Enter your mobile number" value={form.mobile} onChange={updateField} maxLength={15} />
            <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={updateField} />
            <textarea name="message" placeholder="Your message..." rows="3" value={form.message} onChange={updateField} />

            <button type="submit" disabled={status.loading} className={status.loading ? styles.disabledBtn : ""}>
              {status.loading ? "Sending..." : "Submit"}
            </button>

            {status.error && <p className={`${styles.alert} ${styles.error}`}>{status.error}</p>}
            {status.success && <p className={`${styles.alert} ${styles.success}`}>{status.success}</p>}
          </form>
        </div>

        {/* INFO SECTION */}
        <div className={styles.infoSection}>
          <div className={styles.illustration}>
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-customer-support-illustration_23-2148908913.jpg"
              alt="Customer Support Illustration"
              loading="lazy"
            />
          </div>

          <div className={styles.infoItems}>
            <div className={styles.infoItem}>
              <MapPin className={styles.icon} />
              <p>
                <strong>Gurugram:</strong> Unit-405, Fourth Floor, Iris Tech Park, Sector 48, Sohna Road, Gurgaon, Haryana-122018
              </p>
            </div>

            <div className={styles.infoItem}>
              <MapPin className={styles.icon} />
              <p>
                <strong>Kolkata:</strong> Poddar Court, 3rd Floor, Gate No. 3, Unit No. S, 18, Rabindra Sarani, Kolkata - 700001
              </p>
            </div>

            <div className={styles.infoItem}>
              <Mail className={styles.icon} />
              <p>info@eccellenzainfra.com</p>
            </div>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className={styles.socialBar}>
          <a href="https://www.linkedin.com/company/eccellenza-infra" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={20} /></a>
          <a href="https://x.com/eccellenzainfra" target="_blank" rel="noopener noreferrer"><FaXTwitter size={20} /></a>
          <a href="https://www.instagram.com/eccellenzainfra.in" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
          <a href="https://www.facebook.com/eccellenzainfra" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
        </div>
      </div>

      {/* MAP */}
      <div className={styles.fullMapSection}>
        <iframe
          title="Eccellenza Infra Location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3506.8206833327126!2d77.03600100000003!3d28.41740699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI1JzA2LjIiTiA3N8KwMDInMTYuNSJF!5e0!3m2!1sen!2sin!4v1761372792024!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
