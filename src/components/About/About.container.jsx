import React, { useState, useEffect } from "react";
import axios from "axios";
import About from "./About";

const AboutContainer = () => {
    const [ bio, setBio ] = useState();

    // ON MOUNT
    useEffect( () => {
        // const sheetURL = 'https://docs.google.com/spreadsheets/d/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/edit#gid=677653555';
        const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/2/public/full?alt=json'

        // FETCH bio data
        axios(sheetAsJSON)
        // STORE bio to state
        .then( response => {
            // console.log("response.data", response.data);
            setBio( response.data.feed.entry[0].gsx$bio.$t );
        })
        .catch( err => console.log('error loading ajax'));
    },[]);

    return <About bio={bio} />
}

export { AboutContainer };