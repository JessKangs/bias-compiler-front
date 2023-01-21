import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage/MainPage';
import SignUp from './pages/Enrollments/SignUp';
import SignIn from './pages/Enrollments/SignIn';
import FirstSteps from './pages/Enrollments/FirstSteps';
import WelcomePage from './pages/WelcomePage/WelcomePage';

function App() {
  return (
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
  );
}

export default App;
