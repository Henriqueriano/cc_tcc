import './index.css';
import LoginView from './Views/LoginView.tsx';
import DashBoardView from './Views/DashBoardView.tsx';
import HomeView from './Views/HomeView.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export function App() {
    return (
          <BrowserRouter>
            <Routes>
                < Route path='/' element = { <LoginView /> } />
                < Route path='/dashboard' element = { <DashBoardView /> } />
                < Route path='/home' element = { <HomeView /> } />
            </Routes>
          </BrowserRouter>
      );
}

export default App;
