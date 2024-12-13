"use client";
import React from 'react';
import Slider from 'react-slick';

function Carousel() {
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Enable looping
    speed: 800,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // 3 seconds for each slide
    arrows : false
  };

  const carouselItems = [
    {
      question: "Do I need a visa to visit Pakistan?",
      answer:
        "Yes, most foreign nationals need a visa to enter Pakistan. However, Pakistan offers an e-visa facility for travelers from over 175 countries, making the application process convenient. Check the official visa portal for details.",
    },
    {
      question: "What is the official currency of Pakistan?",
      answer:
        "The official currency is the Pakistani Rupee (PKR). It is advisable to carry cash for local markets and small vendors, but credit and debit cards are widely accepted in hotels, restaurants, and malls.",
    },
    {
      question: "What languages are spoken in Pakistan?",
      answer:
        "Urdu is the national language and widely understood across the country. In major cities like Karachi, Lahore, and Islamabad, English is commonly spoken, especially in businesses and tourist areas. Local languages include Punjabi, Sindhi, Pashto, and Balochi, depending on the region.",
    },
    {
      question: "What are the best times to visit Pakistan’s famous cities?",
      answer:
        "Spring (March to May) and Autumn (September to November) are ideal for most cities due to pleasant weather. For northern cities like Hunza and Skardu, summer (June to August) is best. For cultural festivals, winter months like December offer events like the Lahore Literary Festival.",
    },
  ];

  return (
    <div className="py-16 bg-gray-100 min-h-32">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-xl sm:text-5xl md:text-4xl font-bold mb-8 text-gray-800">FAQs</h1>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <Slider {...settings}>
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md text-left"
              style={{ minHeight: '200px' }}
            >
              <h2 className="text-lg font-semibold mb-2 text-gray-800">{item.question}</h2>
              <p className="text-gray-600 text-sm">{item.answer}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
