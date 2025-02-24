import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import { aboutInfo } from '@/Data/data';

const About = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
        {/* Section Heading */}
        <SectionHeading>About</SectionHeading>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
            {/* Text Content */}
            <div>
                <h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>{aboutInfo.title}</h1>
                <p className='mt-6 text-base text-gray-500'>{aboutInfo.description}</p>
            </div>
            {/* Stats Content */}
            <div className='grid grid-cols-2 gap-16 items-center lg:mx-auto'>
                <div>
                    <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.client}</p>
                    <p className='mt-3 font-bold text-xl text-white text-center'>Satisfied Customers</p>
                </div>
                <div>
                    <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.experience}</p>
                    <p className='mt-3 font-bold text-xl text-white text-center'>Years Experience</p>
                </div>
                <div>
                    <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.project}</p>
                    <p className='mt-3 font-bold text-xl text-white text-center'>Completed Project</p>
                </div>
                <div>
                    <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.website}</p>
                    <p className='mt-3 font-bold text-xl text-white text-center'>Website Launched</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;