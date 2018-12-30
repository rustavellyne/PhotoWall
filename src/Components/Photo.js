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
            </div>

        </figure>
    )
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
};

export default Photo;