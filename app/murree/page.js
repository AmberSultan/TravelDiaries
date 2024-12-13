"use client";

import React from 'react'
import cities from "/public/data/cities.json";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

function page() {
    const murreePlaces = cities.places.Murree;
  return (
<div className='ms-8 me-8'>

<h1 className='flex mt-8 mb-8 justify-center text-gray-800 text-2xl font-extrabold'>Murree : Queen of Hills</h1>

<p className='w-36/12 mb-4 font-thin text-sm text-current leading-relaxed text-justify '>
**Murree** is a scenic hill station nestled in the foothills of the Himalayas in northern Pakistan. Known for its lush green forests, charming valleys, and breathtaking mountain views, Murree is often referred to as the "City of Pines" due to its abundance of towering pine trees. A popular tourist destination, it offers a cool, refreshing climate and stunning landscapes that attract visitors year-round, particularly during the summer months when the heat of the plains makes it a perfect getaway. 

The town's picturesque streets, colonial-era architecture, and proximity to the beautiful hill resorts of Patriata, Nathiagali, and Ayubia make it a must-visit location for nature lovers and adventure enthusiasts alike. With its mix of natural beauty and cultural heritage, Murree is often celebrated as one of Pakistan’s most beloved hill stations.
</p>

<div className="mb-8 gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {murreePlaces.map((item, index) => (
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
