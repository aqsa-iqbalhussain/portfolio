import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-blue-100">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image 
              src="/potfolio/logo3.jpg" 
              alt="IT" 
              width={50} 
              height={50} 
            />
            <span className="ml-3 text-xl">Aqsa Iqbal</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Pakistan
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/aqsa-iqbal-2417162b7/"}
              className="text-gray-500"
            >
              <FaLinkedin className="text-2xl hover:text-[#4c00ff]" />
            </Link>
            <Link
              target="_blank"
              href={"https://github.com/aqsa-iqbalhussain?tab=repositories"}
              className="text-gray-500"
            >
              <FaGithub className="text-2xl hover:text-[#0c0a0a]" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.facebook.com/share/pz8GY1CcgHbRqg48/"}
              className="text-gray-500"
            >
              <FaFacebook className="text-2xl hover:text-[#4c00ff]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
