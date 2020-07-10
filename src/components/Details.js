import React, { useEffect, useState } from 'react'

import { retrieveFromStorage, saveToStorage } from '../services/api'

import '../styles/Details.css'
import { fetchComments } from '../actions/comments'

const Details = ({ comments, dispatch }) => {
    const[currentHour, setCurrentHour] = useState(undefined)
    const[currentComments, setCurrentComments] = useState([])

    useEffect(() => {
        if(comments.length == 0) {
            if(retrieveFromStorage() == null) {
                setCurrentComments([])
            } else {
                let commentFromStorage = retrieveFromStorage()
                setCurrentComments(commentFromStorage)
                dispatch(fetchComments(commentFromStorage))
            }
        } else {
            setCurrentComments(comments)
            // Saves to storage everytime state is updated
            saveToStorage(comments)
        }

        let date = new Date()
        setCurrentHour(date.getHours())
    }, [comments])
    
    return(
        <div>
            <p className="semi-bold row-spacing-custom">54 likes</p>
            <div className="d-flex flex-row row-spacing-custom">
                <p>
                    <span className="semi-bold pr-2">nicholassteven998</span>
                    <span>Cool Forest <span className="hashtag">#forest</span></span>
                </p>   
            </div>  
            <div className="details-section">
                {                        
                    currentComments.map(comment => {
                        return(
                            <div>
                                <div className="d-flex flex-row row-spacing-custom justify-content-between">
                                    <p className="commenter">
                                        <span className="semi-bold pr-2">testcommenter</span>  
                                        <span>{comment.text}</span>
                                    </p> 
                                    <div>
                                        {
                                            comment.liked ? (
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                                </svg>
                                            ) : (
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                                </svg>
                                            )
                                        }
                                    </div>
                                </div>
                                <div>
                                    <p className="reply">
                                        <span className="pr-2">
                                        {
                                            currentHour - comment.time < 1 ? (<span>Just now</span>) : (currentHour - comment.time + "h")
                                        }
                                        </span>
                                        <span className="semi-bold">Reply</span>
                                    </p>
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div> 
            <div className="timestamp row-spacing-custom">
                <p>14 hours ago</p>
            </div>
        </div>
    )
}

export default Details