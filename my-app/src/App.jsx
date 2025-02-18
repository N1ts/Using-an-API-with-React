import { useState, useEffect } from 'react'
import ProfileCard from './Components/ProfileCart.jsx';
import {getPosts, getUsers}  from './searchImages.js'
import UserCard from './Components/UserCard.jsx';
import './App.css'

function App() {
  
  const [showPosts, setShowPosts] = useState([]);
  const [showUsers, setShowUsers] = useState([]);

  const handleClick = ()=>{
    getUsers().then((users)=> {
          // console.log(users.results)
    setShowUsers(users.results)
  })
  }
  
  useEffect(()=>{
    getPosts().then((posts)=> {
      // console.log(posts)
      setShowPosts(posts)
    })
  },[])

  useEffect(()=>{
    getUsers().then((users)=> {
      // console.log(users.results)
      setShowUsers(users.results)
    })
  },[])
  

  const renderUserCard = showUsers.map((user, index)=> {
     return <UserCard firstName={user.name.first}
     lastName={user.name.last}
     email={user.email}
     image={user.picture.medium}
     key={index}
     />
    })

  const renderProfileCard = showPosts.map((post, index)=>{
    return <ProfileCard title={post.title} body={post.body} key={index}/>
  })

  return (
    <>
      <div className='App'>
      {renderUserCard}
      <div className='btn'>
      <button onClick={handleClick}>Refresh</button>
      </div>
      {showPosts ? renderProfileCard : "No data"}
        
      </div>
    </>
  )
}

export default App
