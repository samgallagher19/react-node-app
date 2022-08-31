import React from "react";

function Post(props) {
    function handleClick(event) {
      console.log(props.id);
      const idObj = {id: props.id};

      fetch('/posts', {
        method: 'DELETE', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(idObj),
      }).then((response) => response.json())
      .then((idObj) => {
        console.log('Success:', idObj);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      props.onUpdatePosts();

      event.preventDefault();
    }

    return <div>
    <h5>{props.title}</h5>
    <div>
      {props.content}
    </div>
    {props.status === 'backlog' ? <button>Send to In Progress</button> : props.status === 'in-progress'? <button>Send Complete</button> : ''}
    <button onClick={handleClick}>Delete</button>
  </div>;
}

export default Post;