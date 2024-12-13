"use client";

import React from 'react'
import cities from "/public/data/cities.json";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

function page() {
    const lahorePlaces = cities.places.Lahore;
  return (
<div className='ms-8 me-8'>

<h1 className='flex mt-8 mb-8 justify-center text-gray-800 text-2xl font-extrabold'>Lahore : The City of Gardens</h1>

<p className='w-36/12 mb-4 font-thin text-sm text-current leading-relaxed text-justify '>Lahore, also known as the City of Gardens and The Heart of Pakistan, is a vibrant, historic, and culturally rich metropolis that pulses with life. Steeped in centuries of history, Lahore is renowned for its iconic landmarks, including the majestic Badshahi Mosque, the grand Lahore Fort, and the stunning Shalimar Gardens. A blend of Mughal, Sikh, and British colonial influences, Lahore boasts a unique architectural beauty, with bustling bazaars, vibrant streets, and a culinary scene that is second to none.

Often referred to as <span className='font-bold text-red-700'>"The Cultural Capital"</span> of Pakistan, Lahore is home to a thriving arts, music, and theater scene, making it a hub for creativity and tradition. The city's spirit is reflected in its warm, welcoming people, who take pride in their heritage while embracing the future. From the lively markets of Anarkali and Liberty to the peaceful serenity of the Lahore Zoo and Racecourse Park, Lahore offers a perfect balance of old-world charm and modern-day energy.

Whether you're savoring the famous Lahore street food, exploring the rich history at its museums, or enjoying a sunset by the Ravi River, Lahore is a city that captures the imagination and stays in the heart forever.</p>

<div className="mb-8 gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {lahorePlaces.map((item, index) => (
    <Card
      shadow="sm"
      key={index}
      isPressable
      onPress={() => console.log(`${item.name} pressed`)}
      className="border rounded-lg border-gray-300 flex flex-col" // Use flex column to stack content vertically
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={item.name}
          className="w-full object-cover h-[140px]"
          src={item.image}
        />
      </CardBody>
      <CardFooter className="text-small justify-between p-2 flex flex-col items-center">
        <div className="text-center">
          <b>{item.name}</b>
        </div>
        <div className="text-center text-sm text-default-500">
          {item.description}
        </div>
      </CardFooter>
    </Card>
  ))}
</div>






    </div>
  )
}

export default page
