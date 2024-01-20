import React from 'react';
import {BsPersonCheckFill} from 'react-icons/bs';
import {MdOutlineDateRange} from 'react-icons/md';
import {FaRegFaceSmileBeam} from 'react-icons/fa6';


const About = () => {
    return (
        <div name='about' className=' mt-9 py-[20px]'>
            <div className='font-poppins py-6'>
                <h1 className='text-3xl font-bold md:text-6xl md:font-medium '>Trusted by Thousands!</h1>
                <h2 className='text-4xl font-semibold md:text-5xl text-indigo-700 md:font-medium py-6'>250+ Conditions Treated</h2>
                <h2 className='text-3xl md:text-6xl text-indigo-700 font-semibold'>Heart warming patient stories</h2>
                <p className='text-2xl md:text-3xl py-6 font-medium text-indigo-400'>Tales of patients overcoming chronic pains and getting back to their normal lives</p>
            </div>
            <div className='flex flex-col md:flex-row mx-[100px] justify-center text-indigo-700 gap-[160px] p-3 bg-blue-200 md:mx-[300px] rounded-[20px] py-[30px]'>
                <div className='flex items-center flex-col font-poppins shadow-md shadow-blue-700 p-6 rounded-xl'>
                    <BsPersonCheckFill className='text-3xl'/>
                    <h1 className='text-lg font-semibold'>20000+</h1>
                    <p className='text-lg font-light'>Patients</p>
                </div>
                <div className='flex items-center flex-col font-poppins shadow-md shadow-blue-700 p-6 rounded-xl'>
                    <MdOutlineDateRange className='text-3xl'/>
                    <h1 className='text-lg font-semibold' >1 lakh +</h1>
                    <p className='text-lg font-light'>Sessions</p>
                </div>
                <div className='flex items-center flex-col font-poppins shadow-md shadow-blue-700 p-6 rounded-xl'>
                    <FaRegFaceSmileBeam className='text-3xl'/>
                    <h1 className='text-lg font-semibold'>9.6/10</h1>
                    <p lassName='text-lg font-light'>Avg. rating</p>
                </div>

            </div>
            
        </div>
    );
};

export default About;