import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import myImage from "../../assets/Front-End Web.png";
import About from "../About/About";
import Skills from "../Skills/Skills";
import WhatIDo from "../WhatIDo/WhatIDo";
import { FaSquareXTwitter } from "react-icons/fa6";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

export default function Home() {
  return (
    <div id="home" className=" p-6 bg-base-100">
      {/* Hero Section */}
      <div className="hero bg-base-100 rounded-2xl shadow-md lg:h-[400px]">
        <div className="hero-content flex-col lg:flex-row gap-8">
          {/* Image */}
          <img
            src={myImage}
            alt="Front-End Developer"
            className="max-w-sm md:max-w-md rounded-lg shadow-2xl"
          />

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Hi, I'm Liton Uddin 👋</h1>
            <p className="py-6 text-lg">
              Frontend Developer passionate about Next.js, React.js, and building scalable, user-friendly applications.
            </p>
            {/* Call-to-Action Buttons */}
              <h1 className="text-black font-bold text-xl mb-3">Connected with me</h1>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://www.facebook.com/md.litonuddin.520"><button className="btn btn-outline text-blue-600"><FaFacebookSquare />Facebook</button></a>
              <a href="https://github.com/Litonuddinnil"><button className="btn btn-outline text-blue-600"><FaGithub /> Github</button></a>
              <a href="https://x.com/NiloyH80645"><button className="btn btn-outline text-blue-600"><FaSquareXTwitter /> Twitter</button></a>
         
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="my-12">
        <About />
      </div>
      {/* Skills Me Section */}
      <div className="my-12">
        <Skills></Skills>
        <WhatIDo></WhatIDo>
      </div>
      {/* projects show  */}
      <div className="my-12">
        <Projects></Projects>
      </div>
      {/* contact me section */}
      <div className="my-12">
        <Contact></Contact>
      </div>
    </div>
  );
}