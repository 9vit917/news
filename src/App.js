import React from "react";

import Post from "./components/Post";

import posts from "./posts.json";


function App() {
  return (
    <div>
      {
        posts.map((post, key) => {
          return (
            <Post
              key = {key}
              title = {post.title}
              text = {post.description}
              img = {post.image}
            />
          )
        })
      }
    </div>
  );
}

export default App;
