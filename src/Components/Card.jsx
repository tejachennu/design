// src/components/Card.jsx
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ title, description, icon, name, room, date, time }) => {
  return (
    <div className=" fadeInUp max-w-2xl my-3 mx-3 overflow-hidden bg-[#ffffff] md:max-w-4xl transition-background transition-border transition-border-radius transition-box-shadow duration-300 hover:shadow-[7px_7px_0px_0px_rgb(35,10,78)]">
      <div className="p-1 md:flex md:p-8">
        <div className="flex flex-col items-center justify-center p-4 md:flex-shrink-0">
          <div className="flex items-center justify-center">
            <img
              className="object-cover w-48 h-48 rounded-full shadow-lg md:w-48"
              src={icon}
              alt="Profile"
            />
          </div>
          <h2 className="mt-4 font-sans text-xl text-center text-black max-md:mt-6">
            {name}
          </h2>
        </div>
        <div className="p-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="p-1 text-sm font-semibold tracking-wide text-white uppercase bg-[#2C094E] ">
              {room}
            </div>
            <div>
              <span className="text-gray-600">{date}</span> •{" "}
              <span className="text-gray-600">{time}</span>
            </div>
          </div>
          <h1 className="block mt-4 text-2xl font-semibold leading-tight text-[#230A4E]">
            {title}
          </h1>
          <p className="mt-2 text-gray-600">
            {description}
          </p>
          <a
            href="#"
            className="block mt-4 text-[#2C094E] hover:text-[#562C8A]"
          >
            Read more <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
