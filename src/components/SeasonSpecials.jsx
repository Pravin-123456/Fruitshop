import React, { useState } from "react";
import FruitCard from "./FruitCard";
import Divider from "./Divider";

const SeasonSpecials = () => {
  const [items, setItems] = useState([
    {
      id: 7,
      image: "7.jpeg",
      name: "Orange",
      price: 100,
      dis: "50% off",
    },
    {
      id: 1,
      image: "1.jpeg",
      name: "Green Grapes",
      price: 100,
      dis: "30% off",
    },
    {
      id: 6,
      image: "6.jpeg",
      name: "lemon",
      price: 150,
      dis: "3% off",
    },
  ]);
  return (
    <section className="w-5/6 mx-auto my-10">
        <Divider title='Season Spcial' />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-12 my-14">
          {items.map((item) => (
            <FruitCard key={item.id} item={item} />
          ))}
        </div>
    </section>
  );
};

export default SeasonSpecials;
