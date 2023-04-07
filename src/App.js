import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignUp from './pages/signUp';
import LogIn from './pages/logIn';
import { GlobalStyle } from './constants/globalStyles';
import { UserProvider } from './contexts/UserContext';
import CharacterSheet from './pages/characterSheet';

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/log-in' element={<LogIn />} />
            <Route path='/' element={<CharacterSheet/>} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
