import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Info from './components/info/Info';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="watch/:id" element={<Watch />} />
          <Route path="info/:id" element={<><Home /><Info /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
