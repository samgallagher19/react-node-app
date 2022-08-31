import React, { useState } from "react"

function Input(props) {
    const [newPost, setNewPost] = useState({title: '', content: '', status: 'backlog'});

    function handleChange(event) {
      const {name, value} = event.target;
      setNewPost((prevPost) => {return {...prevPost, [name]: value}});
    }


    function handleClick(event) {
        const data1 = { username: 'example' };

        console.log(newPost);

        fetch('/posts', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPost),
        }).then(function(response) {
          console.log(response)
          return response.json();
        });

        props.onUpdatePosts();

        event.preventDefault();

      }

    return <div>
            <input onChange={handleChange} name="title" type="text" placeholder="Title" value={newPost.title}/>
            <textarea onChange={handleChange} name="content" placeholder="post content" value={newPost.content}></textarea>
            <button onClick={handleClick}>SUBMIT EXAMPLE DATA</button>
          </div>;
}

export default Input;