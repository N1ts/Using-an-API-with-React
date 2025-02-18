import { useState, useEffect } from 'react'
import SearchBar from './Components/SearchBar.jsx'
import getPosts from './searchImages.js'
import './App.css'

function App() {

  useEffect(()=>{
    getPosts().then((posts)=> {
      console.log(posts)
    })
  },[])
  

  return (
    <>
      <div className='App'>
        <SearchBar />
      </div>
    </>
  )
}

export default App
