// Each post inside will be a separate component defined by a for-loop. 
// Class - Based Component

import React from 'react'

class PostsList extends React.Component() {
    // instead of returning directly, use render()
    render(){
        return (
            <div>
                <h1>Codeial - Posts</h1>
                {/* This ul will itearte through the posts API & fetch posts & return them using the posts component. */}
                <ul>
                    
                </ul>
            </div>
          );
    }

}
export default Post;
