import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types'

const Blog = ({blog, handleAddToBookmarks, handleReadingTime}) => {
    // console.log(blog);
    const {id, cover, title, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mt-20 space-y-4'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                 <img className='w-14 mt-4' src={author_img} alt="" />
                 <div>
                    <p className='text-3xl font-bold'>{author}</p>
                    <p>{posted_date}</p>
                 </div>
                

                </div>
                
                <div className='flex items-center'> 
                <span className='text-2xl'>{reading_time} min read</span>
                <button className='text-3xl text-red-800 ml-3 mt-1'  onClick={() => handleAddToBookmarks(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl font-semibold'>{title}</h1>
            <p>
            {
                    hashtags.map((hash, idx) =>  <span key={idx}><a href=""></a> #{hash}</span>)
                }
            </p>
            <button className='text-2xl text-purple-800 underline' onClick={() => handleReadingTime(id, reading_time)}>Mark As Read</button>
            
        </div>

    );
};
Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmarks: PropTypes.func
}

export default Blog;