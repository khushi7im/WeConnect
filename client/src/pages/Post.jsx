import React from "react";
import "./Post.css";

function Post() {
  return (
    <div>
      <div className="PostWrap">
        <div className="post">
          <div className="profile">
            <img
              className="postDP"
              src="/profile.jpg"
              alt="profile"
              width={"30px"}
              height={"30px"}
            />
            {"  "}
            Khushi Dhiman
          </div>
          <div className="description">Believe in Karma</div>
          <img
            className="postImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn-X2ZRRr7DWK4gEnkQFFo_NSpS4dxoS-gg&s"
            alt="post"
            width={"380px"}
            height={"380px"}
          />
          <div className="likeComment">
            <i class="fa-regular fa-thumbs-up" />
            <i class="fa-regular fa-comment" />
            <i class="fa-solid fa-share" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
