// Card.jsx
import React from "react";

export const Card = ({ friend }) => {
  console.log("Recived props", friend);

  const [firstItem, secondItem, ...rest] = friend.arr;

  return (
    <div className="mb-8">
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-128 h-128 md:w-128 md:h-auto md:rounded-none rounded-full mx-auto"
          src={friend.image}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
              unde omnis consequuntur aut cumque corrupti repellendus ex dolores
              iste, est quas beatae minima? Voluptate accusamus fuga iure, nulla
              nobis illo.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div>
              {`${firstItem ? firstItem + "," : ""}`}{" "}
              {`${secondItem ? secondItem + "," : ""}`} {rest.join(", ")}
            </div>
            <p>Name: {friend.name}</p>
            <p>Post: {friend.post}</p>
            <p>Age: {friend.age}</p>
            <p>City: {friend.adress.city}</p>
            <p>Country: {friend.adress.country}</p>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
