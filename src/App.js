import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './modules/Todos';

function App() {
  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');
  const work = useSelector(state => state.todos.todos); // Redux 스토어에서 할 일 목록을 가져옵니다.
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다.

  const clickButton = () => {
    dispatch(addTodo(title, memo)); // 새 할 일을 추가하는 액션을 디스패치합니다.
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
    dispatch(toggleTodo(id)); // 할 일의 완료 상태를 토글하는 액션을 디스패치합니다.
  };

  const deleteTask = (id) => {
    dispatch(deleteTodo(id)); // 할 일을 삭제하는 액션을 디스패치합니다.
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
                  <button className='fin' onClick={() => completeTask(item.id)}>
                    {item.completed ? '되돌리기' : '완료'}
                  </button>
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
                  <button className='fin' onClick={() => completeTask(item.id)}>
                    {item.completed ? '되돌리기' : '완료'}
                  </button>
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



