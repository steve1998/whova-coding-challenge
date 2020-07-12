import { connect } from 'react-redux'

// Components
import Details from '../components/Details'

// Actions
import { addReply, fetchComments, likeComment, unlikeComment, likeReply, unlikeReply } from '../actions/comments'

// Passes the comment array as a props to the components
const mapStateToProps = state => {
    return {
        comments: state
    }   
}

// Passes the reducers dispatch functions as a props to the components
const mapDispatchToProps = dispatch => {
    return {
        addReply: (text, id) => dispatch(addReply(text, id)),
        fetchComments: arrayOfComments => dispatch(fetchComments(arrayOfComments)),
        likeComment: id => dispatch(likeComment(id)),
        unlikeComment: id => dispatch(unlikeComment(id)),
        likeReply: (commentId, replyId) => dispatch(likeReply(commentId, replyId)),
        unlikeReply: (commentId, replyId) => dispatch(unlikeReply(commentId, replyId))
    }
}

const GetComments =  connect(mapStateToProps, mapDispatchToProps)(Details)
export default GetComments