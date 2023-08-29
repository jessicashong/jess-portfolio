import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#e2f0f9]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#df4c73]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#24305e]'>Jessica Hong</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#286fb4]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#286fb4] py-4 max-w-[700px]'>I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I am focused on building responsive full-stack web applications.</p>

            <div>
                <button className='text-[#374785] group border-2 border-[#374785] px-6 py-3 my-2 flex items-center hover:bg-[#e2f0f9] hover:border-[#24305e] hover:text-[#24305e]'>
                <Link to="projects" smooth={true} duration={500}>
                View Work
                </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 ' />
                    </span>
                </button>
            </div>
        </div>


    </div>
  )
}

export default Home