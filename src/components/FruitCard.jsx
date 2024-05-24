import React from "react";

const FruitCard = ({ item }) => {
  if (!item) {
    return;
  }

  return (
    <>
      <div className="rounded-2xl shadow-2xl overflow-hidden group transform hover:scale-110 duration-100 border border-white-500 relative">
        <img
          className="w-full h-52 object-cover"
          src={require(`../assets/${item.image}`)}
          alt={`${item.image}`}
        />
        <div className="flex flex-col items-center my-2 py-2 font-poppins space-y-1">
          <h2 className="font-body text-slate-500 block text-xl">{item.name}</h2>
          <p className="font-body text-slate-500">₹{item.price}</p>
          <p className="font-body uppercase text-lime-500 invisible group-hover:visible">add to cart</p>
        </div> 
        <span className=" absolute top-2 right-2 bg-sky-300 p-1 text-white border border-sky-300 rounded-xl">{item.dis}</span>
      </div>
    </>
  );
};

export default FruitCard;
