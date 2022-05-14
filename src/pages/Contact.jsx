import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact us</h1>
        <form>
          <label htmlFor="name">Enter Name</label>
          <input type="text" name="name" id="" />
          <label htmlFor="email">Enter email</label>
          <input type="text" name="email" id="" />
          <label htmlFor="msg">Enter Your message</label>
          <textarea></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
