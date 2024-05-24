import { useState } from 'react'
import './App.css'
import Header from './GlobalComponents/Header'
import Fotter from './GlobalComponents/Fotter'
import Services from './GlobalComponents/Services'
import BlogSection from './GlobalComponents/BlogSection'
import { CategoryButton, CategoryContent } from './GlobalComponents/CategoryContent'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react'
library.add(fab); 
library.add(fas);

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Drinks & Coffee');
  const categories = [
    'Food & Snacks',
    'Drinks & Coffee',
    'Gumball & Candy',
    'Cold & Frozen',
    'Custom Machines',
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Technology', 'Gamer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []); 
  

  return (
    <>
      <div className="Info">
        <Header />
        <div className="flex items-center max-md:justify-center h-[100vh] md:ml-28">
      <div className="max-w-sm p-8 m-2 bg-white shadow-lg lg:w-1/2">
        <h2 className="text-2xl font-bold text-gray-900 transition duration-300 ease-in-out">
          The Modern Industry of{' '}
          <span className="text-orange-500">{words[currentWordIndex]}</span>
        </h2>
        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud.
        </p>
        <div className="flex mt-6 space-x-4">
          <button className="px-4 py-2 text-white transition duration-300 ease-in-out bg-orange-500 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
            Contact Us
          </button>
          <button className="flex items-center text-gray-900 transition duration-300 ease-in-out hover:text-orange-500 focus:outline-none">
            <FontAwesomeIcon icon="fa-solid fa-play" className="m-1" />
            Watch Video
          </button>
        </div>
      </div>
    </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <div className="max-w-full md:p-[8%] p-8 bg-gray-900 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold text-orange-500">
              Who We Are
            </h2>
            <h1 className="mb-4 text-3xl font-bold text-white">
              The One Stop Solution for Your Industries
            </h1>
            <p className="mb-8 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2 text-white">
                <span>Saving You Time</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700  h-2.5">
                <div
                  className="bg-orange-500 h-2.5 "
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2 text-white">
                <span>Trusted Company</span>
                <span>94%</span>
              </div>
              <div className="w-full bg-gray-700  h-2.5">
                <div
                  className="bg-orange-500 h-2.5 "
                  style={{ width: "94%" }}
                ></div>
              </div>
            </div>
            <ul className="mb-8 space-y-2 list-none">
              <li className="flex items-center text-white">
                <span className="mr-2 font-bold text-orange-500">✔</span>{" "}
                Constant Improvement
              </li>
              <li className="flex items-center text-white">
                <span className="mr-2 font-bold text-orange-500">✔</span>{" "}
                Commitment to Customers
              </li>
              <li className="flex items-center text-white">
                <span className="mr-2 font-bold text-orange-500">✔</span> Best
                Quality You Can Get
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="#"
                className="px-4 py-2 text-white transition bg-orange-500 okshadow hover:bg-orange-600"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="divimg md:max-w-[50%]">
               <img className="object-cover w-full h-full md:block" src="https://templatekit.jegtheme.com/astrobot/wp-content/uploads/sites/285/2022/05/female-engineers-working-in-industry-factory-.jpg" alt="Background Image"/>
          </div>


        </div>

     <Services/>
     <BlogSection/>
        <div className="w-full h-auto md:h-[100vh] flex flex-col items-center justify-center p-4 mx-auto ">
          <div className='flex flex-col items-center justify-center '>
            <h1 className='mt-4 text-4xl font-bold text-orange-500 '>Largest Selection</h1>
            <p className='mt-4 mb-4 text-slate-800' >Donec pulvinar, eros quis convallis vestibulum, neque turpis
                iaculis mi, in ultrices nisl magna ut leo.</p>
            <div className="grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2 md:w-[70%]">
            {categories.map(category => (
              <CategoryButton
                key={category}
                category={category}
                isSelected={selectedCategory === category}
                onClick={setSelectedCategory}
              />
            ))}
          </div>
          </div>
          <CategoryContent category={selectedCategory} />
        </div>
        <Fotter />
      </div>
    </>
  );
}

export default App
