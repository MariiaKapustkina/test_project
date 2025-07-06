import "./Contact.scss";

import girlWithPlant from "../../assets/images/contact.png";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-form-column">
        <h1>FOLLOW US</h1>
        <form action="" className="contact-form">
          <input type="text" placeholder="Enter your name" className="contact-input" />
          <input type="email" placeholder="Enter a valid email address" className="contact-input" />
          <textarea placeholder="Enter your message" className="contact-textarea"></textarea>
          <button type="submit" className="contact-submit-button">SUBMIT</button>
        </form>
      </div>
       <div className="contact-image-column">
          <div className="contact-image-wrapper">
            <img src={girlWithPlant} alt="Girl holding a plant" className="contact-image" />
          </div>
        </div>
    </section>
  )
}