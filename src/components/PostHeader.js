import React from 'react'

// Assets
import profilepic from '../assets/profilepic.jpg'

// Styles
import '../styles/PostHeader.scss'

const PostHeader = () => {
    return(
        <nav className="navbar d-flex flex-row justify-content-between">
            <div className="row pl-2 justify-content-start align-items-center">
                <div>
                    <img src={profilepic} alt="" className="rounded-circle mr-3 profile-pic"></img>
                </div>
                <div className="d-flex flex-column">
                    <span className="profile-name">nicholassteven998</span>
                    <span>UC Davis</span>
                </div>
            </div>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            </svg>
        </nav>
    )
}

export default PostHeader