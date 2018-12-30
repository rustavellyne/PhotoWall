import React, {Component} from 'react';
import Photo from "./Photo";
import Comments from "./Comments";

class Single extends Component {
    render() {
        const {match, posts, comments} = this.props;
        const {id} = match.params;
        const post = posts.find(post => post.id === +id);
        const commentsArray = comments[id] || [];
        const index = posts.findIndex((post)=> post.id === +id);
        return (
            <div className='single-photo'>
                <Photo post={post} {...this.props} index={index}/>
                <Comments addComment={this.props.addComment}
                          comments={commentsArray}
                          id={id}
                />
            </div>
        )
    }
}

export default Single;