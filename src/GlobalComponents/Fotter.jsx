import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab); 
library.add(fas);

function Footer(props) {
    return (
        <footer className="py-12 text-white bg-gray-950 lg:px-36">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className='col-start-1 '>
            <h2 className="text-3xl font-bold text-orange-500 ">Astrobot</h2>
            <p className="mt-4 text-gray-400">
              Sed ut perspiciatis unde omnis iste natus delavirot voluptatem accusantium doloremque laudanti totam aperiam inventore veritatis congue. Olutpat elit nec nisi congue tristique eu at velit.
            </p>
            <p className="mt-4 font-bold text-orange-500">Hotline : (+62) 111 33 231</p>
          </div>

          <div className='col-span-2 pb-2 '>
            <div className='mb-4 md:flex md:items-center md:justify-between lg:pr-20'>
              <div className='flex gap-4 md:items-center md:justify-center max-md:mb-1 '>
                 <FontAwesomeIcon icon="fa-solid fa-phone" className='text-3xl text-orange-500 '  />
                  <div>
                    <h2 className='font-bold '>Phone</h2>
                    <p className=''>6303012453</p>
                  </div>
              </div>
              <div className='flex gap-4 md:items-center md:justify-center max-md:mb-1 '>
                 <FontAwesomeIcon icon="fa-solid fa-envelope" className='text-3xl text-orange-500 '  />
                  <div>
                    <h2 className='font-bold '>Email</h2>
                    <p className=''>tejachennu223@gmail.com</p>
                  </div>
              </div>
              <div className='flex gap-4 md:items-center md:justify-center max-md:mb-1 '>
                 <FontAwesomeIcon icon="fa-solid fa-location-dot" className='text-3xl text-orange-500 '  />
                  <div>
                    <h2 className='font-bold '>Location</h2>
                    <p className=''>Mogaltur</p>
                  </div>
              </div>
            </div>

          <div className="grid grid-cols-1 gap-8 pt-2 border-t border-gray-700 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 transition hover:text-orange-500">About</a></li>
              <li><a href="#" className="text-gray-400 transition hover:text-orange-500">Services</a></li>
              <li><a href="#" className="text-gray-400 transition hover:text-orange-500">Blog</a></li>
              <li><a href="#" className="text-gray-400 transition hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 transition hover:text-orange-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 transition hover:text-orange-500">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 transition hover:text-orange-500">Support</a></li>
              <li><a href="#" className="text-gray-400 transition hover:text-orange-500">Disclaimer</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Subscribe Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Sed ut perspiciatis unde omnis iste natus feria delavirot.
            </p>
            <div className="flex">
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 text-black rounded-l-lg focus:outline-none"/>
              <button className="px-4 py-2 font-bold text-white transition bg-orange-500 rounded-r-lg hover:bg-orange-600">→</button>
            </div>
          </div>
          </div>
          </div>

        
        </div>
        <div className="flex flex-col items-center justify-between pt-6 mt-12 border-t border-gray-700 md:flex-row">
          <p className="text-gray-500">Copyright © Astrobot 2022. All rights reserved.</p>
          <div className="flex mt-4 space-x-4 md:mt-0">
            <a href="#" className="px-3 py-2 text-white transition bg-orange-500 ">
                 <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </a>
            <a href="#" className="px-3 py-2 text-white transition bg-orange-500">
                 <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" />
            </a>
            <a href="#" className="px-3 py-2 text-white transition bg-orange-500">
                  <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
            </a>
            <a href="#" className="px-3 py-2 text-white transition bg-orange-500">
                 <FontAwesomeIcon icon="fa-brands fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>

    );
}

export default Footer;
