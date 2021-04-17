// Each post inside will be a separate component defined by a for-loop. 
// Class - Based Component

import React from 'react'
import axios from 'axios'
import Post from './Post';
// To connect to API using PostList component use Axios library.


class PostsList extends React.Component {

    // similar to the () based components recieving props in args.
    constructor(props){
        super(props); //adapts from parent class props.
        // React works on states. A component has a state.
        // A state is basically a set of all those variables which can change further & further.

        this.state = {
            posts : [] //initially empty, but will change with time.
        }

        this.getPosts(); //whenever the instance of this class is created, this () is called.
    }
    getPosts(){
        // will use axios library to fetch the posts.

        axios.get('http://localhost:8000/api/v1/posts').then((data) => {
            this.setState({posts : data.data.posts})});
        }
    // () to apply styles to the post

    // instead of returning directly, use render()
    render(){
        let postStyle = {
            color : '#e91e63'
        }
        return (
            <div>
                <h1 style = {postStyle}>Codeial - Posts</h1>
                {/* This ul will itearte through the posts API & fetch posts & return them using the posts component. */}
                {/* this.state.posts.map((post) (A) =>
                    (B) <Post post = {post}  
                    (C)key = {post._id}></Post>) */}
                <ul>
                    {
                        this.state.posts.map((post) => <Post post = {post} key = {post._id}></Post>)
                    }
                    {/* (A) map will loop around each post in the array. */}
                    {/* (B) Imported the component post & set-up it's props(post) */}
                    {/* (C) setting up a key as post-id for this post component. */}
                </ul>
            </div>
          );
    }

}
export default PostsList;
