import React from "react";
import profilePhoto from "../assets/profilePhoto.jpg";
import "../CSS/pagesCSS/Profile.css";
import Button from "../components/Button";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="header">
        <p>Account Settings</p>
      </div>
      <div className="profileDetails">
        <div className="infoContainer">
          <div className="profileImage">
            <img src={profilePhoto} alt="profile_photo" />
          </div>
          <div className="info">
            <p className="userName">Sk Sakibul Islam</p>
            <p className="userEmail">sksakibulislam30@gmail.com</p>
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
