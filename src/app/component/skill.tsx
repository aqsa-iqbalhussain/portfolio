import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
const Skill = () => {
  return (
    <div id='skills'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20"
    >
    
      <h2 className="text-semibold text-3xl font-medium title-font mb-4 text-gray-900">
        My Skills
      </h2>
      <h1 className=" text-xl  title-font text-gray-900">
      Explore my skill set, showcasing expertise in front-end technologies and a keen ability to bring ideas to life through clean and functional design.
      </h1>
    </div>

    {/* skill */}
    <div className="flex flex-wrap -m-4">
  <div className="p-4 md:w-1/3 w-full">
    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
          <FaHtml5 />
        </div>
        <h2 className="text-gray-900 text-lg title-font font-medium">
          HTML & CSS
        </h2>
      </div>
      <div className="flex-grow">
        <p className="leading-relaxed text-base">
          Proficient in HTML and CSS, with a solid understanding of foundational concepts and best practices. 
          I create well-structured, clean code and design layouts that enhance user experience and responsiveness across devices.
        </p>
      </div>
    </div>
  </div>

  <div className="p-4 md:w-1/3 w-full">
    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
          <SiTypescript />
        </div>
        <h2 className="text-gray-900 text-lg title-font font-medium">
          TYPESCRIPT
        </h2>
      </div>
      <div className="flex-grow">
        <p className="leading-relaxed text-base">
          Skilled in TypeScript with a deep understanding of its core concepts, allowing me to write clean, scalable, 
          and type-safe code that enhances project maintainability and reduces errors.
        </p>
      </div>
    </div>
  </div>

  <div className="p-4 md:w-1/3 w-full">
    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
          <RiNextjsFill />
        </div>
        <h2 className="text-gray-900 text-lg title-font font-medium">
          NEXT.JS
        </h2>
      </div>
      <div className="flex-grow">
        <p className="leading-relaxed text-base">
          Proficient in Next.js with a solid grasp of its core concepts, enabling me to build efficient, scalable web applications 
          with optimized performance and seamless server-side rendering.
        </p>
      </div>
    </div>
  </div>
</div>
</div>
</section>

    </div>
  )
}

export default Skill