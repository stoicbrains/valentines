import React from 'react'
import Loader from './component/Loader'
import About from './component/About'
function page() {
  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <Loader/>
      <About/>
    </div>
  )
}

export default page
