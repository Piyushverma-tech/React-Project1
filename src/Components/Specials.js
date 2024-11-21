import React from "react";
import Card from "./Card";
import "./Specials.css";
import greekSalad from "../assets/greek-salad.jpg";
import bruschetta from "../assets/bruschetta.png";
import lemonDessert from "../assets/lemon-dessert.jpg";

const specialsData = [
  {
    image: greekSalad,
    title: "Greek Salad",
    price: "12.99",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: bruschetta,
    title: "Bruschetta",
    price: "5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    image:lemonDessert,
    title: "Lemon Dessert",
    price: "5.00",
    description:
      "This comes straight from grandma’s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Specials = () => {
  return (
    <section className="specials">
      <div className="specials-header">
        <h1>This week's specials!</h1>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="cards">
        {specialsData.map((special, index) => (
          <Card
            key={index}
            image={special.image}
            title={special.title}
            price={special.price}
            description={special.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Specials;