import React from 'react';
import PropTypes from 'prop-types';
function Photo(props) {
    return (
        <figure className='figure'>
            <img className='photo' src={props.post.imageLink} alt={props.post.description}/>
            <figcaption>
                <p>{props.post.description}</p>
            </figcaption>
            <div className='button-container'>
                <button onClick={()=>{props.removePost(props.index)}}>Remove</button>
            </div>

        </figure>
    )
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
};

export default Photo;