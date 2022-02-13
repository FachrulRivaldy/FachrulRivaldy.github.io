import './App.css';
import Sidebar from './components/sidebar/sidebar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/content/home';
import AboutMe from './components/content/aboutme';

function App() {
  return (
   <div className='App'>
     <Router>
       <Sidebar />
       <Navbar />
       <Home />
       <AboutMe />
       <Routes>
          <Route path='/' />
       </Routes>
     </Router>
   </div>
  );
}

export default App;
