"use client";

import React from 'react'
import cities from "/public/data/cities.json";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

function page() {
    const islamabadPlaces = cities.places.Islamabad;
  return (
<div className='ms-8 me-8'>

<h1 className='flex mt-8 mb-8 justify-center text-gray-800 text-2xl font-extrabold'>Islamabad : The Capital of Pkistan</h1>

<p className='w-36/12 mb-4 font-thin text-sm text-current leading-relaxed text-justify '>Islamabad, the capital of Pakistan, is often referred to as the **"City of Peace"** due to its serene atmosphere, lush greenery, and beautiful landscapes. Nestled at the foothills of the Margalla Hills, Islamabad offers a blend of modernity and nature, making it one of the most picturesque cities in the country. Known for its wide, tree-lined avenues, the city is a hub for government institutions, foreign embassies, and cultural landmarks.

Often described as the **"City of Gardens"**, Islamabad is also famous for its well-maintained parks and scenic viewpoints. Its peaceful surroundings, with a perfect balance of urban development and natural beauty, provide a peaceful escape from the hustle and bustle of other major cities in Pakistan.

Islamabad is a symbol of modern Pakistan, where culture, history, and progress converge. Whether you're visiting the iconic Faisal Mosque, exploring the Margalla Hills National Park, or enjoying a leisurely walk through Daman-e-Koh, Islamabad stands as a testament to tranquility and charm in the heart of Pakistan.</p>

<div className="mb-8 gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {islamabadPlaces.map((item, index) => (
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
