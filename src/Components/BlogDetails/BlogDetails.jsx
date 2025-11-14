import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./BlogDetails.module.css";
import { blogData } from "../../data";
import QuickContactForm from "../QuickContactForm/QuickContactForm";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);
  const [activeFaq, setActiveFaq] = useState(null);

  if (!blog) {
    return (
      <div className={styles.notFound}>
        <h2>Blog not found</h2>
        <Link to="/blogs" className={styles.backLink}>
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className={styles.blogDetailsSection}>
      <div className={styles.blogContainer}>
        {/* Left content */}
        <motion.div
          className={styles.leftContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={blog.image} alt={blog.title} className={styles.blogImage} />

          <h1 className={styles.title}>{blog.title}</h1>
          <div className={styles.meta}>
            <span className={styles.category}>{blog.category}</span>
            <span>•</span>
            <span>{blog.date}</span>
          </div>

          <div className={styles.content}>
            {blog.content?.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {blog.faqs && (
            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              {blog.faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`${styles.faqItem} ${
                    activeFaq === i ? styles.active : ""
                  }`}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(i)}
                  >
                    <span>{faq.q}</span>
                    <motion.span
                      animate={{ rotate: activeFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {activeFaq === i && (
                      <motion.div
                        className={styles.faqAnswer}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Right Sidebar */}
        <aside className={styles.sidebar}>
          <Link to="/blogs" className={styles.backLink}>
            ← Back to Blogs
          </Link>
          <QuickContactForm />
        </aside>
      </div>
    </section>
  );
};

export default BlogDetails;
