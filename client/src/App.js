import './App.css';
import AppNavbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <Routes>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/about" component={About} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
