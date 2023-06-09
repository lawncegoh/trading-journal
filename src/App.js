import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
