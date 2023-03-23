import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/layout/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './context/AuthContext';
import Questions from './components/Questions';
import { QuestionProvider } from './context/QuestionContext';

function App() {
  return (
    
    <BrowserRouter>
    <AuthProvider>
      <QuestionProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="/register" element={<Register />} />
     
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/questions" element={<Questions />} />
           <Route path="/login" element={<Login />} />

        </Route>

      </Routes> 
      </QuestionProvider>
    </AuthProvider>
    </BrowserRouter>
   
  );
}

export default App;
