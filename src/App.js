import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationContext from "./hooks/NavigationContext";

import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Nav from "./components/Nav/Nav";

function App() {
  const [navigation, updateNavigation] = useState({ page: "projects" });
  const setCurrentPage = (value) => {
    updateNavigation({ ...navigation, page: value });
  }

  return (
    <div className="App">
      <NavigationContext.Provider value={{
          navigation,
          setCurrentPage
      }}>
        <Background>
          <Header />
          <Body>
            <Nav />
          </Body>
        </Background>
      </NavigationContext.Provider>
    </div>
  );
}

export default App;
