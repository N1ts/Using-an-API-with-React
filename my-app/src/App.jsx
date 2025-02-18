import { useState, useEffect } from 'react'
import ProfileCard from './Components/ProfileCart.jsx';
import getPosts from './searchImages.js'
import './App.css'

function App() {
  
  const [showPosts, setShowPosts] = useState([]);
  
  useEffect(()=>{
    getPosts().then((posts)=> {
      setShowPosts(posts)
    })
  },[])
  

  const renderCard = showPosts.map((post, index)=>{
    return <ProfileCard title={post.title} body={post.body} key={index}/>
  })

  return (
    <>
      <div className='App'>
        <ProfileCard />
        {showPosts ? renderCard : "No data"}
      </div>
    </>
  )
}

export default App
