import React from 'react';

const Hero = () => {
    return (
        <section className="text-black body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-9xl text-3xl mb-4 font-medium text-black">Data Engineer </h1>
                    <p className="text-left sm:text-2xl mt-10 text-black">
                        I am a systems thinker who enjoys the challenge of solving complex problems.
                        <br />
                        Experience working as a Data Engineer and Technical Documentation Engineer
                        <br />
                        to describe the functionalities and features of a product
                        <br />
                        for the software product development engineering.
                    </p>
                </div>
            </div>

        </section>

    );
}

export default Hero;


