import React, { useEffect, useState } from 'react'
import { fetchGifs, fetchPexelsVideo, fetchPhoto } from '../api/mediaApi'
import { useDispatch, useSelector } from 'react-redux'
import { setError, setLoading, setResults } from '../redux/features/searchSlice'
import ResultCard from './ResultCard'

function ResultGrid() {
  const dispatch = useDispatch()
  let { query,
    activeTab,
    results,
    loading,
    error } = useSelector((store) => store.search)

  useEffect(() => {
    //!["video","photos","GIF"]
    let data = []
    async function getData() {
      if (!query) {
        return
      }
      try {
        dispatch(setLoading())
        if (activeTab == 'photos') {
          let res = await fetchPhoto(query)
          //!data is gloabla of thiss funciton
          data = res.map((ele, id) => ({
            id: ele.id,
            src: ele.links.download,
            type: ele.asset_type,
            title: ele.alt_description,
            thumbnail: ele.urls.small,
            index: id
          }))
        }
        else if (activeTab == 'video') {
          let res = await fetchPexelsVideo(query)
          //!data is gloabla of thiss funciton
          data = res.map((ele, id) => ({
            id: ele.id,
            url: ele.video_files[0].link,
            type: "video",
            index: id,
            thumnail: ele.image,
            title: ele.user.name
          }))
        }
        else {
          let res = await fetchGifs(query);
          //!data is gloabla of thiss funciton
          data = res.map((ele) => ({
            id: ele.id,
            title: ele.title || "gif",
            thumbnail: `${query} awesome`,
            type: ele.type,
            src: ele.file?.hd?.gif?.url   // ✅ FIX HERE
          }));

        }
      } catch (err) {
        dispatch(setError(err.message))
      }
      dispatch(setResults(data))


    }
    getData()
  }, [query, activeTab])
  if (error) return <h1>error</h1>
  if (loading) return <h2>loading....</h2>
  return (
    <div className='w-full flex justify-evenly gap-5 flex-wrap overflow-x-hidden text-black'>
      {results.map((item, idx) => {
        return <ResultCard
        key={idx}
          item={item}
          onSave={(data) => console.log("Saved:", data)}
        />

      })}
    </div>
  )
}

export default ResultGrid
