import React, { useState, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationContext from "./hooks/NavigationContext";

import Background from "./components/Background/Background";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import ProjectPortfolio from "./components/ProjectPortfolio/ProjectPortfolio";

function App() {
  const [navigation, updateNavigation] = useState({ page: "projects" });
  const setCurrentPage = (value) => {
    updateNavigation({ ...navigation, page: value });
  }

  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const onScrollFrame = (event) => {
    if(event) {
      setIsHeaderSticky(event.scrollTop >= 64);
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
            <Header isSticky={isHeaderSticky} />
            <Profile />
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
