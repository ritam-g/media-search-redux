import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

function Tabs() {
    const tabs=["video","photos","GIF"]
   const dispatch= useDispatch()
   let activeTab=useSelector((state)=>state.search.activeTab)
  return (
    <div className='tabs flex gap-8 p-2'>
      {
        tabs.map((ele,id)=>{
          return (
            <button
                className={`${ele==activeTab?'bg-blue-500':'bg-gray-500'}  p-2 rounded uppercase active:scale-95 cursor-pointer transition`}
                key={id}
                onClick={()=>dispatch(setActiveTab(ele))}
                >{ele}
             </button>
          )
        })
      }
    </div>
  )
}

export default Tabs
