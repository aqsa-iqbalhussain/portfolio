"use client"
import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <div id="about">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        {/* Correct image path */}
                        <Image
                            className="object-cover object-center rounded mx-auto"
                            alt="hero"
                            src="/potfolio/laptopstock.jpg"  // Correct path
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            About Me 
                            <br className="hidden lg:inline-block" />
                        </h1>
                        <p className="mb-5 leading-relaxed">
                            I am currently pursuing a Pharmacy (Pharm.D) degree, with a strong passion for healthcare and the pharmaceutical sciences. I completed my FSC from Bahria College, achieving an A+ grade. In addition to my academic achievements,
                            I am enrolled in the prestigious Governor Sindh Initiative on Cloud and Applied Generative AI. Through this program, I am exploring the integration of AI and cloud technologies in healthcare,
                            aiming to contribute to innovations in this field.
                            With a keen interest in learning and technology, I am always looking for ways to enhance my skills and apply them in practical, impactful ways. My goal is to combine my knowledge of pharmacy with cutting-edge technology
                            to make a positive difference in patient care and the healthcare industry.
                        </p>
                        <div className="flex justify-center">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
