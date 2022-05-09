import React, { useState } from "react";
import "./Style.css";

export default function PictureCard() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      imgSrc: "https://picsum.photos/200/200",
      createBy: "Mew",
      likeCount: 1,
      commentCount: 2,
    },
    {
      id: 2,
      imgSrc: "https://picsum.photos/200/201",
      createBy: "Thun",
      likeCount: 2,
      commentCount: 3,
    },
    {
      id: 3,
      imgSrc: "https://picsum.photos/200/202",
      createBy: "Tan",
      likeCount: 4,
      commentCount: 5,
    },
    {
      id: 4,
      imgSrc: "https://picsum.photos/200/203",
      createBy: "IO",
      likeCount: 6,
      commentCount: 1,
    },
  ]);

  const handleLikePost = (postId) => {
    const newPosts = posts.map((post) => {
      if (post.id === postId) {
        post.likeCount += 1;
      }
      return post;
    });

    // update stat
    setPosts(newPosts);
  };

  return (
    <div className="Container">
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#fafafa",
        color: "#000",
        fontSize: "1.5rem",
        fontWeight: "bold",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "0",
        margin: "0",
      }}
    >
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #000",
            width: "200px",
            margin: "10px",
          }}
        >
          <img src={post.imgSrc} alt="post" />
          <div>
            <h3>{post.createBy}</h3>
            <p>
              <span>{post.likeCount}</span>
              {/* <span>{post.commentCount}</span> */}
            </p>
          </div>

          <button
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "0.5rem",
              border: "none",
              fontSize: "1rem",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              cursor: "pointer",
              margin: "0.5rem",
              borderRadius: "5px",
            }}
            onClick={() => {
              handleLikePost(post.id);
            }}
          >
            Like
          </button>
        </div>
      ))}
    </div>
    </div>
  );
}
