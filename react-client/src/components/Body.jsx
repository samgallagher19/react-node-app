import React from "react";
import Post from "./Post";



function Body(props) {


      
  console.log(props.posts);

  return <div>{props.posts.map(post => <Post title={post.title} content={post.content} key={post._id} id={post._id} onUpdatePosts={props.onUpdatePosts}/>)}</div>;
}

export default Body;