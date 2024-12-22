"use client";
import React from 'react';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
 const Hero =()=>{
    return(
        
            <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      {`Hi I'm Aqsa Iqbal`}
        <br className="hidden lg:inline-block" />
       
        <Typewriter
  options={{
    strings: ["I'm a WEB DEVELOPER"],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      {/* <div className="w-[350px] h-[2px] bg-blue-700"></div> */}
      <p className="mb-8 leading-relaxed">
      I am Currently student of Benazir Bhutto Shaheed university 
      | Student of Governor Sindh Initiative Cloud Applied Generative AI.
      <br/>
      {`Enthusiastic and motivated student eagerly driving into the world of artificial intelligent through the Governor of Pakistan's Generative AI Initiative.
     Currently honing skills in Typescript and Python , I'm driven by a passion for leveraging technology to solve real-world problems. Excited to explore the intersections of AI , programming and innovation , I aspire to contribute meaningfully to the ever-evolving landscape of technology and make a positive impact in the world.
With a thirst for knowledge and a dedication to continuous learning . I am committed to pushing the boundaries of what's possible in the realm of AI and shaping a future where technology serves humanity in profound ways.`}
      </p>
      <div className="flex justify-center">

        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
  
      </div>
    </div>
  </div>
</section>

    
    )
 }
 export default Hero;