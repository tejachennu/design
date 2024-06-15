import { useState } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import ServiceSection from "./Components/ServiceSection";
library.add(fab);
library.add(fas);
import Card from "./Components/Card";
import ProfileCard from "./Components/ProfileCard";
import TestimonialSlider from "./Components/TestimonialSlider";



function App() {
  // src/data/cardsData.js
  const cardsData = [
    {
      name: "Alan Smith",
      icon: "https://askproject.net/evecon/wp-content/uploads/sites/126/2023/01/millennials-multiracial-guys-showing-various-emoti2-T7HDT9D.jpg",
      room: "Room 1",
      date: "Jan 9, 2023",
      time: "10:00 AM",
      title: "Business and Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
    },
    {
      name: "Jane Doe",
      icon: "https://askproject.net/evecon/wp-content/uploads/sites/126/2023/01/millennials-multiracial-guys-showing-various-emoti2-T7HDT9D.jpg",
      room: "Room 2",
      date: "Feb 15, 2023",
      time: "11:00 AM",
      title: "Technology and Innovation",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.",
    },
    {
      name: "Jane Doe",
      icon: "https://askproject.net/evecon/wp-content/uploads/sites/126/2023/01/millennials-multiracial-guys-showing-various-emoti2-T7HDT9D.jpg",
      room: "Room 2",
      date: "Feb 15, 2023",
      time: "11:00 AM",
      title: "Technology and Innovation",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.",
    },
    {
      name: "Alan Smith",
      icon: "https://askproject.net/evecon/wp-content/uploads/sites/126/2023/01/millennials-multiracial-guys-showing-various-emoti2-T7HDT9D.jpg",
      room: "Room 1",
      date: "Jan 9, 2023",
      time: "10:00 AM",
      title: "Business and Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
    },
  ];

  return (
    <>
      <div className="w-full h-auto ">
        <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto my-20">
           <div className="max-w-2xl my-3 mx-3 overflow-hidden bg-[#EBE8FF] md:max-w-4xl transition-background transition-border transition-border-radius transition-box-shadow duration-300 hover:shadow-[7px_7px_0px_0px_rgb(35,10,78)]">
      <div className="p-1 md:flex md:p-8">
        <div className="flex flex-col items-center justify-center p-4 md:flex-shrink-0">
          <div className="flex items-center justify-center">
            <img
              className="object-cover w-48 h-48 rounded-full shadow-lg md:w-48"
              src={ cardsData[0].icon}
              alt="Profile"
            />
          </div>
          <h2 className="mt-4 font-sans text-xl text-center text-black max-md:mt-6">
            {cardsData[0].name}
          </h2>
        </div>
        <div className="p-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="p-1 text-sm font-semibold tracking-wide text-white uppercase bg-[#2C094E] ">
              {cardsData[0].room}
            </div>
            <div>
              <span className="text-gray-600">{cardsData[0].date}</span> •{" "}
              <span className="text-gray-600">{cardsData[0].time}</span>
            </div>
          </div>
          <h1 className="block mt-4 text-2xl font-semibold leading-tight text-[#230A4E]">
            {cardsData[0].title}
          </h1>
          <p className="mt-2 text-gray-600">
            {cardsData[0].description}
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
        </div>
        {/* EVENT DETAIL */}
        <div className="w-full h-auto mt-4 ">
          <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto">
            <div className=" md:grid md:grid-cols-3 md:gap-2">
              <div className="col-span-2 ">

              <div className="p-4">
      <div className="">
      <h3 className="text-[#b4a6db] text-xl uppercase tracking-wide mb-1 leading-6">
      Event Detail
              </h3>
      </div>
      <div className="">
        <h2 className="text-[#2C094E] text-5xl font-semibold leading-loose max-md:text-3xl">About Business and Marketing</h2>
      </div>
      <div className="my-1">
        <p className="text-base ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus nunc eu odio pulvinar fringilla. Vivamus vitae odio ex. Curabitur varius semper turpis eu ullamcorper. Sed pharetra libero nec lorem rutrum interdum. Aliquam egestas ligula ex, at lobortis neque efficitur in. Fusce sit amet ullamcorper ipsum. Curabitur elit lectus, rhoncus quis facilisis in, faucibus ac orci.
        </p>
        <p className="mt-2 text-base ">
          Sed consectetur consectetur nulla et euismod. Proin bibendum augue sapien, vitae pulvinar quam consequat sed. Praesent sit amet convallis turpis. Vestibulum a ultrices quam.
        </p>
      </div>
      <div className="my-4">
        <h3 className="text-2xl text-[#2C094E] font-semibold">What will be covered in this session</h3>
      </div>
      <div className="my-4">
        <p className="text-base ">
          Proin at ullamcorper diam. Proin mollis vulputate dignissim. Praesent quis diam accumsan nisl pretium bibendum laoreet eget elit. Aliquam scelerisque vehicula mi tincidunt suscipit. Etiam finibus nibh dui, id mollis augue commodo et.
        </p>
      </div>
      <div className="my-4">
      <ul className="space-y-2">
          <li className="flex items-start text-base">
            <img src='check-mark-svgrepo-com.svg' className="w-4 h-4 font-bold text-[#2C094E] mr-2 mt-1" />
            <span>Maecenas imperdiet porttitor eros. Aliquam ut consequat eros.</span>
          </li>
          <li className="flex items-start text-base">
            <img src='check-mark-svgrepo-com.svg' className="w-4 h-4 font-bold text-[#2C094E] mr-2 mt-1" />
            <span>Mauris placerat vehicula viverra. Praesent pellentesque diam.</span>
          </li>
          <li className="flex items-start text-base">
            <img src='check-mark-svgrepo-com.svg' className="w-4 h-4 font-bold text-[#2C094E] mr-2 mt-1" />
            <span>Fusce malesuada euismod nisl, sit amet rutrum felis nec.</span>
          </li>
          <li className="flex items-start text-base">
            <img src='check-mark-svgrepo-com.svg' className="w-4 h-4 font-bold text-[#2C094E] mr-2 mt-1" />
            <span>Etiam porttitor libero ullamcorper lectus euismod, id risus.</span>
          </li>
        </ul>
      </div>
      <div className="my-4">
        <h3 className="text-2xl text-[#2C094E]  font-semibold">Do I need previous experience to attend</h3>
      </div>
      <div className="my-4">
        <p className="text-base ">
          Nulla facilisi. Maecenas imperdiet porttitor eros. Aliquam ut consequat eros. Mauris placerat vehicula viverra. Praesent pellentesque diam vel purus fringilla, id dapibus libero volutpat. Fusce malesuada euismod nisl, sit amet rutrum felis tempor nec. Nulla ullamcorper feugiat tincidunt. Pellentesque sed tempor risus, euismod dapibus orci. Etiam porttitor libero ullamcorper lectus euismod, id placerat risus auctor.
        </p>
      </div>
    </div>
                

              </div>
              <div>
             
           <ProfileCard/>

              </div>

            </div>

          </div>
        </div>

        

        
        {/* cards */}
        <div className=" w-full h-auto  bg-[#EBE8FF] ">
          <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto">
            <div className="my-24 text-center ">
              <h3 className="text-[#b4a6db] text-sm uppercase tracking-wide mb-4 leading-loose">
                More Events
              </h3>
              <h1 className="text-[#2C094E] text-4xl max-md:text-2xl leading-loose">
                Everything Counts
              </h1>
            </div>

            {cardsData.map((card, index) => (
              <Card
                key={index}
                name={card.name}
                icon={card.icon}
                room={card.room}
                date={card.date}
                time={card.time}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
        <div className="w-full h-auto p-5 ">
          <div>
            <TestimonialSlider/>
          </div>

        </div>
        
      </div>
    </>
  );
}

export default App;
