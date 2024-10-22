import Bookmark from "../Bookmark/Bookmark";
// import PropTypes from 'prop-types'


const Bookmarks = ({bookmarks, readingTime}) => {
    // console.log(bookmarks);
    return (
        <div className="w-1/3 bg-gray-300 ml-4 mt-10 text-center p-4">
            <div>
                <h1>Reading time : {readingTime}</h1>
            </div>
            <h1>Bookmarks:{bookmarks.length}</h1>
            {
             bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark = {bookmark}></Bookmark>)   
            }
        </div>
    );
};
// Bookmarks.propTypes = {
// bookmarks: PropTypes.object


// }

export default Bookmarks;