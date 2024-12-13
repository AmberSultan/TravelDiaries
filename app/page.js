import Image from "next/image";

import Hero from "/components/Hero";
import Second from "/components/Second";
import Places from "/components/Places";
import Carousel from '/components/Carousel'
import ContactUs from "/components/ContactUs";
import Footer from "/components/Footer"

export default function Home() {
  return (

    <main>
      <Hero/>
      <Second/>
      <Places/>
      <Carousel/>
      <ContactUs/>
      <Footer/>
    </main>

   );

}
