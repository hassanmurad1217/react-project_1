import { useState } from "react";
import "./index.css";
export const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <div className="container">
      <div className="card">
        <h1>Contact Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={user.username}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleInputChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            required
            autoComplete="off"
            rows="6"
            value={user.message}
            onChange={handleInputChange}
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
