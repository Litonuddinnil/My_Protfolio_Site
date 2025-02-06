const About = () => {
    return (
      <div id="about">
        <section className="mb-8">
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-lg mb-6">
            I'm a designer & developer with a passion for web design. I enjoy developing simple, clean, and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget while meeting client requirements is my goal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card bg-base-100 shadow-xl p-4">
              <p className="font-bold">Name:</p>
              <p>Md. Liton Uddin</p>
            </div>
            <div className="card bg-base-100 shadow-xl p-4">
              <p className="font-bold">Email:</p>
              <p>mdniloyhasan534@gmail.com</p>
            </div>
            <div className="card bg-base-100 shadow-xl p-4">
              <p className="font-bold">Date of Birth:</p>
              <p>20/11/2002</p>
            </div>
            <div className="card bg-base-100 shadow-xl p-4">
              <p className="font-bold">From:</p>
              <p>Natore</p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default About;
  