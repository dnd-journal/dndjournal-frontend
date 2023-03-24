import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignUp from './pages/signUp';
import LogIn from './pages/logIn';
import { GlobalStyle } from './constants/globalStyles';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <Routes>
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/log-in' element={<LogIn/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
