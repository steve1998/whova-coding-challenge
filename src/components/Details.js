import React, { useEffect, useState } from 'react'

// Components
import Reply from './Reply'

// Services
import { retrieveFromStorage, saveToStorage } from '../services/api'

// Helpers
import { getDate, getTimeDifference } from '../helpers/date'

// Styles
import '../styles/Details.scss'

const Details = ({ comments, fetchComments, addReply, likeComment, unlikeComment, likeReply, unlikeReply }) => {
    const[currentHour, setCurrentHour] = useState(undefined) // state of current time in hours
    const[currentComments, setCurrentComments] = useState([]) // array of comments to be rendered
    const[replyBox, setReplyBox] = useState(false) // state of visibility of the reply box
    const[replyBoxId, setReplyBoxId] = useState(null) // state of which reply row box is clicked

    useEffect(() => {
        /*
            Checks if comment state exists. If state is an empty array (most likely first time loading page),
            fetches data from the localStorage and populates state. If it exists, populates local state from 
            redux state and updates the localStorage with the most recently updated data.
        */
        if (comments.length === 0) {
            if(retrieveFromStorage() == null) {
                setCurrentComments([])
            } else {
                let commentFromStorage = retrieveFromStorage()
                setCurrentComments(commentFromStorage)
                fetchComments(commentFromStorage)
            }
        } else {
            setCurrentComments(comments)
            // Saves to storage everytime state is updated
            saveToStorage(comments)
        }

        setCurrentHour(getDate())
    }, [comments, fetchComments])

    // Event Handlers

    // Handles like button pressed
    const handleLike = id => {
        likeComment(id)
    }

    // Handles like button pressed (for unlike)
    const handleUnlike = id => {
        unlikeComment(id)
    }

    // Handles like button pressed on a replied comment
    const handleLikeReply = (commentId, replyId) => {
        likeReply(commentId, replyId)
    }

    // Handles like button pressed on a replied comment (for unlike)
    const handleUnlikeReply = (commentId, replyId) => {
        unlikeReply(commentId, replyId)
    }

    // Handles if reply button is pressed
    const handleReply = id => {
        if(replyBox) {
            if(replyBoxId !== id) {
                setReplyBoxId(id)
            } else {
                setReplyBox(false)
                setReplyBoxId(null)
            }
        } else {
            setReplyBox(true)
            setReplyBoxId(id)
        }
    }
    
    return(
        <div>
            {/* Hard-coded likes for comment */}
            <p className="semi-bold row-spacing-custom">54 likes</p>
            {/* Hard-coded caption */}
            <div className="d-flex flex-row row-spacing-custom">
                <p>
                    <span className="semi-bold pr-2">nicholassteven998</span>
                    <span>Cool Forest <span className="hashtag">#forest</span></span>
                </p>   
            </div>  
            <div className="details-section">
                {               
                    // Maps the comments with each component         
                    currentComments.map(comment => {
                        return(
                            <div key={comment.id}>
                                <div className="d-flex flex-row row-spacing-custom justify-content-between">
                                    <p className="commenter">
                                        {/* Hard-coded commenter username */}
                                        <span className="semi-bold pr-2">nicholassteven998</span>  
                                        <span>{comment.text}</span>
                                    </p> 
                                    <div>
                                        {
                                            // If comment is liked or unliked, display the correct icon
                                            comment.liked ? (
                                                <svg 
                                                onClick={() => handleUnlike(comment.id)} 
                                                width="1em" height="1em" viewBox="0 0 16 16" 
                                                className="bi bi-heart-fill mr-3 like" 
                                                fill="currentColor" 
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                                </svg>
                                            ) : (
                                                <svg 
                                                onClick={() => handleLike(comment.id)} 
                                                width="1em" 
                                                height="1em" 
                                                viewBox="0 0 16 16" 
                                                className="bi bi-heart mr-3 like" 
                                                fill="currentColor" 
                                                xmlns="http://www.w3.org/2000/svg">
                                                    <path 
                                                    fillRule="evenodd"
                                                    d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 
                                                    2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 
                                                    6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 
                                                    2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 
                                                    3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                                </svg>
                                            )
                                        }
                                    </div>
                                </div>
                                <div>
                                    {
                                        comment.replies ? (
                                            comment.replies.map((reply, index) => {
                                                return(
                                                    <div key={index} className="pl-3 py-2 d-flex flex-row justify-content-between">
                                                        <p className="commenter">
                                                            {/* Hard-coded commenter username */}
                                                            <span className="semi-bold pr-2">nicholassteven998</span>  
                                                            <span>{reply.text}</span>
                                                        </p> 
                                                        <div>
                                                            {
                                                                // If comment reply is liked or unliked, display the correct icon
                                                                reply.liked ? (
                                                                    <svg 
                                                                    onClick={() => handleUnlikeReply(comment.id, reply.replyId)} 
                                                                    width="1em" 
                                                                    height="1em" 
                                                                    viewBox="0 0 16 16" 
                                                                    className="bi bi-heart-fill mr-3 like" 
                                                                    fill="currentColor" 
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                        <path 
                                                                        fillRule="evenodd" 
                                                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                                                    </svg>
                                                                ) : (
                                                                    <svg 
                                                                    onClick={() => handleLikeReply(comment.id, reply.replyId)} 
                                                                    width="1em"
                                                                    height="1em" 
                                                                    viewBox="0 0 16 16" 
                                                                    className="bi bi-heart mr-3 like" 
                                                                    fill="currentColor" 
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                        <path 
                                                                        fillRule="evenodd" 
                                                                        d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 
                                                                        4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 
                                                                        6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 
                                                                        2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 
                                                                        3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                                                    </svg>
                                                                )
                                                            }
                                                        </div>
                                                    </div> 
                                                )
                                            })
                                        ) : null   
                                    }
                                </div>
                                <div>
                                    <p className="reply">
                                        <span className="pr-2">
                                        {
                                            // Calculates the timestamp of each comment
                                            getTimeDifference(currentHour, comment.time) < 1 ? (<span>Just now</span>) : (currentHour - comment.time + "h")
                                        }
                                        </span>
                                        <span onClick={() => handleReply(comment.id)} className="semi-bold reply-button">Reply</span>
                                    </p>
                                </div>
                                <div>
                                    {
                                        // Displays the reply box for the selected comment
                                        replyBox && replyBoxId === comment.id ? (<Reply reply={handleReply} dispatchReply={addReply} commentId={comment.id}/>) : null
                                    }
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div> 
            {/* Hard-coded timestamp for comment */}
            <div className="timestamp row-spacing-custom">
                <p>14 hours ago</p>
            </div>
        </div>
    )
}

export default Details