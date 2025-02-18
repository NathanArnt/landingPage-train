'use client'

import React from 'react'
import { ModeToggle } from './ui/theme-toggle'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between max-w-[80%] py-6 m-auto text-xl font-thin'>
        <Link href="/">AstroLook</Link>
        <ModeToggle/>
    </div>
  )
}

export default Navbar