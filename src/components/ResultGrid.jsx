import React, { useState } from 'react'
import {fetchGifs,fetchPexelsVideo,fetchPhoto} from '../api/mediaApi'
import { useDispatch, useSelector } from 'react-redux'

function ResultGrid() {
   const dispatch= useDispatch()
   let {query,
        activeTab,
        results,
        loading,
        error} = useSelector((store)=>store.search)
   //["video","photos","GIF"]
    async function getData() {
        if(activeTab=='photos'){
            let data=await fetchPhoto("love")
            console.log(data);
        }
        else if(activeTab=='video'){
            let data=await fetchPexelsVideo()
            console.log(data);
            
            
        }
        else{
            let data=await fetchGifs()
            console.log(data);
            
            
        }
    }
  return (
    <button
    onClick={()=>{
        getData()
    }}
    className='p-2 bg-green-500 text-2xl'
    >click</button>
  )
}

export default ResultGrid
