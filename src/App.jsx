import React, { useEffect } from 'react'
import {fetchPhoto,fetchPexelsVideo,fetchGifs} from './api/mediaApi'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CollectionPage from './pages/CollectionPage';

function App() {
  useEffect(  ()=>{
    async function call() {
      console.log( await fetchPhoto(),await fetchPexelsVideo(),await fetchGifs());
    }
    //! call() testing api calls
    
  },[])

  return (
    <>
     <main className=' flex flex-col gap-3 min-h-screen w-screen  bg-black text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colleciton" element={<CollectionPage />} />
      </Routes>
      
      </main> 
    </>
  )
}

export default App
