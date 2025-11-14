import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Blogs.module.css";
import { blogData } from "../../data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Blogs = () => {
  return (
    <section className={styles.blogSection}>
      <motion.div
        className={styles.header}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1>Insights & Inspiration</h1>
        <p>
          Stay updated with our latest thoughts on design, construction, and
          innovation.
        </p>
      </motion.div>

      <div className={styles.blogGrid}>
        {blogData.map((blog, i) => (
          <motion.div
            key={blog.id}
            className={styles.blogCard}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className={styles.imageWrapper}>
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className={styles.blogContent}>
              <span className={styles.category}>{blog.category}</span>
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <div className={styles.footer}>
                <span>{blog.date}</span>
                <Link to={`/blogs/${blog.id}`} className={styles.readMore}>
                  Read More →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
