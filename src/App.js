import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import './App.css';
import Home from './pages/LogSign'
import Agenda from './pages/Agenda'
import Chat from './pages/Chat'
import Mail from './pages/Mail'

//import About from './pages/About'
//import Loging from './pages/Loging'
//import NoMatch from "./pages/NoMatch";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/agenda" element={<Agenda/>}   />          
           <Route path="/chat" element={<Chat/>}  />
          <Route path="/mail" element={<Mail />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}
export default App;