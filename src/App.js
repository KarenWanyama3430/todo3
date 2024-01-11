import './App.css';
import Signup from './Components/LoginSignup/Signup';
import Login from './Components/LoginSignup/Login';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TodoWrapper from './Components/Todo/TodoWrapper';


const App = () => {


  return (
    <Router>
      <Header/>
      <Routes>
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todowrapper" element={<TodoWrapper />} />
      </Routes>
    </Router>
  )
}

export default App