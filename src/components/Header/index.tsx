import Image from 'next/image'
import React from 'react'
import poweredImage from '@/assets/powered.png'

const Header = () => {
  return (
   <header className='w-full'>
        <div className='max-w-[768px] mx-auto my-10 py-0 px-5 md:max-w-[900px]'>
            <Image 
            src={poweredImage} 
            width={150} 
          
            alt='logo'
            />
        </div>
   </header>
  )
}

export default Header