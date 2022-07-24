import React, { useState } from "react";

function Contact() {
    const [formState] = useState({ name: '', email: '',contactnumber:'', message: '' });
    const { name, email, message } = formState;

    return (
        <section>
          <h1 data-testid="h1tag">Connect!</h1>
          <form id="contact-form" >
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" defaultValue={name}  />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" defaultValue={email}  />
            </div>
            <div>
              <label htmlFor="phone">Enter your contact number:</label>
              <input type="phone"/>
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" rows="7" defaultValue={message}  />
            </div>
            <button data-testid="button" type="submit">Click to connect!</button>
          </form>
        </section>
    );
  };
  export default Contact;