import React from "react";
import Header from "./Header";
import Body from "./Body";
import Input from "./Input";

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
      <Header />
      <Body onUpdatePosts={updatePosts} posts={posts} />
      <Input onUpdatePosts={updatePosts}/>
    </div>
  );
}

export default App;
