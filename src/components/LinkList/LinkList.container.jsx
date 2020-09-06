import React, { useState, useEffect } from "react";
import axios from "axios";
import LinkList from "./LinkList";

const LinkListContainer = () => {

    const [links, updateLinks] = useState({
        label: "",
        url: "",
    });

    // ON MOUNT
    useEffect( () => {
        // const sheetURL = "https://docs.google.com/spreadsheets/d/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/edit#gid=677653555";
        const sheetAsJSON = "https://spreadsheets.google.com/feeds/list/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/4/public/full?alt=json"

        // FETCH link data
        axios(sheetAsJSON)
        // STORE link data to state
        .then( response => {
            // console.log("response.data", response.data);
            updateLinks( response.data.feed.entry.map( link => {
                return {
                    label: link.gsx$label.$t,
                    url: link.gsx$url.$t
                }
            }));
        })
        .catch( err => console.log("error loading ajax"));
    },[]);

    return <LinkList links={links} />
}

export { LinkListContainer };