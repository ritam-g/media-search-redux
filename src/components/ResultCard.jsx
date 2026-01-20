import React from 'react'

function ResultCard({item}) {
  return (
    <div className='w-[17vw] h-[20vw] bg-white rounded'>
        {item.type=='photo'?<img className='h-full w-full object-cover ' src={item.src} alt="" />:""}
        {item.type=='video'?<video
  src={item.url}
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover"
/>
:""}
        {item.title=="gif"? <img className='h-full w-full object-cover ' src={item.src} alt=" " /> :""}
      {/* <h1>{item.title}</h1> */}
    </div>
  )
}

export default ResultCard
