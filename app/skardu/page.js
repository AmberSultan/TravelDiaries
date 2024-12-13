"use client";

import React from 'react'
import cities from "/public/data/cities.json";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

function page() {
    const skarduPlaces = cities.places.Skardu;
  return (
<div className='ms-8 me-8'>

<h1 className='flex mt-8 mb-8 justify-center text-gray-800 text-2xl font-extrabold'>Skardu : City of Mountains</h1>

<p className='w-36/12 mb-4 font-thin text-sm text-current leading-relaxed text-justify '>
Skardu is known as the "City of Mountains" due to its stunning landscapes and proximity to some of the highest peaks in the world, including K2. It is also referred to as the "Gateway to the Himalayas" because it serves as a base for trekkers heading towards some famous trekking routes.
</p>

<div className="mb-8 gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {skarduPlaces.map((item, index) => (
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
