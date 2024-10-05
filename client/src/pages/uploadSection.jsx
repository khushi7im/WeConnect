import "./uploadSection.css";

const UploadSection = () => {
  return (
    <div className="mysection">
      <div className="topone">
        <span>
          <img src="/profile.jpg" alt="" className="dp" />
        </span>
        <span>
          <input
            type="text"
            placeholder="What's in your mind ?"
            className="addthought"
          />
        </span>
      </div>
      <div className="shareImgcontainer"></div>

      <form className="addmore">
        <label htmlFor="file" className="label">
          <span className="tomato">
            <i class="fa-solid fa-images "></i>
          </span>
          Photo or Video
        </label>
        <label>
          <span className="green">
            <i class="fa-solid fa-tag "></i>
          </span>
          Tag
        </label>
        <label>
          <span className="blue">
            <i class="fa-solid fa-location-dot"></i>
          </span>
          Location
        </label>
        <label>
          <span className="yellow">
            <i class="fa-solid fa-face-kiss-wink-heart"></i>
          </span>
          Feelings
        </label>
        <button className="share-btn" type="submit">
          Share
        </button>
      </form>
    </div>
  );
};

export default UploadSection;
