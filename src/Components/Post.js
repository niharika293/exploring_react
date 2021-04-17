// () based component.
// () components are light, faster because of less  dependencies.
// these are stateless, although states can be over-ridden using React hooks.
import React from 'react'

// props : these are like () attributes in JS & attributes in HTML.
// each post will be recieveing some data through props.
function Post(props) {
    let postStyle = {
        color : 'grey'
    }
  return (
    <li className = "PostItem" style= {postStyle}>

    </li>
  );
}
export default Post;
