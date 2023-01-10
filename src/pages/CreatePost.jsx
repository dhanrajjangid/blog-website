import React, { useEffect, useState } from 'react';
// import '../App.css';
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from 'react-router-dom';

function CreatePost({ isAuth }) {

  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection (db, "posts"); 
  let navigate = useNavigate();
  const createPost = async () =>{
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { 
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid},
    });
    navigate("/");
  };

  useEffect(() => {
    if ( !isAuth ) {
    navigate("/login")
    }
  }, []);


  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>create a post</h1>
        <div className='inputGp'>
          <label>Title:</label>
          <input 
            placeholder='title...'
            onChange={(event) => {
              setTitle(event.target.value)
              }}
          />
        </div>
        <div className='inputGp'>
          <label>Post:</label>
          <textarea 
            placeholder='post...'
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>Create Post</button>
      </div>
    </div>
  )
}

export default CreatePost