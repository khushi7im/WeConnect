import "./Content.css";
import Post from "./Post.jsx";

function Content() {
  return (
    <div className="contentWrapper">
      <div
        className="insideContent"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Content;
