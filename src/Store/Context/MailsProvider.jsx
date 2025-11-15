import React from "react";
import { MailContext } from "../useContext";

const MailsProvider = ({ children }) => {

  const BASE_URL = "http://127.0.0.1:8000/mails";

  /* ----------------------------------------------------
     🌟 1. Quick Contact Mail Sender
  ---------------------------------------------------- */
  const sendQuickMail = async (data) => {
    try {
      const res = await fetch(`${BASE_URL}/quickmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return { ok: res.ok };
    } catch (error) {
      console.error("Quick Mail Error:", error);
      return { ok: false };
    }
  };

  /* ----------------------------------------------------
     🌟 2. Normal Contact Page Mail Sender
  ---------------------------------------------------- */
  const sendContactMail = async (data) => {
    try {
      const res = await fetch(`${BASE_URL}/sendmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return { ok: res.ok };
    } catch (error) {
      console.error("Mail Error:", error);
      return { ok: false };
    }
  };

  /* ----------------------------------------------------
     🌟 3. NEW — Career Form Mail Sender (with CV Upload)
     Sends: name, email, mobile, address, position, and file
  ---------------------------------------------------- */
  const sendCareerFormMail = async (formData) => {
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("mobile", formData.mobile);
      data.append("email", formData.email);
      data.append("address", formData.address);
      data.append("position", formData.position);
      data.append("cv", formData.cv); // Attach File

      const res = await fetch(`${BASE_URL}/careerform`, {
        method: "POST",
        body: data, // no headers for FormData
      });

      return { ok: res.ok };
    } catch (error) {
      console.error("Career Form Mail Error:", error);
      return { ok: false };
    }
  };

  return (
    <MailContext.Provider
      value={{
        sendContactMail,
        sendQuickMail,
        sendCareerFormMail,
      }}
    >
      {children}
    </MailContext.Provider>
  );
};

export default MailsProvider;
