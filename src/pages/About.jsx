import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ullam
          hic ratione deleniti laboriosam quia totam aliquid dicta eligendi
          facilis omnis vitae architecto sint delectus, voluptatum porro eos
          beatae exercitationem consectetur recusandae. Numquam sunt culpa
          earum! Dicta quod delectus mollitia eius aliquam obcaecati vitae esse
          distinctio quasi in illo nobis, cumque, accusamus expedita, optio
          voluptatum deserunt eos. Doloribus id nobis magni autem, alias maiores
          explicabo excepturi mollitia ex assumenda distinctio maxime. Ut
          suscipit voluptates eaque aliquid doloribus consequuntur voluptatum in
          similique, sunt tempore obcaecati quasi minus adipisci. Odit nostrum
          recusandae optio impedit. Libero ab quod quibusdam qui, reiciendis
          modi recusandae?
        </p>
      </div>
    </div>
  );
};

export default About;
