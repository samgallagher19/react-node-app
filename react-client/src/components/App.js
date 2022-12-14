import React from "react";
import Header from "./Header";
import Body from "./Body";
import Body2 from "./Body2";
import Toggle from "./Toggle";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        fetch("/posts")
          .then((res) => res.json())
          .then((data) => setPosts(data.posts));
      }, []);

  function updatePosts() {
    fetch("/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }


  return (
    
    <div className="App">
    
      <Header onUpdatePosts={updatePosts} />

      <Body2 onUpdatePosts={updatePosts} posts={posts} />

    </div>
    
  );
}

export default App;
