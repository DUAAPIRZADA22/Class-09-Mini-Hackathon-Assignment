"use client";
import Link from 'next/link'
import React, { useState } from 'react';
import { Menu } from 'lucide-react'; 
import { Drawer } from './ui/drawer'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-sky-100 text-black px-8 py-4 fixed w-full z-10 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Duaa Pirzada</h1>
       
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/project">Project</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
       
        <button
          className="md:hidden flex items-center justify-center"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

     
      <Drawer isOpen={isOpen} onClose={toggleSidebar}>
        <ul className="space-y-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/project">Project</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </Drawer>
    </div>
  );
};

export default Navbar;


