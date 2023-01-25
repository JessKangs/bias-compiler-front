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
import AddBias from './pages/WelcomePage/AddBias';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import ListMyBias from './pages/WelcomePage/ListMyBias';

function App() {
  let [userData, setUserData] = useState('');

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/:userId/welcome" element={ <WelcomePage />} />
            <Route path="/:userId/addBias" element={<AddBias />} />
            <Route path="/:userId/listBias" element={<ListMyBias />} />
            <Route path="/:biasId/mainPage" element={<MainPage />} />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider> 
  );
}

export default App;
