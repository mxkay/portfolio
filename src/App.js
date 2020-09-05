import React, { useState, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import useWindowDimensions from "./hooks/useWindowDimensions";
import NavigationContext from "./hooks/NavigationContext";

import Background from "./components/Background/Background";
import Layout from "./components/Layout/Layout";
import StickyHeader from "./components/StickyHeader/StickyHeader";
import { ProfileContainer as Profile } from "./components/Profile/Profile.container";
import { AboutContainer as About } from "./components/About/About.container";
import Body from "./components/Body/Body";
import ProjectPortfolio from "./components/ProjectPortfolio/ProjectPortfolio";


function App() {
  const { height, width } = useWindowDimensions();

  const [navigation, updateNavigation] = useState({ page: "projects" });
  const setCurrentPage = (value) => {
    updateNavigation({ ...navigation, page: value });
  }

  const [isStickyHeaderSticky, setIsStickyHeaderSticky] = useState(false);
  const stickyHeaderRef = useRef(null);
  const onScrollFrame = () => {
    if(stickyHeaderRef) {
      setIsStickyHeaderSticky(stickyHeaderRef.current.getBoundingClientRect().top <= 0);
    }
  }

  return (
    <div className="App">
      <NavigationContext.Provider value={{
          navigation,
          setCurrentPage
      }}>
        <Background>
          <Layout onScrollFrame={onScrollFrame} >
            <Profile />
            <StickyHeader isSticky={isStickyHeaderSticky} forwardedRef={stickyHeaderRef} />
            <Body>
              {navigation.page === "projects" ?
                <ProjectPortfolio />
              :navigation.page === "about" ?
                <About />
              :navigation.page === "contact" ?
                <></>
              :
                <></>
              }
            </Body>
          </Layout>
        </Background>
      </NavigationContext.Provider>
    </div>
  );
}

export default App;
