import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/ContactUs.module.scss";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5u222z9",
        "template_hdadh65",
        form.current,
        "0s4nolNyVNvRcc3G5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className={styles.contactUsPage}>
        <div className={styles.contactUsBox}>
          <h2 className={styles.contactUsTitle}>Contact Us</h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={styles.contactUsForm}
          >
            <div className={styles.contactDetails}>
              <label>Name</label>
              <input
                className={styles.contactUsInput}
                type="text"
                name="user_name"
                placeholder=""
              />
            </div>
            <div className={styles.contactDetails}>
              <label>Email</label>
              <input
                className={styles.contactUsInput}
                type="email"
                name="user_email"
              />
            </div>
            <div className={styles.contactDetails}>
              <label>Message</label>
              <textarea className={styles.contactUsTextarea} name="message" />
            </div>
            <input
              type="submit"
              className={styles.contactUsFormButton}
              value="Send"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
