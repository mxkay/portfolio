import React, { useState, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import useWindowDimensions from "./hooks/useWindowDimensions";
import NavigationContext from "./hooks/NavigationContext";

import Background from "./components/Background/Background";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Body from "./components/Body/Body";
import ProjectPortfolio from "./components/ProjectPortfolio/ProjectPortfolio";


function App() {
  const { height, width } = useWindowDimensions();

  const [navigation, updateNavigation] = useState({ page: "projects" });
  const setCurrentPage = (value) => {
    updateNavigation({ ...navigation, page: value });
  }

  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const headerRef = useRef(null);
  const onScrollFrame = () => {
    if(headerRef) {
      setIsHeaderSticky(headerRef.current.getBoundingClientRect().top <= 0);
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
            <Header isSticky={isHeaderSticky} forwardedRef={headerRef} />
            <Body>
              {navigation.page === "projects" ?
                <ProjectPortfolio />
              :navigation.page === "about" ?
                <></>
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
