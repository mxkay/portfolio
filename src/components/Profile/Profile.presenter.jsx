import React from "react";
import "./Profile.css";

const ProfilePresenter = ({ name, pronouns, title, photo }) =>
    <div className="profile-wrapper">
        <div className="profile">
            <div className="profile-photo-wrapper">
                <img className="profile-photo" src={photo} />
            </div>
            <div className="profile-name">{name}</div>
            <div className="profile-pronouns">{pronouns}</div>
            <div className="profile-title">{title}</div>
        </div>
    </div>

export default ProfilePresenter;