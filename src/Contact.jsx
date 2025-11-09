// import React from "react";
// import "./Contact.css";

// const Contact = () => {
//   return (
//     <div className="footer-container">
//       {/* ✅ Top-left logo */}
//       <div className="top-left-logo">
//         <img src="/vfilms.png" alt="V Films Logo" />
//       </div>

//       {/* Decorative vectors */}
//       <img src="/footer 1.png" alt="Top Decoration" className="top-vector" />
//       <img src="/Footer Vector.png" alt="Bottom Decoration" className="bottom-vector" />

//       <div className="footer-content">
//         {/* Left Section */}
//         <div className="footer-left">
//           <h2 className="footer-logo">V Films</h2>
//           <p>
//             Whether you have a film, a question, or simply want to explore how V can bring together
//             TV, art, and narrative films — join the story today. Bring ideas to life with us.
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="footer-right">
//           <h3>Join the Story</h3>
//           <form className="footer-form">
//             <input type="text" placeholder="Name" required />
//             <input type="email" placeholder="Email" required />
//             <input type="text" placeholder="Role" required />
//             <textarea placeholder="Message" rows="4" required></textarea>

//             <button type="submit">Submit</button>

//             {/* ✅ Contact Info below button */}
//             <div className="contact-info">
//               <span>contact@vfilms.com</span>
//               <span>+91 98765 43210</span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // to show success/error message

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Email validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setStatus("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Form Submitted ✅");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Error connecting to server.");
    }
  };

  return (
    <div className="footer-container">
      <div className="top-left-logo">
        <img src="/vfilms.png" alt="V Films Logo" />
      </div>

      <img src="/footer 1.png" alt="Top Decoration" className="top-vector" />
      <img src="/Footer Vector.png" alt="Bottom Decoration" className="bottom-vector" />

      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-logo">V Films</h2>
          <p>
            Whether you have a film, a question, or simply want to explore how V can bring together
            TV, art, and narrative films — join the story today. Bring ideas to life with us.
          </p>
        </div>

        <div className="footer-right">
          <h3>Join the Story</h3>
          <form className="footer-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit</button>

            <div className="contact-info">
              <span>contact@vfilms.com</span>
              <span>+91 98765 43210</span>
            </div>
          </form>

          {status && <p className="form-status">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
