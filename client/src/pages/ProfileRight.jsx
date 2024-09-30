import "./ProfileRight.css";

function ProfileRight() {
  return (
    <div>
      <div className="rightprofile">
        <div className="info">
          <h3>user Information :</h3>
          <p>
            <b>Name: </b>
            none
          </p>
          <p>
            <b>Age: </b>18
          </p>
          <p>
            <b>Relationship status: </b>
            none
          </p>
          <p>
            <b>Qualifications: </b>Graduation
          </p>
          <p>
            <b>City: </b> none
          </p>
        </div>
        <div className="listfollowing">
          <h2 className="Followlist">Following </h2>
          <div className="listUser">
            <span className="following">
              <img className="userimg" src="/profile.jpg" alt="profile" />
              <span className="username">username</span>
            </span>
            <span className="following">
              <img className="userimg" src="/profile.jpg" alt="profile" />
              <span className="username">username</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileRight;
