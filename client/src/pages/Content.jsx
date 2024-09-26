import React from "react";
import "./Content.css";

function Content() {
  return (
    <>
      <div className="contentWrapper">
        <div className="leftWrapper">
          <h2>Memories shared by your friends</h2>
          <div className="leftWrap">
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
                src="/profile.jpg"
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
              <div className="description">Dil se Dil tak</div>
              <img
                className="postImg"
                src="/logo.jpg"
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

        <div className="rightWrap">skjns</div>
      </div>
    </>
  );
}

export default Content;
