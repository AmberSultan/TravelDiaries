"use client";

import React from 'react';
import Link from 'next/link';

function Places() {
  return (
    <div className="py-0 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 text-center">
<h1 className="text-xl sm:text-5xl md:text-4xl font-bold mb-4 text-gray-800">
          Choose City to Travel
        </h1>
      <p className="text-gray-600 text-sm sm:text-sm md:text-base leading-relaxed">
        Your Next Adventure Awaits: Choose the Perfect City!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[40px]">
        {/* Karachi */}
        <Link href="/karachi">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
            <img
              src="https://images.pexels.com/photos/15878744/pexels-photo-15878744/free-photo-of-view-of-a-beach-and-sea-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Karachi"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">Karachi</h3>
            </div>
          </div>
        </Link>

        {/* Lahore */}
        <Link href="/lahore">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
            <img
              src="https://images.pexels.com/photos/14406067/pexels-photo-14406067.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Lahore"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">Lahore</h3>
            </div>
          </div>
        </Link>

        {/* Islamabad */}
        <Link href="/islamabad">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
            <img
              src="https://images.pexels.com/photos/9487445/pexels-photo-9487445.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Islamabad"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">Islamabad</h3>
            </div>
          </div>
        </Link>

        {/* Gilgit */}
        <Link href="/gilgit">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
            <img
              src="https://images.pexels.com/photos/1454405/pexels-photo-1454405.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gilgit"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">Gilgit</h3>
            </div>
          </div>
        </Link>

        {/* Murree */}
        <Link href="/murree">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
            <img
              src="https://images.pexels.com/photos/1454409/pexels-photo-1454409.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Murree"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">Murree</h3>
            </div>
          </div>
        </Link>

        {/* Hunza */}
        <Link href="/hunza">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
            <img
              src="https://images.pexels.com/photos/26976007/pexels-photo-26976007/free-photo-of-a-view-of-a-valley-and-mountains-from-a-hill.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Hunza"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">Hunza</h3>
            </div>
          </div>
        </Link>

        {/* Swat */}
        <Link href="/swat">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
            <img
              src="https://images.pexels.com/photos/27965152/pexels-photo-27965152/free-photo-of-the-beauty-of-naltar-valley.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Swat"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">Swat</h3>
            </div>
          </div>
        </Link>

        {/* Skardu */}
        <Link href="/skardu">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
            <img
              src="https://images.pexels.com/photos/14822617/pexels-photo-14822617.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Skardu"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">Skardu</h3>
            </div>
          </div>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Places;
