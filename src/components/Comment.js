import React, { useState } from 'react'

import { connect } from 'react-redux'
import { addComment } from '../actions/comments'

import '../styles/Comment.css'

const Comment = ({ dispatch }) => {
    const[comment, setComment] = useState(undefined)

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const handlePost = () => {
        dispatch(addComment(comment))
        document.getElementById('postComment').value = ''
    }

    return(
        <div className="comment d-flex flex-row justify-content-between">
            <input id="postComment" type="text" className="form-control border-0" placeholder="Add a comment..." onChange={handleCommentChange}></input>
            <button type="button" className="btn btn-outline-primary border-0" onClick={handlePost}>Post</button>
        </div>
    )
}

export default connect()(Comment)