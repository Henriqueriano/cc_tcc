import './index.css';
import LoginView from './Views/LoginView.tsx';
import DashBoardView from './Views/DashBoardView.tsx';
import FeaturesView from './Views/FeaturesView.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export function App() {
    return (
          <BrowserRouter>
            <Routes>
                < Route path='/' element = { <LoginView /> } />
                < Route path='/dashboard' element = { <DashBoardView /> } />
                    < Route path='/features' element = { <FeaturesView /> } />
            </Routes>
          </BrowserRouter>
      );
}

export default App;
