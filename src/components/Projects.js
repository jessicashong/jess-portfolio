import React from 'react';
import Bexar from '../assets/bexarmarket.jpg';
import Onlyflix from '../assets/onlyflix.png';
import Yougoal from '../assets/yougoalgirl.png';
import Weather from '../assets/whats-the-weather.png';
import SocialNetworkAPI from '../assets/team-profile-generator.png';
import Scheduler from '../assets/work-day-scheduler.png';


const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#C1FF72]'>Projects</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

        {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* grid item */}
            <div style={{ backgroundImage: `url(${Yougoal})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            MERN Stack Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://clj-yougoalgirl.herokuapp.com/' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/chloeeh/you-goal-girl' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${Bexar})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://bexar-market.herokuapp.com/' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/jessicashong/bexar-market' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${Yougoal})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            MERN Stack Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://clj-yougoalgirl.herokuapp.com/' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/chloeeh/you-goal-girl' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${Onlyflix})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            JavaScript, Tailwind Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://rosalvamartinez.github.io/OnlyFlix/' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/RosalvaMartinez/OnlyFlix' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${Weather})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Server Side API
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://jessicashong.github.io/whats-the-weather/' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/jessicashong/whats-the-weather' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${SocialNetworkAPI})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            MongoDB Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://drive.google.com/file/d/1e7rat6IPkChN_1BneUrbQ3UYjO5Iqf1t/view' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/jessicashong/social-network-api' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${Scheduler})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            jQuery Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://bexar-market.herokuapp.com/' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/jessicashong/bexar-market' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
  )
}

export default Projects