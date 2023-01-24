import UserContext from './contexts/UserContext';
import { useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage/MainPage';
import SignUp from './pages/Enrollments/SignUp';
import SignIn from './pages/Enrollments/SignIn';
import FirstSteps from './pages/Enrollments/FirstSteps';
import WelcomePage from './pages/WelcomePage/WelcomePage';

function App() {
  let [userData, setUserData] = useState('');

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/:userId/FirstSteps" element={<FirstSteps />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/welcome" element={ <WelcomePage />} />
            <Route path="/mainpage" element={<MainPage />} />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider> 
  );
}

export default App;
