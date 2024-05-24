import React, { useState } from 'react';
import FruitCard from './FruitCard';

const Items = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      image: "1.jpeg",
      name: "Green Grapes",
      price: 100,
      dis: "1% off",
    },
    {
        id: 2,
        image: "2.jpeg",
        name: "Pomegranate",
        price: 200,
        dis: "12% off",
    },
    {
      id: 3,
      image: "3.jpeg",
      name: "Black Grapes",
      price: 250,
      dis: "20% off",
    },
    {
        id: 4,
        image: "4.jpeg",
        name: "Grape Fruit",
        price: 300,
        dis: "5% off",
    },
    {
      id: 5,
      image: "5.jpeg",
      name: "Berry",
      price: 250,
      dis: "10% off",
    },
    {
      id: 6,
      image: "6.jpeg",
      name: "Lemon",
      price: 150,
      dis: "3% off",
    },
  ]);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-12 w-5/6 my-10 py-10'>
      {items.map((item) => (
        <FruitCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Items;
