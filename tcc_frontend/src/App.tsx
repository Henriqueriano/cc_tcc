import './index.css';
import LoginView from './Views/LoginView.tsx';
import DashBoardView from './Views/DashBoardView.tsx';
import MainView from './Views/MainView.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export function App() {
    return (
          <BrowserRouter>
            <Routes>
                < Route path='/' element = { <LoginView /> } />
                < Route path='/dashboard' element = { <DashBoardView /> } />
                < Route path='/main' element = { <MainView /> } />
            </Routes>
          </BrowserRouter>
      );
}

export default App;
