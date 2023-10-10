import React from 'react'
import Login from '../../images/login.png'
import { Link } from 'react-router-dom'

export const Recover = () => {
  return (
    <div  id="loginBody" className='flex h-[100%] w-[100%] overflow-auto fixed justify-start items-center'>
        <div id="loginContainer" className=' sticky left-[5vw] z-10 mb-[10vh]'>
    <div id='Shadow' className='border border-customOrange h-[250px] w-[300px] flex justify-center items-center rounded-lg leading-8 bg-white'>
        <div className=''>
            <div className='font-bold font-inter text-xl opacity-70'>
                Forgot Password
            </div>
            <div className='Username font-inter '>
                <div className='opacity-70 text-sm mt-[15px] '>
                    Email
                </div>
                <input className='mt-[10px] h-[38px] w-[220px] border-[1px] opacity-70 text-sm border-black border-opacity-60 rounded-md outline-none pl-[6px]'>
                </input>
            </div>
            <div className='flex mt-[10px]'>
                <div>
                <svg className='fill-customOrange  relative mt-[6px] h-[18px] w-[20px] ' viewBox="0 0 24 24"><path d="M21 3V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H20C20.5523 2 21 2.44772 21 3ZM11.2929 13.1213L8.81802 10.6464L7.40381 12.0607L11.2929 15.9497L16.9497 10.2929L15.5355 8.87868L11.2929 13.1213Z"></path></svg>
                </div>
                <div className='ml-1 text-[12px] opacity-70 font-inter'>Keep me signed in</div>
            </div>
            <button className=' mt-[10px] px-[89px] py-[10px] text-sm bg-customOrange text-white font-inter font-bold rounded-lg '>
                Verify
            </button>

        </div>
      
    </div>
    </div>
    <img id="backImageLogin" className=" ml-[10vw] flex justify-end relative h-[100vh] w-[80vw] object-cover" src={Login} alt=""/>
    </div>
  )
}

