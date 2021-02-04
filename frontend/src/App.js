import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
function App() {

  const [List, setList] = useState([]);
  const [Value, setValue] = useState("");

  useEffect(() => {
    axios.get(`/api/values`)
      .then(res => {
        console.log('response: ', res.data)
        setList(res.data);
        console.log(List)
      })
  }, [])

  const handlePushValue = async (e) => {
    e.preventDefault();
    axios.post(`/api/value`, {
      value: Value
    }).then(res => {
      if (res.data.success) {
        console.log('push : ', res.data)
        setValue("");
      } else {
        alert("값을 디비에 넣지 못햇습니다.")
      }
    })
  }

  const renderList = () =>
    List.length && List.map((list, id) =>
      <li key={id}>{list.value}</li>
    )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <ul>
            {renderList()}
          </ul>
          <form className="example">
            <input type="text" value={Value} onChange={(e) => {
              setValue(e.target.value)
            }} placeholder="저장 할 값을 입력하시오." />
            <button onClick={handlePushValue}>서버전송</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
