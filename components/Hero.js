"use client";
import React from "react";
import backgroundVideo from "/videos/video1.mp4";

function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>

      {/* Semi-Transparent Overlay for Opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-20"></div>

      {/* Logo & Parallel Text at the Top Left */}
      <div className="absolute top-4 left-4 z-30 flex items-center space-x-2">
        <img
          src="/images/traveling.png"
          alt="Travel Bag Image"
          className="w-12 h-12"
        />
        <span className="font-base italic text-sm sm:text-sm md:text-base leading-relaxed text-white">
          TravelTroop
        </span>
      </div>

      {/* Main Centered Content */}
      <div className="relative z-30 flex items-center justify-center h-full text-white text-center px-4">
        <div>
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl">
            Welcome to TravelTroop
          </h1>
          <p className="mt-2 text-lg font-base sm:text-xl md:text-xl">
            Your Ultimate Tour Blog Site
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
