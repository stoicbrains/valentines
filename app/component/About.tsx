"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import img1 from '../Assets/love.jpg'
import img3 from '../Assets/back2.jpg'
import img4 from '../Assets/back3.jpg'
import img5 from '../Assets/back4.jpg'
import img6 from '../Assets/img5.jpg'
import { animate, easeInOut, useAnimation,useInView } from 'framer-motion'
import { useState } from 'react'
import { useEffect } from 'react'
import {motion} from 'framer-motion'
import backgrnd from '../Assets/pngwing.com.png'
import rose from '../Assets/rose.gif'
const About = () => {
   const [trigger,setTrigger]=useState(false);
   const [size,SetSize]=useState(false)
    const ref = useRef(null);
    const inView = useInView(ref,{once:true})
    const control = useAnimation();

    useEffect(()=>{
        if(inView){
            control.start("visible")
            console.log("is in view")
        }
    },[inView])
  return (
    <div ref={ref} className='bg-[#ffc8dd] h-screen w-screen absolute top-0 left-0 overflow-y-hidden overflow-x-hidden'>
        <Image src={backgrnd} alt='' objectFit='cover' style={{height:'100%',width:'100%',position:'absolute',zIndex:'0',top:0,left:0}}/>
        <h1 className='text-4xl text-center sm:translate-y-[20px] translate-y-[50px] font-semibold'>Hey Cutie i know i cant physically be there with you but a, <span className='text-5xl font-bold text-red-600'>H</span>appy <span className='text-5xl font-bold text-red-600'>V</span>alentines <span className='text-5xl font-bold text-red-600'>D</span>ay</h1>
      <motion.div className="bg-[#a23554] rounded-[21px] sm:w-[70%] h-[30%] grid grid-cols-[30%_30%_30%] sm:h-[80%] grid-rows-[50%_50%] justify-center items-center sm:gap-[20px] gap-[10px] absolute left-[50%] top-[50%] overflow-y-auto" variants={{hidden:{opacity:0,translateY:0,translateX:"-50%"},visible:{opacity:1,translateY:"-40%",translateX:'-50%'}}} initial='hidden' animate={control} transition={{delay:0.3,duration:0.65,ease:'easeInOut'}}>
        <div className='sm:h-[40vh] sm:w-[20vw] h-[100px] w-[100px] bg-red-600 overflow-hidden rounded-[10%]'><Image src={img1} alt='' style={{height:'100%', width:'100%',objectFit:'cover', objectPosition:'top'}}/></div>
        <div className='sm:h-[40vh] sm:w-[17vw] h-[100px] w-[100px] bg-red-600 overflow-hidden rounded-[10%] rotate-[-90deg]'><Image src={img3} alt='' style={{height:'100%', width:'100%',objectFit:'cover'}}/></div>
        <div className='sm:h-[40vh] sm:w-[20vw] h-[100px] w-[100px] bg-red-600 overflow-hidden rounded-[10%]'><Image src={img4} alt='' style={{height:'100%', width:'100%',objectFit:'cover'}}/></div>
        <div className='sm:h-[40vh] sm:w-[20vw] h-[100px] w-[100px] bg-red-600 overflow-hidden rounded-[10%]'><Image src={img5} alt='' style={{height:'100%', width:'100%',objectFit:'cover' ,objectPosition:'top'}}/></div>
        <div className='sm:h-[40vh] sm:w-[20vw] h-[100px] w-[100px] bg-red-600 overflow-hidden rounded-[10%]'><Image src={img6} alt='' style={{height:'100%', width:'100%',objectFit:'cover'}}/></div>
      </motion.div>
      <button onClick={()=>{
         setTrigger(true)
      }} className='sm:h-[70px] sm:w-[120px] h-[30px] w-[50px] rounded-xl bg-pink-500 absolute left-[65%] top-[60%] sm:text-lg text-sm'>Click Here</button>
      <motion.div transition={{delay:0.3,duration:0.7,ease:'easeOut'}} className={`h-screen w-screen absolute z-[1] [backdrop-filter:blur(3px)] bg-transparent top-0 left-0 overflow-y-hidden`} animate={trigger?{y:0}:{y:1000}}>
        <div className={`absolute z-[5] ${size?'left-[40%]':'left-[50%]'} sm:top-[60%] ${size?'top-[51%]':'top-[61%]'} translate-y-[-50%] transition-all duration-1000 ease-out ${size?'sm:h-[40rem]':'sm:h-[10rem]'} ${size?'sm:w-[40rem]':'sm:w-[10rem]'} ${size?'':'h-[5rem]'} ${size?'':'w-[5rem]'}`}>
          <Image src={rose} alt='' objectFit='cover' height={size?300:200} width={size?300:200}/>
        </div>
        <div  className={`sm:h-[60vh] sm:w-[35vw] h-[40vh] w-[90vw] rounded-[17px] bg-white z-[2] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`}><p className='sm:text-xl text-sm font-semibold text-gray-950 p-[20px]'>Dear,Love im so fucking obsessed with you that there is no end to my obsession,you are fucking gorgeous and above all you are mine ,you are elegant and you shine differently ,you are the only girl who is close to being perfect,i really love you girl im high over heels for you ,i really want to spend the rest of my life with you ,please stay mine forever ,you are my very sacred treasure <span className='text-red-600'>I LOVE YOU SWATU</span></p><button className='text-gray-950 text-xl relative left-[25%] sm:top-[5%]' onClick={()=>{
          
          SetSize(true)
          
          setTimeout(() => {
            setTrigger(false)
            SetSize(false)
          }, 1000);
        }}>Rose for you</button></div>
      </motion.div>
    </div>
  )
}

export default About
