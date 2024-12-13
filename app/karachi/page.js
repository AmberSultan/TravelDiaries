"use client";

import React from 'react'
import cities from "/public/data/cities.json";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

function page() {
    const karachiPlaces = cities.places.Karachi;
  return (
<div className='ms-8 me-8'>

<h1 className='flex mt-8 mb-8 justify-center text-gray-800 text-2xl font-extrabold'>Karachi: The City of Lights</h1>
<p className='w-36/12 mb-4 font-thin text-sm text-current leading-relaxed text-justify '>Karachi, often referred to as the <span className='font-bold text-red-700'>City of Lights</span> is the vibrant economic and cultural heart of Pakistan. A sprawling metropolis located along the Arabian Sea, it is a melting pot of diverse cultures, languages, and traditions. Known for its bustling ports, Karachi stands as the country's financial hub, contributing significantly to Pakistan's economy.

The city is a captivating blend of modernity and history, with towering skyscrapers and a rich colonial heritage. From the iconic Quaid's Mausoleum, which honors the founder of Pakistan, to the lively streets of Clifton and Khayaban-e-Ittehad, Karachi never fails to amaze with its energy and charm. Whether it's the stunning Manora Island, the scenic Hawksbay Beach, or the majestic Frere Hall, Karachi offers something for every explorer, making it one of the most dynamic and diverse cities in South Asia.

Karachi’s rich cultural diversity, historical landmarks, and vibrant nightlife make it a city full of stories and opportunities—truly deserving of its title as the City of Lights.</p>


<div className="mb-8 gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {karachiPlaces.map((item, index) => (
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
