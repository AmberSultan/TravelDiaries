"use client";
import React from 'react';

function Second() {
  return (
    <div className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h1 className="text-xl sm:text-5xl md:text-4xl font-bold mb-4 text-gray-800">
          About This Website
        </h1>
        
        {/* Paragraph */}
        <div className="text-gray-600 text-sm sm:text-sm md:text-base leading-relaxed">
        <p >
          Your go-to guide for exploring Pakistan's 💚 most iconic travel cities and must-visit attractions. 
          From vibrant cultural hubs like Lahore to the serene beauty of Hunza Valley, we provide tips, 
          guides, and insights to make your journey unforgettable.
        </p>
        <p>--------------------------</p>
        <p className='mt-8 '>Here, you'll discover:</p>
  <ul>
    <li>🏙️ Top Pakistani Travel Cities and their unique charm</li>
    <li>📍 Famous landmarks and their historical significance</li>
    <li>🍃 Nature retreats, cultural sites, and offbeat destinations</li>
    <li>🛎️ Travel tips, guides, and itineraries tailored just for you</li>
  </ul>

  </div>

  <div className='text-gray-600 mt-8 text-sm sm:text-sm md:text-base leading-relaxed'>
  Our mission is to make your trip planning easy and exciting by providing the most accurate and up-to-date information about Pakistan's iconic destinations. From exploring the vibrant streets of Lahore to the serene valleys of Hunza and Swat, we've got you covered.

Let the journey begin! Explore the magic of Pakistan with us. 🧳✨

<p className='font-extrabold mt-8 text-sm sm:text-sm md:text-base leading-relaxed'>Start Planning Your Next Adventure Today! 🚀</p>
  </div>
      </div>
    </div>
  );
}

export default Second;
