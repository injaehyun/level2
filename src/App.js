import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import './App.css';


function App() {
  const [work, setWork] = useState([
    { id: 1, title: '리액트를 배워봅시다', memo: '어렵지만 배워봅시다. 도움이 되겠지...', completed: false }
  ]);
  const [title, setTitle] = useState(' ');
  const [memo, setMemo] = useState('');

  const clickButton = () => {
    const add = {
      id: work.length + 1, //이거 말고 다르게 어떻게 생성하지....?
      title: title,
      memo: memo,
      completed: false
    };
    setWork([...work, add]);
    setTitle('');
    setMemo('');
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const memoChangeHandler = (event) => {
    setMemo(event.target.value);
  };

  const completeTask = (id) => {
    const newWork = work.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
      );
    setWork(newWork);
  };

  const deleteTask = (id) => {
    const newWork = work.filter(item => item.id !== id);
    setWork(newWork);
  };

  return (
    <Routes>
      <Route path="/" element={
        <div className='back'>
          <div className='top'>
            <div>MY ToDo List!</div>
            <div>React</div>
          </div>

          <div className='inputandbutton'>
            <div>
              &nbsp; 제목 : <input value={title} onChange={titleChangeHandler}></input>
              &nbsp; 내용 : <input value={memo} onChange={memoChangeHandler}></input>
            </div>
            <div> <button onClick={clickButton} className='button'>추가하기</button> </div>
          </div>

          <div className='head'>
            <h1>Working....</h1>
          </div>
          <div className='zone'>
            {work.filter(item => !item.completed).map((item) => (
              <div key={item.id} className='box'>
                <div className='detail'>  <Link to={`/detail/${item.id}`}>상세보기</Link> </div>
                <h2>{item.title}</h2>
                <p>{item.memo}</p>
                <div className='boxbutton'>
                  
                  <button className='del' onClick={() => deleteTask(item.id)}>삭제하기</button>
                  <button className='fin' onClick={() => completeTask(item.id)}>{item.completed ? '되돌리기' : '완료'}</button>
                </div>
              </div>
            ))}
          </div>

          <div className='head'>
            <h1>Done....</h1>
          </div>
          <div className='zone'>
            {work.filter(item => item.completed).map((item) => (
              <div key={item.id} className='box'>
                <div className='detail'> <Link  to={`/detail/${item.id}`}>상세보기</Link> </div>
                <h2>{item.title}</h2>
                <p>{item.memo}</p>
                <div className='boxbutton'>
                 
                  <button className='del' onClick={() => deleteTask(item.id)}>삭제하기</button>
                  <button className='fin' onClick={() => completeTask(item.id)}>{item.completed ? '되돌리기' : '완료'}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      } />
      <Route path="/detail/:id" element={<DetailPage work={work} />} />
    </Routes>
  );
}

export default App;



