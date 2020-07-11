import { connect } from 'react-redux'
import Details from '../components/Details'
import { addReply, fetchComments, likeComment, unlikeComment, likeReply, unlikeReply } from '../actions/comments'


const mapStateToProps = state => {
    return {
        comments: state
    }   
}

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