import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Predict from './components/Predict';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/prediction"  element={<Predict/>} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
