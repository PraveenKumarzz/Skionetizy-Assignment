import React, { useState, useEffect } from 'react';
import axios from "axios";
import Post from './Post';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Listing() {
  const [post, setPost] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [body, setBody] = React.useState(null);
  const [postId, setPostId] = React.useState(null);

  const savePost = (event) => {
    event.preventDefault();
    let localStorageData = JSON.parse(localStorage.getItem('posts'));
    let editTimeItemIndex = null;
    
    let existingPostIdsArray = localStorageData.map((post, index) => {
      if(event.target.post_id.value && (event.target.post_id.value == post['id'])) {
        editTimeItemIndex = index;
      }
      return post['id'];
    });

    if(!title || !body) {
      alert('Please Fill All Fields');
      return false;
    }

    if(postId && postId != 0) {
      localStorageData[editTimeItemIndex]['title'] = title;
      localStorageData[editTimeItemIndex]['body'] = body;
    } else {
      let post_id = (Math.max(...existingPostIdsArray) ?? 0) + 1;
      
      let userData = {};
      userData['id'] = post_id;
      userData['userId'] = Math.floor(Math.random() * 100);
      userData['title'] = title;
      userData['body'] = body;
      localStorageData.push(userData);
    }
    setPostId(null);
    setBody(null);
    setTitle(null);
    setPost(localStorageData);
    localStorage.setItem('posts', JSON.stringify(localStorageData)); 
  }

  const editPost = (postId) => {
    let localStorageData = JSON.parse(localStorage.getItem('posts'));
    let editPData = localStorageData.filter((post) => {
      if(post.id == postId) {
        return post;
      }
    });

    editPData = editPData ? editPData[0] : {};
    setPostId(editPData['id']);
    setBody(editPData['body']);
    setTitle(editPData['title']);
  }

  function deletePost(postId) {
      let localStorageData = JSON.parse(localStorage.getItem('posts'));
      let newData = localStorageData.map((post) => {
          if(post['id'] != postId) {
              return post;
          }
      });
      newData = newData.filter((post) =>{
          if(post) {
              return post;
          }
      });
      setPost(newData);
      localStorage.setItem('posts', JSON.stringify(newData));
  }

  React.useEffect(() => {
    if(!localStorage.getItem('posts')) {
      axios.get(baseURL).then((response) => {
        if(response.data) {
          localStorage.setItem('posts', JSON.stringify(response.data));
          setPost(response.data);
        }
      });
    } else {
      let dataFromLocalStorage = localStorage.getItem('posts');
      setPost(JSON.parse(dataFromLocalStorage));
    } 
  }, []);
  return (
    <div style={{"paddingLeft" : "10px"}}>
        <h1>Posts</h1>
        <div>
          <form onSubmit={(e) => savePost(e)}>
            <input type="hidden" name="post_id" value={postId ?? 0} />
            <div>
              <label htmlFor="title">Post Title : </label>
              <input name="title" id="title" value={title ?? ""} 
              onChange={(e) => {
                setTitle(e.target.value);
              }}  />
            </div>
            <div style={{"marginTop" : "5px"}}>
              <label htmlFor="body">Post Body : </label>
              <input name="body" value={body ?? ""} onChange={(e) => {
                setBody(e.target.value);
              }} />
            </div>
            <button style={{"marginTop" : "10px"}}>
              {(postId) ? 'Save Post' : 'Create Post'}
            </button>
          </form>
        </div>
        <div style={{"marginTop" : "30px"}}>
          <Post postData={post} deletePost={deletePost} editPost={editPost}/>
        </div>
    </div>
  );
}

export default Listing;