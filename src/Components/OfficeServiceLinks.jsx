// src/Components/ServiceLinksInline.jsx
import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data";

export default function ServiceLinksInline() {
  const serviceArray = Object.values(services);

  return (
    <div className="service-links-wrapper">
      <style>{`
        .service-links-wrapper {
          padding: 1rem 4rem;
          text-align: left;
        }

        .service-links-wrapper h3 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .service-links {
          line-height: 1.6;
          color: var(--text-muted);
          width: 100%;
          white-space: normal; /* allow natural wrapping */
        }

        .service-link {
          text-decoration: none;
          color: var(--link-color);
          transition: color 0.25s ease;
          font-size: 0.9rem; /* fixed */
          font-weight: 500;
          display: inline; /* treat as inline text */
          word-wrap: break-word;
        }

        /* Add dot separator except first link */
        .service-link:not(:first-child)::before {
          content: "•";
          margin: 0 0.5rem;
          color: var(--text-muted);
          font-size: 0.6rem;
        }

        .service-link:hover {
          color: var(--link-hover);
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .service-links-wrapper {
            padding: 1rem 1rem;
          }
          .service-link {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 500px) {
          .service-links-wrapper {
            padding: 1rem 0rem;
          }
          .service-link {
            font-size: 0.6rem;
            display: inline; /* inline for wrapping */
            text-align: left; /* left align for readability */
          }
        }
      `}</style>

      <h3>Locations</h3>
      <div className="service-links">
        {serviceArray.map((service) => (
          <Link
            key={service.slug}
            to={service.link}
            className="service-link"
            title={service.title} // show full title on hover
          >
            {service.title.split("—")[1]?.trim() || service.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
