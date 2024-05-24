import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab); 
library.add(fas);
const services = [
  { title: 'Robot Installation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore', icon: 'fa-solid fa-robot' },
  { title: 'Industry Robot', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore', icon: 'fa-solid fa-robot' },
  { title: 'IOT Integration', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore', icon: 'fa-solid fa-robot' },
  { title: 'Robot Resource', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore', icon: 'fa-solid fa-robot' },
  { title: 'Robotic Training', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore', icon: 'fa-solid fa-robot' },
];

const ServiceCard = ({ title, description, icon }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <div className="mb-4">
      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gray-200 rounded-full ">
      <FontAwesomeIcon icon={icon} className='text-3xl text-orange-500 '/>
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    <a href="#" className="text-orange-500 hover:underline">
      Read More <span className="ml-1">→</span>
    </a>
  </div>
);

const Services = () => (
  <section className="p-4 md:px-16 md:py-16 bg-gray-50">
    <div className="container px-4 mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold">The Best System Services</h2>
        <p className="max-w-md mx-auto text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="px-6 py-2 mt-4 text-white bg-orange-500 rounded hover:bg-orange-600">All Services</button>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
