import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Expertise from './component/expertise';
import Header from './component/header';
import Nametag from './component/nametag';
import Portfolio from './component/portfolio';
import Profile from './component/profile';
import Works from './component/works';

function App() {
  return (
    <div className="wrap">
      <BrowserRouter>
        <Header />
        <Nametag />
        <Profile />
        <Works />
        <Routes>
          <Route path="/2023" element={<Portfolio />}></Route>
        </Routes>
        <Expertise />
      </BrowserRouter>

    </div>
  );
}

export default App;
