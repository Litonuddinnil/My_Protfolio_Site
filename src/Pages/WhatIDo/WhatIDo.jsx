import { FaCode, FaLaptopCode, FaMobileAlt, FaRocket } from "react-icons/fa";

const WhatIDo = () => {
    return (
         <section id="skills" className="py-12 bg-base-100">
             <div className="container mx-auto text-center">
               <h2 className="text-4xl font-bold mb-6">What I Do</h2>
               <p className="text-lg mb-10 max-w-3xl mx-auto">
                 I specialize in building **modern, responsive, and high-performance web applications** using cutting-edge technologies. My focus is on delivering a **seamless user experience** with clean and efficient code.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {/* Web Development */}
                 <div className="card bg-base-200 shadow-lg p-6">
                   <FaLaptopCode className="text-5xl text-primary mx-auto mb-4" />
                   <h3 className="text-xl font-bold mb-2">Web Development</h3>
                   <p>I build fast, responsive, and SEO-friendly websites using **React.js, Next.js, and Tailwind CSS**.</p>
                 </div>
       
                 {/* Frontend Development */}
                 <div className="card bg-base-200 shadow-lg p-6">
                   <FaCode className="text-5xl text-primary mx-auto mb-4" />
                   <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
                   <p>Creating **dynamic, interactive, and user-friendly interfaces** with React.js & JavaScript.</p>
                 </div>
       
                 {/* Mobile Responsive Design */}
                 <div className="card bg-base-200 shadow-lg p-6">
                   <FaMobileAlt className="text-5xl text-primary mx-auto mb-4" />
                   <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
                   <p>Ensuring smooth **mobile-friendly UI/UX** with flexible layouts & optimized performance.</p>
                 </div>
       
                 {/* Performance Optimization */}
                 <div className="card bg-base-200 shadow-lg p-6">
                   <FaRocket className="text-5xl text-primary mx-auto mb-4" />
                   <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
                   <p>Enhancing website speed and performance for a **seamless user experience**.</p>
                 </div>
               </div>
             </div>
           </section>
    );
};

export default WhatIDo;