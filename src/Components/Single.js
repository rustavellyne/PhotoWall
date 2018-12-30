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
        if(this.props.loading) {
            return <div className='loader'>...loading</div>
        } else if(post) {
            return (
                <div className='single-photo'>
                    <Photo post={post} {...this.props} index={index}/>
                    <Comments startAddingComment={this.props.startAddingComment}
                              comments={commentsArray}
                              id={id}
                    />
                </div>
            )
        } else {
             return <h1>...no post found</h1>
        }

    }
}

export default Single;