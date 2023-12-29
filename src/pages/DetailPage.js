import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const DetailPage = ({ work }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = work.find(item => item.id === parseInt(id));

   const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="detail-container">
      <div className="detail-content">
        <div className="detail-id">ID: {id}</div> 
        <h2>{item.title}</h2>
        <p>{item.memo}</p>
        <button className='fin' onClick={goBack}>뒤로 가기</button>
      </div>
    </div>
  );
};

export default DetailPage;
