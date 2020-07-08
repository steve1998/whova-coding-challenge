import React, { Component } from 'react'

// Components
import PostHeader from '../components/PostHeader'
import PostBar from '../components/PostBar'

// Assets
import post from '../assets/post.jpg'

// Styles
import '../styles/Post.css'

class Post extends Component {
    render() {
        return(
            <div className="d-flex flex-column">
                <PostHeader />
                <img src={post} className="post"></img>
                <PostBar />
            </div>
        )
    }
}

export default Post