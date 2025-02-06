 
 import React from "react";
 import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
 
 export default function Footer() {
   return (
     <footer className="bg-gray-900 text-white py-12">
       <div className="container mx-auto px-6">
         {/* Footer Content */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* About Section */}
           <div className="space-y-4">
             <h3 className="text-xl font-bold">About Me</h3>
             <p className="text-gray-400">
               I'm a passionate developer who loves building web applications and solving real-world problems with code.
             </p>
           </div>
 
           {/* Quick Links */}
           <div className="space-y-4">
             <h3 className="text-xl font-bold">Quick Links</h3>
             <ul className="space-y-2">
               <li>
                 <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                   Home
                 </a>
               </li>
               <li>
                 <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                   Projects
                 </a>
               </li>
               <li>
                 <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                   About
                 </a>
               </li>
               <li>
                 <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                   Contact
                 </a>
               </li>
             </ul>
           </div>
 
           {/* Social Media Links */}
           <div className="space-y-4">
             <h3 className="text-xl font-bold">Connect With Me</h3>
             <div className="flex lg:ml-24 space-x-4">
               <a
                 href="https://github.com/Litonuddinnil"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors"
               >
                 <FaGithub size={24} />
               </a>
               <a
                 href="https://linkedin.com/in/yourusername"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors"
               >
                 <FaLinkedin size={24} />
               </a>
               <a
                 href="https://x.com/NiloyH80645"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors"
               >
                 <FaTwitter size={24} />
               </a>
               <a
                 href="#contact"
                 className="text-gray-400 hover:text-white transition-colors"
               >
                 <FaEnvelope size={24} />
               </a>
             </div>
           </div>
         </div>
 
         {/* Copyright Section */}
         <div className="border-t border-gray-800 mt-8 pt-8 text-center">
           <p className="text-gray-400">
             &copy; {new Date().getFullYear()} Liton Uddin. All rights reserved.
           </p>
         </div>
       </div>
     </footer>
   );
 }