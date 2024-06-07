import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <div className='contact form'>
      <form className='input-box'>
        <input type="text" placeholder="Enter Your Name" />
        <input type="email" placeholder="Enter Your Email" />
        <input type="tel" placeholder="Enter Your Number" />
        <textarea placeholder="Your Message"></textarea>
        <button className='btn' type="submit">Submit</button>
      </form>
      </div>
    </section>
  );
};

export default Contact;