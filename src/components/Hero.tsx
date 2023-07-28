import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id='home' className='pt-36'>
      <div className='container flex flex-wrap'>
        <div className='w-full lg:w-1/2 self-center px-4 text-white '>
          <h1 className='text-3xl font-semibold text-primary'>I’m Braiyen Massora. </h1>
          <h2 className='text-lg font-semibold text-primary mb-5'>Data Engineer dan Fluter Developer</h2>
          <p className='text-second text-sm text-medium mb-5 leading-relaxed'> Have experience working in Data Engineering and Technical Documentation to describe the functionalities and features of products in the software product development and engineering industry. Additionally, I am actively involved in my own projects on GitHub.</p>
          <a href='braiyenmassora@gmail.com' className='text-sm text-primary underline'>Get in touch → </a>
        </div>
        {/* image */}
        {/* <div className='w-full lg:w-1/2 self-end px-4'>
          <div className="mt-10">
            <Image src="/image.png" width={300} height={300} alt='itsmebraiyen' className='max-w-full mx-auto' />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
