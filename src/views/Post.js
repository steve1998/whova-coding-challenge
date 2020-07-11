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

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize)
    })

    const handleWindowResize = () => {
        setIsMobile(checkWindowSize())
    }

    return(
        isMobile ? (
            <div className="d-flex flex-column justify-content-center viewheight">
                <div>
                    <PostHeader />
                </div>
                <div className="d-flex flex-grow-1 image-container">
                    <img src={post} alt="" className="w-100 image"></img>
                </div>
                <div className="px-3 pt-2">
                    <PostBar />
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
            <div className="viewheight">
                <div className="row no-gutters h-100">
                    <div className="col-8 d-flex">
                        <img src={post} alt="" className="w-100 image"></img>
                    </div>
                    <div className="col-4 d-flex flex-column">
                        <div className="px-3">
                            <PostHeader />
                        </div>
                        <hr></hr>
                        <div className="pt-2 flex-grow-1">
                            <div className="px-3">
                                <GetComments />
                            </div>
                        </div>
                        <div className="pb-2 comment">
                            <div className="px-3">
                                <PostBar />
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