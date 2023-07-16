import './App.css';

// import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Chessboard from './components/chessboard.js';

function App() {
  return (
    <>
    <Router>
     {/* <Navbar/> */}
    <Chessboard/>

    </Router>


    </>
   
  );
}

export default App;
