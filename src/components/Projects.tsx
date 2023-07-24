import React from 'react';

const Projects = () => {
  return (
    <section className="text-white body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 md:w-1/2 w-5/6 md:pr-10 flex items-center justify-center">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
        
        {/* Text Section */}
        <div className="lg:w-1/2 md:w-1/2 md:pl-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Bus Ticketing Apps
          </h1>
          <p className="mb-8 leading-relaxed">
            Laboris ad minim excepteur aute aliqua proident velit laboris qui. Exercitation eiusmod aute dolor eiusmod culpa laborum. Ad velit exercitation irure ea occaecat consectetur proident cupidatat officia incididunt id.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
