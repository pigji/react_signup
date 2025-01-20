import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';


const Home = () => {
  return (
    <div className='homeBox'>
      <div className='content'>
        <img src={process.env.PUBLIC_URL + '/img/프로필사진1.png'} alt="메인이미지" />
        <h2>지혜의 Pet Shop에 오신걸 환영합니다🥰</h2>
        <p>회원이 아니라면 회원가입을 진행해 주세요.</p>
      </div>
      <Link to="/login">로그인</Link>
      <Link to="/signup">회원가입</Link>
    </div>
  );
};

export default Home;