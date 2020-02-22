import React from 'react';

const Post = props => {
    return (     
        <div className="post">
            <div 
                style={ {backgroundImage: `url(${props.img})`} } 
                className="post__image">
            </div>
            <div className="post__info">
                <h3>
                    { props.title }
                </h3>
                <p>
                    { props.text || "Fuck"} 
                </p>
            </div>
        </div>
    )
}


export default Post; 
