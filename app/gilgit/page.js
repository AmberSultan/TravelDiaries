"use client";

import React from 'react'
import cities from "/public/data/cities.json";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

function page() {
    const gilgitPlaces = cities.places.Gilgit;
  return (
<div className='ms-8 me-8'>

<h1 className='flex mt-8 mb-8 justify-center text-gray-800 text-2xl font-extrabold'>Gilgit : The City of Majestic Mountains and Rich Heritage</h1>

<p className='w-36/12 mb-4 font-thin text-sm text-current leading-relaxed text-justify '>
Gilgit – The City of Majestic Mountains and Rich Heritage

Nestled in the heart of the breathtaking Gilgit-Baltistan region, Gilgit is a vibrant city surrounded by towering peaks, serene rivers, and lush green valleys. Often referred to as the "City of Majestic Mountains," it serves as the gateway to some of the world’s highest and most iconic peaks, including Nanga Parbat, K2, and Rakaposhi.

Gilgit is more than just a picturesque destination; it is a melting pot of cultures, with a rich history shaped by ancient trade routes, vibrant traditions, and a blend of diverse ethnic communities. This city not only boasts incredible natural beauty but also stands as a symbol of resilience, adventure, and the timeless connection between people and the mountains that surround them.

Known for its warm hospitality and rich cultural tapestry, Gilgit offers visitors an unforgettable experience of nature’s grandeur and the stories embedded in its landscape. Whether you're an adventure enthusiast, a history lover, or simply seeking tranquility, Gilgit promises an unparalleled journey into the heart of Pakistan’s mountainous north.</p>

<div className="mb-8 gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {gilgitPlaces.map((item, index) => (
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
