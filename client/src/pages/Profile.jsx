import Navbar from "./Navbar.jsx";
import Content from "./Content.jsx";
import ProfileRight from "./ProfileRight.jsx";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="coverimg">
        <img src="/profile.jpg" alt="" className="cover-img" />
        <div className="handleprofile">
          <img className="myprofile" src="/profile.jpg" alt="" />
        </div>
        <div className="handlename">
          <h1>Khushi Dhiman</h1>
          <span className="bio">Fly above the negativity</span>
          <button>Update</button>
        </div>
      </div>
      <div className="profileOutlet" style={{ display: "flex" }}>
        <div className="profileContent" style={{ flex: "1" }}>
          <ProfileRight />
        </div>
        <div className="profileRightbar" style={{ flex: "2" }}>
          <Content />
        </div>
      </div>
    </>
  );
};

export default Profile;
