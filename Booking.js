import React from 'react';
import {CgProfile} from 'react-icons/cg';
import {LuContact2} from 'react-icons/lu';
import Group2 from '../assets/Group 699.png'
// import Data from '../Data.json'
import { useState } from 'react';



const Booking = () => {

    const[booking,setBooking] = useState(false);
   
  
        

   

    return (
        <div name ='booking' className='mt-12 bg-blue-100  flex justify-center mx-[100px] md:mx-[480px] p-12 rounded-lg mb-6 shadow-md shadow-blue-700'>
            <div className='font-poppins'>
            <img src={Group2} alt='id' className='hidden md:flex absolute left-[90px]'></img>
                   
                {
                    booking ? <div className=''>
            
                  <h2 className='flex gap-1 text-3xl text-indigo-600 font-medium'>Help us understand you better</h2>
                <div className='flex items-center gap-3 border-b border-b-slate-300 p-2 px-3 py-5 justify-center mt-4'>
           
                    <input placeholder='Age' type='number' className='p-1  md:w-[360px] rounded-md'></input>
                </div>
                <div className='flex justify-center items-center p-2 py-3 px-3 gap-3 border-b border-b-slate-300 '>
                    <input placeholder='Occupation' type='text' className='p-1 md:w-[360px] rounded-md'></input>
                    
                </div>
                <div className='p-3'>
                    <textarea placeholder='please describe your problem' rows={1} cols={40} className='p-2 rounded-xl'></textarea>
                </div>
               
         
              
            </div>: <div className='w-full'>
                    <h2 className='text-xl  md:flex gap-1 md:text-3xl text-indigo-600 font-medium'>Book an Appointment for <h1 className='font-semibold text-black'> FREE</h1></h2>
                <p className='text-sm font-medium md:text-lg p-2 text-black'>60+ Expert Physiotherapists for 200+ Conditions</p>
                <div className='flex items-center gap-3 border-b border-b-slate-300 p-2 px-3 py-5 justify-center mt-4'>
                    <CgProfile className='text-2xl text-black'/>
                    <input placeholder='Your Name' type='name' className='p-1 md:w-[360px] rounded-md'></input>
                </div>
                <div className='flex justify-center items-center p-2 py-3 px-3 gap-3 border-b border-b-slate-300 '>
                    <LuContact2 className='text-2xl text-black'/>
                    <input placeholder='Phone Number' type='phone number' className='p-1 md:w-[360px] rounded-md'></input>
                    
                </div>
                </div> 

                }
                <div className='p-7'>
                    <button className ='bg-indigo-600 p-2 rounded-xl text-white' onClick={() => setBooking(!booking)}>Start Your Recovery</button>

                </div>
                 <img src={Group2} alt='id' className='hidden md:flex absolute right-[90px] top-[220vh]' ></img>
        
            </div>
          
        </div>
    );
};

export default Booking;