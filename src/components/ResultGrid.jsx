import React, { useEffect, useState } from 'react'
import {fetchGifs,fetchPexelsVideo,fetchPhoto} from '../api/mediaApi'
import { useDispatch, useSelector } from 'react-redux'

function ResultGrid() {
   const dispatch= useDispatch()
   let {query,
        activeTab,
        results,
        loading,
        error} = useSelector((store)=>store.search)
   
    useEffect(() => {
        //!["video","photos","GIF"]
    let data
    async function getData() {
        if(activeTab=='photos'){
             data=await fetchPhoto(query)
            console.log("photo");
            
            console.log(data);
        }
        else if(activeTab=='video'){
            data=await fetchPexelsVideo(query)
            console.log("video");
            console.log(data);
        }
        else{
             data=await fetchGifs(query)
            console.log(data);
        }
    }
      getData()
    }, [query,activeTab])
    
  return (
    <div>

    </div>
  )
}

export default ResultGrid
