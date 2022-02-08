import './App.css';
import Sidebar from './components/sidebar/sidebar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Content from './components/content/content';

function App() {
  return (
   <div className='App'>
     <Router>
       <Sidebar />
       <Navbar />
       <Content />
       <Routes>
          <Route path='/' />
       </Routes>
     </Router>
   </div>
  );
}

export default App;
