import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Contact from './Contact';

const ContactContainer = () => {
  const [contactData, updateContactData] = useState({
    name: '',
    pronouns: '',
    email: ''
  });

  // ON MOUNT
  useEffect(() => {
    // const sheetURL = 'https://docs.google.com/spreadsheets/d/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/edit#gid=677653555';
    const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/2/public/full?alt=json';

    // FETCH profile data
    axios(sheetAsJSON)
    // STORE profile data to state
      .then(response => {
        // console.log("response.data", response.data);
        updateContactData(
          {
            name: response.data.feed.entry[0].gsx$name.$t,
            pronouns: response.data.feed.entry[0].gsx$pronouns.$t,
            email: response.data.feed.entry[0].gsx$email.$t
          }
        );
      })
      .catch(error => console.error(error));
  }, []);

  const [copyStatus, setCopyStatus] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const handleCopy = () => {
    setIsMessageVisible(true);
    setCopyStatus(true);
    setTimeout(() => {
      setCopyStatus(false);
      setTimeout(() => {
        setIsMessageVisible(false);
      }, 1000);
    }, 1000);
  };

  return <Contact {...contactData} copyStatus={copyStatus} isMessageVisible={isMessageVisible} handleCopy={handleCopy} />;
};

export { ContactContainer };
