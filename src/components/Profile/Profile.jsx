import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfilePresenter from "./Profile.presenter";

const Profile = () => {

    const [profileData, updateProfileData] = useState({
        name: "",
        pronouns: "",
        title: "",
        photo: "",
    });

    // ON MOUNT
    useEffect( () => {
        // const sheetURL = 'https://docs.google.com/spreadsheets/d/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/edit#gid=677653555';
        const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/2/public/full?alt=json'

        // FETCH project data
        axios(sheetAsJSON)
        // STORE project data to state
        .then( response => {
            // console.log("response.data", response.data);
            updateProfileData( 
                {
                    name: response.data.feed.entry[0].gsx$name.$t,
                    pronouns: response.data.feed.entry[0].gsx$pronouns.$t,
                    title: response.data.feed.entry[0].gsx$title.$t,
                    photo: response.data.feed.entry[0].gsx$photo.$t,
                }
            );
        })
        .catch( err => console.log('error loading ajax'));
    },[]);

    return <ProfilePresenter {...profileData} />;
}

export default Profile;