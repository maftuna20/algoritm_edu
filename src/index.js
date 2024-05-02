import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Work from './pages/work/Work'
import Navbar from './pages/navbar/Navbar'
import Know from './pages/know/Know'


const Main = () => {
  return(
    <div></div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Main/>
    <Navbar/>
    {/* <Footer/> */}
      <Routes>
    
        <Route path='/О нас' element={<About />} />
        <Route path='/Видеоуроки' element={<Work />} />
        <Route path='/Результаты' element={<Know/>} />
        <Route path='/Проверьте свой сертификат' element={<Blog />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
