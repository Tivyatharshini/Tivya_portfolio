import React,{useState} from 'react';
import './style.css';
import img from "../../assets/contact.png";
import { FaCheck, FaPhoneAlt } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (event) => {
    console.log('Input field changed:', event.target.name, event.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);

    // Construct the mailto link
    const toEmail = 'tivyatharshinij@gmail.com'; // Default recipient email
    const fromEmail = formData.email; // Sender's email from the form
    const subject = 'Contact Form Submission'; // Subject line
    const body = `Name: ${formData.name}\nEmail: ${fromEmail}\nMessage: ${formData.message}`; // Email body

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${toEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open Gmail with the constructed mailto link
    window.open(mailtoLink, '_blank');

    // Clear form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div style={{marginTop:"105px"}} className="contact-container">
      <div className="contact-image">
        <img style={{width: "300px", height: "300px"}} src={img} alt="Contact" />
      </div>
      <div className="contact-form">
        <h2 style={{fontSize: "39px"}}>Contact <strong className='purple'> Us</strong> <FaPhoneAlt size="25px"/> </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message" 
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleInputChange}
            cols="0"
            rows="7"
            required
          ></textarea>
          <button type="submit">Send Message  <MdSend/></button>
        </form>
      </div>
      <div className="contact-info">
        <p style={{color: "white", fontSize: "18px"}}>Contact</p>
        <p>1234567890</p>
        <p style={{color: "white", fontSize: "18px"}}>Based in </p>
        <p>Coimbatore, India</p>
      </div>
      {showSuccessPopup && (
        <div className="success-popup">
          <p>Message sent successfully!</p><FaCheck color="green"/>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
