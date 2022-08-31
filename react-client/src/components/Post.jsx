import React from "react";

function Post(props) {
    function handleClick(event) {
      console.log(props.id);

      fetch('/posts', {
        method: 'DELETE', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: props.id}),
      }).then(function(response) {
        console.log(response)
        return response;
      });

      props.onUpdatePosts();

      event.preventDefault();
    }

    return <div className="card" style={{width: "18rem", margin: "2em"}}>
    <h5 className="card-title">{props.title}</h5>
    <div className="card-body">
      {props.content}
    </div>
    {props.status === 'backlog' ? <button>Send to In Progress</button> : props.status === 'in-progress'? <button>Send Complete</button> : ''}
    <button onClick={handleClick}>Delete</button>
  </div>;
}

export default Post;