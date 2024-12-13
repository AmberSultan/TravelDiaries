"use client";

import React from 'react'
import cities from "/public/data/cities.json";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

function page() {
    const hunzaPlaces = cities.places.Hunza;
  return (
<div className='ms-8 me-8'>

<h1 className='flex mt-8 mb-8 justify-center text-gray-800 text-2xl font-extrabold'>Hunza: The City of Eternal Beauty</h1>

<p className='w-36/12 mb-4 font-thin text-sm text-current leading-relaxed text-justify '>
Nestled in the majestic mountains of northern Pakistan, Hunza is often referred to as the "City of Eternal Beauty". Known for its breathtaking landscapes, pristine rivers, and towering peaks, Hunza is a hidden gem that captivates the hearts of all who visit. The valley, which lies between the towering Karakoram mountain range and the spectacular snow-capped peaks, is celebrated for its serene environment, vibrant culture, and the warm hospitality of its people.

Hunza is not just a place; it's a magical experience, where every corner tells a story of ancient history and natural wonder. With its lush terraced fields, charming villages like Karimabad, and iconic spots like Baltit Fort and Husseini Suspension Bridge, Hunza is a paradise for nature lovers, adventurers, and history enthusiasts alike. Whether you're gazing at the majestic peaks of Rakaposhi and Ultar Sar or wandering through the vibrant markets, Hunza is a reminder that beauty can be timeless.

A place where time seems to stand still, Hunza is often described as the "City of Peace and Tranquility", a refuge for those seeking solace in nature's embrace.

</p>

<div className="mb-8 gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {hunzaPlaces.map((item, index) => (
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
