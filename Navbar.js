import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoCloseCircleOutline} from 'react-icons/io5';
import { Link, animateScroll as scroll} from 'react-scroll';

const Navbar = () => {

    const [theme,setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")

    const handleToggle =(e)=> {
        if(e.target.checked){
            setTheme("dark");
        } else {
            setTheme("light")
        }



    }
        const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    

    useEffect(() => {
            localStorage.setItem("theme",theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme",localTheme)

    },[theme])


    return (
        <div className='' >
            <nav className=' font-poppins flex justify-around p-5 '>
             
                 <h1 className='text-3xl text-indigo-700 font-semibold'>Fix Health.</h1>
                <ul className=' hidden md:flex  gap-9 font-medium items-center '>
                    <label className="swap swap-rotate">
                        
                        <input type="checkbox" onChange={handleToggle} />
                        
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                        
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                        
                        </label>


                        <li className='text-indigo-700 text-xl cursor-pointer hover:text-cyan-600'><Link  to="home"  smooth={true}  offset={50}  duration={500} >Home</Link></li> 
                        <li className='text-indigo-700 text-xl cursor-pointer hover:text-cyan-600'><Link  to="about"  smooth={true}  offset={50}  duration={500} >About</Link></li> 

                        <li><Link  to="booking"  smooth={true}  offset={50}  duration={500} ><button className='bg-indigo-500 text-white p-2 rounded-lg'>Book Now</button></Link></li> 

                </ul>
                <div className='md:hidden text-indigo-700 text-3xl flex items-center' onClick={toggleNav}>
                {!isOpen ? <GiHamburgerMenu/> : <IoCloseCircleOutline/> }
                </div>
               
            </nav>

             <ul className={!isOpen ? 'hidden' : ' bg-slate-300 w-full rounded-2xl  p-8 text-2xl  font-body text-center '} >

                        <label className="swap swap-rotate  p-4">
                        
                        <input type="checkbox" onChange={handleToggle} />
                        
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                        
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                        
                        </label>
                      <li className='text-indigo-700 text-xl cursor-pointer hover:text-cyan-600 p-4 border-b border-slate-400 font-bold'><Link  to="home"  smooth={true}  offset={50}  duration={500} >Home</Link></li> 
                      <li className='text-indigo-700 text-xl cursor-pointer hover:text-cyan-600 p-4 border-b border-slate-400 font-bold'><Link  to="about"  smooth={true}  offset={50}  duration={500} >About</Link></li> 

                    <li><Link  to="booking"  smooth={true}  offset={50}  duration={500} ><button className='bg-indigo-500 text-white p-2 rounded-lg border-b mt-9 border-slate-400 font-bold'>Book Now</button></Link></li> 


                 
                    
             </ul>
        </div>
    );
};

export default Navbar;