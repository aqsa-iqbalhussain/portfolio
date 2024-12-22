
import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div id='project'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      <p className='text-xl'>Explore my projects crafted with HTML, CSS, and Next.js, showcasing a blend of clean design and responsive functionality</p>
      
    </div>
    <div className="flex flex-wrap -m-8">
        {/* project */}
      <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/potfolio/resume1.PNG"
            width={1000}
            height={1000}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Static Interactive Resume
            </h2>
            
            <p className="leading-relaxed">
            I created a static interactive resume to showcase my skills, experience, and achievements in an engaging and
             user-friendly format. By combining clean design with interactive elements, this resume offers a modern, 
             responsive way to present my professional background.


            </p>
          </div>
        </div>
      </div>
      {/* poject */}
      <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/potfolio/web.PNG"
            width={1000}
            height={1000}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Website
            </h2>
            
            <p className="leading-relaxed">
            I have built a fully responsive, pixel-perfect website using Next.js with the App Router,
             Tailwind CSS, and custom CSS. The website is designed to provide an optimal user experience across all devices,
              ensuring seamless performance and visually precise layouts. 




            </p>
            {/* <Link href={"hackathon-milestone-r77cxv9qp-aqsa-iqbalhussains-projects.vercel.app"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
                View Project
            </p>
            </Link> */}
          </div>
        </div>
      </div>
      {/* project */}
      <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/potfolio/dynamic.PNG"
            width={1000}
            height={1000}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Dynamic Resume Builder
            </h2>
            
            <p className="leading-relaxed">
            I have developed a dynamic resume builder that allows users to easily create and customize their resumes in real-time. With an intuitive interface and flexible design options,
             users can input their information, choose from various templates, and instantly see their resume updates.




            </p>
            {/* <Link href={"hackathon-milestone-r77cxv9qp-aqsa-iqbalhussains-projects.vercel.app"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
                View Project
            </p>
            </Link> */}
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>

    </div>
  )
}

export default Project