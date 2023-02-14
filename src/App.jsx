import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './sidebar.jsx';
import Memolist from './memo/memolist.jsx';
import Xpage from './xpage.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import { render } from '@testing-library/react';

function App() {


  let [dummyPost, setDummyPost] = useState([])


  useEffect(() => {
    fetch('http://localhost:4000/discussions')
      .then(res => res.json())
      .then(data => {
        setDummyPost(data)
      })
  }, [])
  // console.log(dummyPost)



  function post(username, icon, memo) {

    this.id = Date.now();
    this.username = username;
    this.picture = icon;
    this.content = memo;
    this.createdAt = new Date().toLocaleDateString('ko-kr');

  };

  function newpost({ username, icon, memo }) {

    console.log('함수가 실행됐습니다~ 유후~')

    let newdata = new post(username, icon, memo) // 위에있는 post 가 복사되어 들어감

    fetch('http://localhost:4000/discussions', { // fetch 로 가져온 데이터를 프로미스 객체로 들어온다.
      method: "POST", // 들어온 데이터를 응답할 메소드,헤더,바디 를 작성해준다.
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newdata)
    }).then(res => res.json())  // then 으로 프로미스 객체를 한꺼풀 벗겨줘~
      .then(data => setDummyPost(prev => [data, ...prev])) // 벗겨진 값을 set stats에 할당해서 넣어준다.

  }


  function deleteEvent({ postId }) {

    console.log(`${postId} : 아이디가 잘 출력되네요?`)
    
    if(window.confirm('진짜 삭제할건가영?')){
      fetch("http://localhost:4000/discussions/id:", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postId) // 아까 포장해놨던 newObj를 조심스레 POST 아저씨한테 건낸다.
      })
        .then(response => response.json()) // 택배가 왔다. 포장을까자
        .then((data) => { setDummyPost(data) })
    }
  }

  function updateEvent({ postId, text }) {

    console.log(postId)
    // console.log(text)

    let update = {content:`${text}`}

    console.log(update)

    fetch(`http://localhost:4000/discussions/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(update) // 아까 포장해놨던 newObj를 조심스레 POST 아저씨한테 건낸다.
      })
        .then(response => response.json()) // 택배가 왔다. 포장을까자
        .then((data) => { setDummyPost(data) })
    
  }


  return (
    <BrowserRouter>
      <div className="App">
        <div className='App__sidebar'>
          <Sidebar />
        </div>
        <div className='App__main'>
          <Routes>
            <Route path="/" element={<Memolist dummyPost={dummyPost} newpost={newpost} deleteEvent={deleteEvent} updateEvent={updateEvent}/>} />
            <Route path="/xpage" element={<Xpage />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}



export default App;