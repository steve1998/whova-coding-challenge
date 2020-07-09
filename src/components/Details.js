import React from 'react'

import '../styles/Details.css'

const Details = () => {
    return(
        <div>
            <p className="semi-bold row-spacing-custom">54 likes</p>
            <div className="d-flex flex-row row-spacing-custom">
                <p>
                    <span className="semi-bold pr-2">nicholassteven998</span>
                    <span>Cool Forest <span className="hashtag">#forest</span></span>
                </p>   
            </div>   
            <div className="d-flex flex-row row-spacing-custom">
                <p>
                    <span className="semi-bold pr-2">testcommenter</span>  
                    <span>Test comment that will change once Redux and Storage is implemented</span>
                </p> 
            </div>
            <div className="timestamp row-spacing-custom">
                <p>14 hours ago</p>
            </div>
        </div>
    )
}

export default Details