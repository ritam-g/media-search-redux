import React, { useEffect } from 'react'
import {fetchPhoto,fetchPexelsVideo} from './api/mediaApi'
function App() {
  useEffect(  ()=>{
    async function call() {
      console.log( await fetchPhoto(),await fetchPexelsVideo());
    }
    call()
    
    
    
  },[])

  return (
    <>
     <main className='w-screen h-screen bg-black text-white'>
      <h1
      
      >I am Ritam</h1>
      
      </main> 
    </>
  )
}

export default App
