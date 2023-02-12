import React, { useState,useEffect } from 'react';
import './App.css';
import Sidebar from './sidebar.jsx';
import Memolist from './memo/memolist.jsx';
import Xpage from './xpage.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import { render } from '@testing-library/react';

function App() {


let [dummyPost, setDummyPost] = useState('')

useEffect(()=>{
  fetch('http://localhost:4000/discussions')
  .then(res => res.json())
  .then(data => {

    setDummyPost(data)
  })
},[])
console.log(dummyPost)

  return (
  <BrowserRouter>
    <div className="App">
      <div className='App__sidebar'>
        <Sidebar />
      </div>
      <div className='App__main'>
        <Routes>
          <Route path="/" element={<Memolist dummyPost={dummyPost}/>} />
          <Route path="/xpage" element={<Xpage />} />
        </Routes>
      </div>
    </div>

</BrowserRouter>
  );
}



export default App;