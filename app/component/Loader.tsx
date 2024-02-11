"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import img1 from '../Assets/bglove.gif'
import img2 from '../Assets/bgroll.gif'
import img3 from '../Assets/heart-glittery.gif'
import img4 from '../Assets/crying-sobbing.gif'
const Loader = () => {
  const [image,setImage] = useState(img1)
  const [display,setDisplay] = useState('0')
  console.log(image);
  const [text,setText] = useState({para:'Will You Be My valentines',icon:img3
  
})
console.log(display)
  return (
    <div className={`h-screen w-screen bg-[#ffafcc] absolute z-10 top-0 transition-all duration-[1s] delay-100 ease-in-out`} style={{left:`${display}px`}}>
      <div className='h-[300px] w-[300px] mx-auto flex flex-col justify-center items-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] sm:gap-[3rem] gap-[1rem] '><p className='flex gap-3 justify-center items-center sm:text-2xl text-lg w-[80vw] font-[1000] tracking-[0.3rem] transition-all duration-300 ease-in-out'>{text.para}<Image src={text.icon} alt='' height={100} width={100}/></p><Image src={image} alt='' objectFit='cover' className='shad'/><div className='flex justify-center gap-[5rem]'><button className='h-[40px] w-[120px] rounded-xl bg-red-600 text-white font-bold shadow-sm shadow-black hover:scale-[1.3] transition-all duration-300 ease-in-out' onClick={()=>{
        setDisplay('2000')
      }}>Yes</button><button className='h-[40px] w-[120px] rounded-xl bg-red-600 text-white font-bold shadow-sm shadow-black hover:scale-[1.3] transition-all duration-300 ease-in-out' onMouseOver={(e)=>{
        setImage(img2)
        setText({para:'No you cant turn me down',icon:img4})
      }} onMouseLeave={()=>{
        setImage(img1)
        setText(({para:'Will You Be My valentines',icon:img3
      })
        )
      }}>No</button></div></div>
    </div>
  )
}

export default Loader
