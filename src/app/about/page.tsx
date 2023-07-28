import React from 'react';

const About = () => {
    return (
        <section id='about' className='pt-36 pb-32'>
            <div className='container'>
                <div className='flex-wrap'>
                    <div className='w-full px-4 mb-5'>
                        <h4 className='text-3xl font-semibold text-primary'>
                            About me.</h4>
                    </div>
                    <div className='job-info w-full px-4 bg-white rounded-lg p-4 '>
                        <h3 className='text-lg font-semibold text-primary'>Data Engineer</h3>
                        <h3 className='font-medium text-second mb-3 text-base'>CODEX powered by Telkom Indonesia</h3>
                        <p className='text-second text-sm text-medium mb-5 leading-relaxed'>
                            As a Data Engineer, my job is to manage and optimize data efficiently. I organize and structure data consistently using Data Standardization. I monitor data flow and address any issues with Monitoring and Logging techniques. I establish smooth Data Pipeline Processes to ensure data moves seamlessly from source to destination. I also work with teams to achieve common data-related goals and create a productive work environment.
                        </p>
                    </div>
                    <div className='job-info w-full px-4 mb-5 bg-white rounded-lg p-4 '>
                        <h3 className='text-lg font-semibold text-primary'>Software Documentation Engineer</h3>
                        <h3 className='font-medium text-second mb-3 text-base'>Telkom Indonesia</h3>
                        <p className='text-second text-sm text-medium mb-5 leading-relaxed'>
                            As a Software Documentation Engineer, my primary role involves creating and updating documentation for software and products. I collaborate with diverse teams and utilize scripting to write about APIs and produce mockups. I am proficient in using a variety of documentation tools, and I provide valuable data models, diagrams, and workflows to assist the technical team in their work.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;
