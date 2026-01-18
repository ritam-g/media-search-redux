import React, { useEffect } from 'react'
import {fetchPhoto,fetchPexelsVideo,fetchGifs} from './api/mediaApi'
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import ResultGrid from './components/ResultGrid';
function App() {
  useEffect(  ()=>{
    async function call() {
      console.log( await fetchPhoto(),await fetchPexelsVideo(),await fetchGifs());
    }
    // call()
    
  },[])

  return (
    <>
     <main className='w-screen h-screen bg-black text-white'>
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
      </main> 
    </>
  )
}

export default App
