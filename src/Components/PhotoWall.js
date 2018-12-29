import React from 'react';
import Photo from "./Photo";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function PhotoWall(props) {

    return (
        <div>
            <Link className='add-icon' to="/AddPhoto"/>
            {/*<button className='add-icon' onClick={props.onNavigate}/>*/}
            <div className='photo-grid'>
                {props.posts
                    .sort((x,y)=> x.id - y.id)
                    .map((post, index)=><Photo key={post.id}
                                                        post={post}
                                                        {...props}
                                                        index={index}
                                                />
                )}
            </div>
        </div>

    )
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
};

export default PhotoWall;