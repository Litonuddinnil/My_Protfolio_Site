import { DiMongodb } from "react-icons/di";
import { FaNode, FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-base-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">My Skills</h2>
        <p className="text-lg mb-10 max-w-3xl mx-auto">
        
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Web Development */}
          <div className="card bg-base-200 shadow-lg p-6">
            <FaReact  className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">React</h3>
 
          </div>

          {/* Frontend Development */}
          <div className="card bg-base-200 shadow-lg p-6">
            <DiMongodb className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">MongoDb</h3>
           
          </div>

          {/* Mobile Responsive Design */}
          <div className="card bg-base-200 shadow-lg p-6">
            <SiExpress className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Express.js</h3>
           
          </div>

          {/* Performance Optimization */}
          <div className="card bg-base-200 shadow-lg p-6">
            <FaNode className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Node.js</h3>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
