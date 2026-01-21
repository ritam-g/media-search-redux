import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='bg-(--c1) text-2xl p-4 text-center flex justify-between px-[2.3rem]'>
                <h2>Media Search</h2>
                <div className='flex gap-7'><Link className='bg-[var(--c3)] text-[var(--c2)] p-1 rounded ' to="/"> Search </Link>
                <Link className='bg-[var(--c3)] text-[var(--c2)] p-1 rounded ' to="/colleciton"> Your Collection </Link></div>
                
            </div>
  )
}

export default NavBar
