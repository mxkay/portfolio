import React, { useState, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import useWindowDimensions from "./hooks/useWindowDimensions";
import NavigationContext from "./hooks/NavigationContext";

import Background from "./components/Background/Background";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import ProjectPortfolio from "./components/ProjectPortfolio/ProjectPortfolio";


function App() {
  const { height, width } = useWindowDimensions();

  const [navigation, updateNavigation] = useState({ page: "projects" });
  const setCurrentPage = (value) => {
    updateNavigation({ ...navigation, page: value });
  }

  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const onScrollFrame = (event) => {
    if(event) {
      setIsHeaderSticky(event.scrollTop >= (width > 770 ? 64 : 240));
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
            <Header isSticky={isHeaderSticky} />
            {navigation.page === "projects" ?
              <ProjectPortfolio />
            :navigation.page === "about" ?
              <></>
            :navigation.page === "contact" ?
              <></>
            :
              <></>
            }
          </Layout>
        </Background>
      </NavigationContext.Provider>
    </div>
  );
}

export default App;
