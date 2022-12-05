import React from "react";

function Post(props) {

    if(props.postData) {
        let posts =  props.postData.map((post) => {
            return <li key={post['id']}>
                <b>{post['title'] ?? ''}</b>
                <button style={{"marginLeft": "10px", "color" : "red"}} onClick={() => props.deletePost(post['id'])}>Delete</button>
                <button style={{"marginLeft": "10px", "color" : "blue"}} onClick={() => props.editPost(post['id'])}>Edit</button>
                <p style={{"marginTop":"5px"}}>{post['body'] ?? ''}</p>
                </li>;
        });
        return <ol>{posts}</ol>
    }
}

export default Post;