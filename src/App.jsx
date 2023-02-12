import React from 'react';
import './App.css';
import Sidebar from './sidebar.jsx';
import Memolist from './memo/memolist.jsx';
import Xpage from './xpage.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import { render } from '@testing-library/react';

function App() {

  return (
  <BrowserRouter>
    <div className="App">
      <div className='App__sidebar'>
        <Sidebar />
      </div>
      <div className='App__main'>
        <Routes>
          <Route path="/" element={<Memolist />} />
          <Route path="/xpage" element={<Xpage />} />
        </Routes>
      </div>
    </div>

</BrowserRouter>
  );
}



export default App;