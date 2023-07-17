import React from "react";
import "./styles.css";

function ContactForm() {
    window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
          form.reset();
        }
      }
  return (
    <div className="contact-form">
      <form action="https://formspree.io/f/mrgwzban" method="POST">
        <div className="form-group">
          <label className="contact-label" htmlFor="firstName">First Name</label>
          <input className="text-box" type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label className="contact-label" htmlFor="lastName">Last Name</label>
          <input className="text-box" type="text" id="lastName" name="lastName" required />
        </div>
        <div className="form-group">
          <label className="contact-label" htmlFor="email">Email</label>
          <input className="text-box" type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label className="contact-label" htmlFor="phone">Phone</label>
          <input className="text-box" type="text" id="phone" name="phone" />
        </div>
        <div className="form-group">
          <label className="contact-label" htmlFor="linkedin">LinkedIn</label>
          <input className="text-box" type="text" id="linkedin" name="linkedin" />
        </div>
        <div className="form-group">
          <label className="contact-label" htmlFor="message">Message</label>
          <textarea className="text-box" id="message" name="message" rows="4"></textarea>
        </div>
        <button className="contact-submit-button">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
