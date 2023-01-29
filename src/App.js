import UserContext from './contexts/UserContext';
import { useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';

import { Background } from './components/Background';
import MainPage from './pages/MainPage/MainPage';
import SignUp from './pages/Enrollments/SignUp';
import SignIn from './pages/Enrollments/SignIn';
import AddBias from './pages/WelcomePage/AddBias';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import ListMyBias from './pages/WelcomePage/ListMyBias';
import BiasQuotes from './pages/BiasQuotesPage/BiasQuotes';
import BiasFacts from './pages/BiasFacts/BiasFacts';
import MyThoughts from './pages/BiasThoughts/MyThoughts';
import BiasLinks from './pages/BiasLinks/BiasLinks';
import BiasMemories from './pages/BiasMemories/BiasMemories';
import ListQuotes from './pages/BiasQuotesPage/ListQuotes';
import AddBiasQuotes from './pages/BiasQuotesPage/AddBiasQuotes';
import AddFact from './pages/BiasFacts/AddFact';
import ListFacts from './pages/BiasFacts/ListFacts';
import ListLinks from './pages/BiasLinks/ListLinks';
import AddLink from './pages/BiasLinks/AddLink';
import AddMemory from './pages/BiasMemories/AddMemory';
import ListMemories from './pages/BiasMemories/ListMemories';
import AddThought from './pages/BiasThoughts/AddThought';
import ListThoughts from './pages/BiasThoughts/ListThoughts';

function App() {
  let [userData, setUserData] = useState('');
  let [biasData, setBiasData] = useState('');

  return (
    <UserContext.Provider value={{ userData, setUserData, biasData, setBiasData }}>
      <div className="App">
          <Background>
            <Router>
              <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<SignIn />} />
                <Route path="/:userId/welcome" element={ <WelcomePage />} />

                <Route path="/:userId/addBias" element={<AddBias />} />
                <Route path="/:userId/listBias" element={<ListMyBias />} />
                <Route path="/:biasId/mainPage" element={<MainPage />} />

                <Route path="/:biasId/memories" element={<BiasMemories />} />
                <Route path="/:biasId/addMemory" element={<AddMemory />} />
                <Route path="/:biasId/listMemories" element={<ListMemories />} />

                <Route path="/:biasId/thoughts" element={<MyThoughts />} />
                <Route path="/:biasId/addThought" element={<AddThought />} />
                <Route path="/:biasId/listThoughts" element={<ListThoughts />} />
                
                <Route path="/:biasId/listQuotes" element={<ListQuotes />} />
                <Route path="/:biasId/addQuote" element={<AddBiasQuotes />} />
                <Route path="/:biasId/quotes" element={<BiasQuotes />} />

                <Route path="/:biasId/facts" element={<BiasFacts />} />
                <Route path="/:biasId/listFacts" element={<ListFacts />} />
                <Route path="/:biasId/addFact" element={<AddFact />} />

                <Route path="/:biasId/links" element={<BiasLinks />} />
                <Route path="/:biasId/addLink" element={<AddLink />} />
                <Route path="/:biasId/listLinks" element={<ListLinks />} />

              </Routes>
            </Router>
          </Background>
        </div>
    </UserContext.Provider> 
  );
}

export default App;
