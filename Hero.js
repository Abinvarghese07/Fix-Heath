import React from 'react';
import Image from '../assets/pexels-karolina-grabowska-4021775.jpg';
import group1 from '../assets/Group 701.png'
import {Link, animateScroll as scroll} from 'react-scroll';



const Hero = () => {
    return (
        <div name='home' className='mt-12 flex items-center  dark:bg-gray-700 flex-col md:flex-row '>
             <div className='font-poppins flex flex-col items-center md:items-start w-[900px] md:h-[500px] p-4 py-6 rounded-xl'>
                <h1 className='font-bold text-3xl md:text-6xl text-start md:font-medium  text-indigo-700 px-6'>Move Freely, Live Fully.</h1>
                <p className='font-semibold text-2xl md:text-4xl text-start md:font-medium text-indigo-700 py-5 px-6'>Your Wellness Journey Starts Here!</p>
                <div className='flex justify-start ml-[80px] md:justify-center'>
                        <li className='text-indigo-700 text-xl cursor-pointer'><Link  to="booking"  smooth={true}  offset={50}  duration={500} >
                <button className=' text-start bg-indigo-500 p-2 px-4 rounded-lg text-white font-medium md:mr-[80px] font-poppins'>Start your Recovery</button>

                        </Link></li> 


                </div>
                <img src={group1} alt='id' className='w-[600px] hidden md:flex '></img>
                <p ></p>
             </div>
            <div>
                 <img src={Image} alt='hero' className='w-[500px] h-[400px]  md:w-[700px] md:h-[500px] rounded-lg'></img>

            </div>
        </div>
    );
};

export default Hero;