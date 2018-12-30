import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function Photo(props) {
    return (
        <figure className='figure'>
            <Link to={`/single/${props.post.id}`}>
                <img className='photo'
                     src={props.post.imageLink}
                     alt={props.post.description}
                />
            </Link>

            <figcaption>
                <p>{props.post.description}</p>
            </figcaption>
            <div className='button-container'>
                <button onClick={()=>{
                    props.removePost(props.index);
                    props.history.push('/')
                }}>
                    Remove
                </button>
                <Link className='button' to={`/single/${props.post.id}`}>
                    <div className='comment-count'>
                        <div className='speech-bubble'/>
                        {props.comments[props.post.id] ? props.comments[props.post.id].length : 0}
                    </div>
                </Link>
            </div>

        </figure>
    )
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
};

export default Photo;