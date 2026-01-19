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
             let res=await fetchPhoto(query)
             data=res
            console.log("photo");
            
            console.log(data);
        }
        else if(activeTab=='video'){
            let res=await fetchPexelsVideo(query)
            data=res
            console.log("video");
            console.log(data);
        }
        else{
             let res=await fetchGifs(query)
             data=res
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
