import React, { useState } from 'react'

import '../styles/Comment.css'

const Comment = () => {
    const[comment, setComment] = useState(undefined)

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const handlePost = () => {
        alert(comment)
    }

    return(
        <div className="comment d-flex flex-row justify-content-between">
            <input type="text" className="form-control border-0" placeholder="Add a comment..." onChange={handleCommentChange}></input>
            <button type="button" class="btn btn-outline-primary border-0" onClick={handlePost}>Post</button>
        </div>
    )
}

export default Comment