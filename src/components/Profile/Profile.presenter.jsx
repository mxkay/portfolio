import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";

import "./Profile.css";

const ProfilePresenter = ({ name, pronouns, title, photo }) =>
    <div className="profile-wrapper">
        <div className="profile">
            <ProfilePhoto src={photo} />
            <div className="profile-name">{name}</div>
            <div className="profile-pronouns">{pronouns}</div>
            <div className="profile-title">{title}</div>
        </div>
    </div>

export default ProfilePresenter;