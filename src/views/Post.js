/*
    This is a view container for a single post.
    The design choice for this is to have a single container to contain all
    the individual components of a post. The components are as follows:

    - The image itself
    - The user profile bar on top (not interactive)
    - The interactive comment section
    - The like, commment, upload, and bookmark bar (not interactive)
    - The comment input section
    - A reply input section (Reply works by adding a reusable component in the
        interactive comment section)

    The interactive comment section is also encapsulated in a redux container
    that connects with the actions and reducers.

    The mobile view for this is under 760 px screen width.
*/

import React, { useState, useEffect } from 'react'

// Components
import PostHeader from '../components/PostHeader'
import PostBar from '../components/PostBar'
import GetComments from '../containers/GetComments'
import Comment from '../components/Comment'

// Helpers
import { checkWindowSize } from '../helpers/dom'

// Assets
import post from '../assets/post.jpg'

// Styles
import '../styles/Post.scss'

const Post = () => {
    const[isMobile, setIsMobile] = useState(false)
    const[IsLiked, setIsLiked] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize)
    })

    // Provides adaptive resizing for the window size
    const handleWindowResize = () => {
        setIsMobile(checkWindowSize())
    }

    // Event handler for the post like button and double click (like button does not change data)
    const handleLikeClicked = () => {
        if (!IsLiked) {
            setIsLiked(true)
        } else {
            setIsLiked(false)
        }   
    }

    return(
        isMobile ? (
            // Mobile view
            <div className="d-flex flex-column justify-content-center viewheight">
                <div>
                    <PostHeader />
                </div>
                <div className="d-flex flex-grow-1 image-container">
                    <img src={post} alt="" onDoubleClick={handleLikeClicked} className="w-100 image"></img>
                </div>
                <div className="px-3 pt-2">
                    <PostBar handleLikeClicked={handleLikeClicked} isLiked={IsLiked} />
                     {/* This is the redux container */}
                    <GetComments />
                </div>
                <div className="comment">
                    <hr></hr>
                    <div className="px-2 pb-2">
                        <Comment />
                    </div>
                </div>
            </div>
        ) : (
            // Desktop / Tablet view
            <div className="viewheight">
                <div className="row no-gutters h-100">
                    <div className="col-8 d-flex">
                        <img onDoubleClick={handleLikeClicked} src={post} alt="" className="w-100 image"></img>
                    </div>
                    <div className="col-4 d-flex flex-column">
                        <div className="px-3">
                            <PostHeader />
                        </div>
                        <hr></hr>
                        <div className="pt-2 flex-grow-1">
                            <div className="px-3">
                                {/* This is the redux container */}
                                <GetComments />
                            </div>
                        </div>
                        <div className="pb-2 comment">
                            <div className="px-3">
                                <PostBar handleLikeClicked={handleLikeClicked} isLiked={IsLiked}/>
                            </div>
                            <hr></hr>
                            <div className="px-3">
                                <Comment />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )   
    )
}

export default Post