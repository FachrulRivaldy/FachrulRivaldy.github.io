import './App.css';
import Sidebar from './components/sidebar/sidebar.jsx';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './home';
import AboutMe from './components/content/aboutme';
import Router from './router';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Sidebar />
      <Navbar />
      <Router />
    </div>
    </BrowserRouter>
  );
}

export default App;
