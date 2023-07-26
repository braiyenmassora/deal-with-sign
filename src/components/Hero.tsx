import React from 'react';

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-white body-font flex items-center h-screen" style={{ marginLeft: '170px' }}>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-start">
          <div className="md:w-1/2 md:pr-16">
            <h1 className="text-5xl font-bold text-white mb-10">
              Data Engineer & Flutter Developer.
            </h1>
            <p className="text-base font-normal text-white">
              Hi, itsmebraiyen, a passionate Data Engineer.
              <br />
              and Mobile Developer based in Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Crafted with Love Section */}
      <section className="text-white body-font overflow-hidden" style={{ marginLeft: '170px', marginRight: '170px' }}>
        <div className="container px-5 py-24 mx-auto">
          <div className="text-left mb-12">
            <h1 className="text-5xl font-bold text-white title-font">Crafted with love.</h1>
          </div>

          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="text-base font-normal text-white">streamlit-resume-blog</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-base font-normal text-white">Streamlit project that allows you to create a resume blog using Streamlit</h2>
                <p className="leading-relaxed">This is a Streamlit project that allows you to create a resume blog using Streamlit, a popular Python library for building interactive web applications.</p>
                <a href="#" className="inline-flex items-center mt-4 text-base font-normal text-white underline">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Add more content to the section if needed */}
        </div>
      </section>



    </div>
  );
};

export default Hero;
