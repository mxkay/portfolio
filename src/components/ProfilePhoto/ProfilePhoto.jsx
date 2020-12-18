import React from 'react';
import './ProfilePhoto.css';

const ProfilePhoto = ({ src }) =>
  <div className='profile-photo-wrapper'>
    <img className='profile-photo' src={src} />
  </div>;

export default ProfilePhoto;
