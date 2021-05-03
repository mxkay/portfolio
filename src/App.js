import { BrowserRouter as Router } from 'react-router-dom';
import Switch from './components/Switch';
import Background from './components/Background';
import Main from './modules/main';

const routes = [
  {
    path: '/',
    Component: Main,
    Wrapper: () => <></>
  }
];

const App = () => {
  return (
    <Router>
      <Background />
      <Switch routes={routes} />
    </Router>
  );
};

export default App;
