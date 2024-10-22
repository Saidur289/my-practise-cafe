import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddToBookmarks, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className='w-2/3'> 
            <h1>Blogs Available: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}
                    handleAddToBookmarks = {handleAddToBookmarks}
                    handleReadingTime = {handleReadingTime}></Blog>)
            }
        </div>
    );
};

export default Blogs;