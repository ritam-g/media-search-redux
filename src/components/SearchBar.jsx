import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

function SearchBar() {
    const [search, setSearch] = useState('')
    const dispatch=useDispatch()
    function submitHandaler(params) {
        // console.log("helow");
        params.preventDefault()
        dispatch(setQuery(search))
        setSearch('')
    }
  return (
    <div className='SearchBar'>
      <form 
      onSubmit={submitHandaler}
      className='flex p-4 gap-3 
      bg-[var(--c2)]

      '
      >
        <input
        onChange={(e)=>{setSearch(e.target.value)}}
        value={search}
        className='border-amber-100 border-2  text-xl rounded p-2 outline-none w-full'
         type="text" name="" id="" placeholder='Serach ...' 

         />
        <button
        className='border-amber-100 border-2  text-xl rounded p-2 outline-none cursor-pointer active:scale-95' 
        >Search</button>
      </form>
    </div>
  )
}

export default SearchBar
