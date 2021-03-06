import React, { useState } from 'react'

// Styles
import '../styles/Reply.scss'

const Reply = (props) => {
    const[reply, setReply] = useState(undefined)

    const handleReplyChanged = (event) => {
        setReply(event.target.value)
    }

    const handlePost = () => {
        props.dispatchReply(reply, props.commentId)
        props.reply()
    }

    return(
        <div className="d-flex flex-row reply-row justify-content-between">
            <input id="postReply" type="text" className="form-control border-0" placeholder="Add a reply..." onChange={handleReplyChanged}></input>
            <button type="button" className="btn btn-outline-primary border-0" onClick={handlePost}>Reply</button>
        </div>
    )
}

export default Reply