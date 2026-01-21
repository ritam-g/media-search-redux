import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

function Home() {
    let { query } = useSelector((store) => store.search)
    return (
        <div className='Home'>
            <NavBar/>
            <SearchBar />
            {query !== "" ? (<div><Tabs /><ResultGrid /></div>) :""}

        </div>
    )
}

export default Home
