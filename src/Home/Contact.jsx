


import React from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_8b7brzo",
    "template_lk2eqyy",
    e.target,
    "y6yNJ8322n8zlWO-v"
  )
  .then((res) => {
    console.log("SUCCESS:", res);
    alert("Message sent!");
    e.target.reset();
  })
  .catch((err) => {
    console.log("ERROR:", err);
    alert("Error occurred");
  });
};

  return (
    <section className="contact" id="contact">
      <h1 className="title">
        CONTACT <span>ME</span>
      </h1>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out for projects or collaboration.</p>

          <p>Gmail: tharunprasath288@gmail.com</p>
          <p>Mobile: +91 7418525275</p>
          <p>Location: Karur, India</p>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={sendEmail}>
          
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>

        </form>
      </div>
    </section>
  );
}

export default Contact;