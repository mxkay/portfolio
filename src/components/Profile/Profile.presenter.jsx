import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import LinkList from "../LinkList/LinkList.container";

import "./Profile.css";

const ProfilePresenter = ({ name, pronouns, title, photo }) =>
    <div className="profile-wrapper">
        <div className="profile">
            <ProfilePhoto src={photo} />
            <div className="profile-name">{name}</div>
            <div className="profile-pronouns">{pronouns}</div>
            <div className="profile-title">{title}</div>
            <LinkList />
        </div>
    </div>

export default ProfilePresenter;