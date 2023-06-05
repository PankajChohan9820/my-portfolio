import React from 'react';
import './Contact.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

 function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-heading">CONTACT</h2>
      <p className="contact-subheading">Let's connect</p>
      <form className="contact-form">
        <label htmlFor="email" className="contact-label">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" className="contact-input" required />
        <label htmlFor="name" className="contact-label">Full Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name" className="contact-input" required />
        <label htmlFor="message" className="contact-label">Message:</label>
        <textarea id="message" name="message" placeholder="Enter your message" className="contact-textarea" required></textarea>
        <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      </form>
    </section>
  );
}
 export default Contact;