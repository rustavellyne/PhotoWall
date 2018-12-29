import React, {Component} from 'react';
import PhotoWall from "./PhotoWall";
import AddPhoto from './AddPhoto';
import {Link, Route} from 'react-router-dom';


class Main extends Component {

    render(){

        return (
            <div>
                <h1><Link to='/'> Photowall</Link></h1>
                <Route exact path = "/" render={()=>(
                    <div>

                        <PhotoWall {...this.props}/>
                    </div>
                )} />
                <Route path = "/AddPhoto"  render = {()=>(
                    <AddPhoto {...this.props}/>

                )}/>
            </div>
        )
    }
}



export default Main;