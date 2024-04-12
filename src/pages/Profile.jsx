import React from "react";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="header">
        <p>Account Settings</p>
      </div>
      <div className="profileDetails">
        <div className="infoContainer">
          <div className="profileImage">
            <img src="" alt="" />
          </div>
          <div className="info">
            <p className="userName">name</p>
            <p className="userEmail">email</p>
          </div>
        </div>
        <div className="userBio">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam omnis,
          fugiat natus explicabo ullam ex praesentium dolore laboriosam quas
          sapiente, voluptate voluptatem est eos odio perspiciatis assumenda
          magnam, accusantium cumque.
        </div>
      </div>
    </div>
  );
};

export default Profile;
