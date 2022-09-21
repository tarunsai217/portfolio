import React, { useState } from "react";
import "./Footer.scss";
import { GitIcon, MailIcon } from "./Assets";
import emailjs from "@emailjs/browser";
export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailSent, setEmailSent] = useState(false);

  const onChangeHandler = (e) => {
    let change = {};
    change[e.target.id] = e.target.value;
    setFormData((prev) => {
      return { ...prev, ...change };
    });
  };

  const sendMessage = async () => {
    let res = await emailjs.send(
      "service_z8toy58",
      "template_olxl95r",
      formData,
      "fpmzz-xLqd7s1rRfd"
    );
    setFormData({ name: "", email: "", message: "" });
    setEmailSent(true);
    setTimeout(() => {
      setEmailSent(false);
    }, 2000);
  };
  return (
    <section id="contact" className="feedback">
      <h2 className="feedback-heading">Connect With Me</h2>
      <div className="cards">
        <div>
          <a className="card-item" href="mailto:tarunsai217@gmail.com">
            <MailIcon fill="#aa9aba" />
            <span>tarunsai217@gmail.com</span>
          </a>
        </div>
        <div>
          <a href="https://github.com/tarunsai217" className="card-item">
            <GitIcon fill="#aa9aba" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <div className="form-container">
        <input
          value={formData.name}
          id="name"
          onChange={onChangeHandler}
          className="name-input"
          placeholder="Your Name"
        />
        <input
          value={formData.email}
          id="email"
          onChange={onChangeHandler}
          className="email-input"
          placeholder="Your Email"
        />
        <textarea
          value={formData.message}
          id="message"
          onChange={onChangeHandler}
          className="message-input"
          placeholder="Your Message"
        />
        {!emailSent && (
          <button
            disabled={!(formData.name && formData.email && formData.message)}
            onClick={sendMessage}
          >
            Send Message
          </button>
        )}
        {emailSent && (
          <span className="message">Thanks for reaching out!!!</span>
        )}
      </div>
    </section>
  );
}
