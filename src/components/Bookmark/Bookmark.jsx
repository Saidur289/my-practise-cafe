import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-slate-200 rounded-xl p-3 mt-4 space-y-3">
            <h1 className="text-2xl font-bold">{title}</h1>
            
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;