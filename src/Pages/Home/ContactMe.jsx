import { useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="Contact" className="contact-section">
      <div>
        <p className="sub-title-">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          eveniet?
        </p>
      </div>
      <form ref={form} className="contact-form-container" onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact-label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact-label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact-label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact-input text-md"
              name="email"
              id="email"
              required
            />
          </label>

          <label htmlFor="message" className="contact-label">
            <span className="text-md">Message</span>
            <textarea
              className="contact-input text-md"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label>
        </div>
        <div>
          <button className="btn btn-primary contact-form-btn">Submit</button>
        </div>
      </form>
    </section>
  );
};
export default ContactMe;
