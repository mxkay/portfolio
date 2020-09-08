import React, { useState, useEffect } from "react";
import axios from "axios";
import Contact from "./Contact";

const ContactContainer = () => {

    const [contactData, updateContactData] = useState({
        name: "",
        pronouns: "",
        email: "",
    });

    // ON MOUNT
    useEffect( () => {
        // const sheetURL = 'https://docs.google.com/spreadsheets/d/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/edit#gid=677653555';
        const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/2/public/full?alt=json'

        // FETCH profile data
        axios(sheetAsJSON)
        // STORE profile data to state
        .then( response => {
            // console.log("response.data", response.data);
            updateContactData( 
                {
                    name: response.data.feed.entry[0].gsx$name.$t,
                    pronouns: response.data.feed.entry[0].gsx$pronouns.$t,
                    email: response.data.feed.entry[0].gsx$title.$t,
                }
            );
        })
        .catch( err => console.log('error loading ajax'));
    },[]);

    return <Contact {...contactData} />;
}

export { ContactContainer };