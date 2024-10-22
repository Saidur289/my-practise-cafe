import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)
  const handleAddToBookmarks = blog => {
    // console.log('clicked', blog);
    const newBlog = [...bookmarks, blog]
    setBookmarks(newBlog)
  }
  const handleReadingTime =(id, time) => {
    console.log('reading time', time);
    // let newTime = [readingTime + time]
    // console.log(typeof readingTime , typeof time);
    // console.log(time, id);
    setReadingTime(readingTime + time)
    const remaining = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remaining)
  }


  return (
    <>
      
      <Header></Header>
      <div className='md:flex justify-between max-w-7xl mx-auto mt-8'>
        <Blogs handleAddToBookmarks = {handleAddToBookmarks} handleReadingTime = {handleReadingTime}></Blogs>
        <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
     
     
    </>
  )
}

export default App
