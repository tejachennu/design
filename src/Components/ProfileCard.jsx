 import React from 'react';
 import 'animate.css';
 
 function ProfileCard({ icon, name }) {
    return (
       <>
       <h1 className=' text-[#2C094E] mx-3 text-2xl font-medium'>Session Speaker</h1>

<div className="max-w-xl my-3 mx-3 overflow-hidden bg-[#EBE8FF] md:max-w-xl transition-background transition-border transition-border-radius transition-box-shadow duration-300 hover:shadow-[7px_7px_0px_0px_rgb(35,10,78)]">
        <div className="p-1 md:p-8">
          <div className="flex flex-col items-center justify-center p-4">
            <div className="flex items-center justify-center w-48 h-48">
              <img
                className="object-cover w-48 h-48 rounded-full shadow-lg md:w-48"
                src='https://askproject.net/evecon/wp-content/uploads/sites/126/2023/01/millennials-multiracial-guys-showing-various-emoti2-T7HDT9D.jpg'
                alt="Profile"
              />
            </div>
            <h1 className="mt-4 font-sans text-2xl text-center text-black max-md:mt-6">
               Alan Smiths
            </h1>
            <h2 className="mt-4 font-sans text-sm text-center text-black ">
               MARKETING
            </h2>
            <div className="flex items-center mt-6 space-x-4">
            <button className=" w-7 h-7 p-1 flex items-center justify-center relative overflow-hidden rounded-full bg-[#2C094E] text-white shadow-md shadow-gray-200 group transition-all duration-300">
          <svg className="relative z-10 transition-all duration-300 fill-white group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
            <path
              d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
              fill="" />
          </svg>
          <div className="absolute left-0 z-0 w-full h-full transition-all duration-500 bg-blue-500 rounded-full top-full group-hover:top-0"> </div>
          </button>

          <button className=" w-7 h-7 p-1 flex items-center justify-center rounded-full relative overflow-hidden bg-[#2C094E] text-white shadow-md shadow-gray-200 group transition-all duration-300">
          <svg className="z-10 transition-all duration-300 fill-white group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
          <path
            d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z"
            fill="" />
          </svg>
          <div className="absolute left-0 z-0 w-full h-full transition-all duration-500 bg-black rounded-full top-full group-hover:top-0"></div>
          </button>
          
          <button className=" w-7 h-7 p-1 flex items-center relative overflow-hidden justify-center rounded-full bg-[#2C094E] text-white shadow-md shadow-gray-200 group transition-all duration-300">
          <svg className="relative z-10 transition-all duration-300 fill-white group-hover:fill-white"  xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
          <path d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z" 
          fill=""/>
          </svg>
          <div className="absolute top-full left-0 w-full h-full rounded-full bg-[#006699] z-0 transition-all duration-500 group-hover:top-0"></div>
          </button>

         </div>
          </div>
        </div>
      </div>


       </>
    );
 }
 
 export default ProfileCard;