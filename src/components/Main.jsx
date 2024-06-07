import React from 'react';

const Main = () => {
  return (
    <main className="home">
      <div className="home-content">
        <div className="greeting">Hi, I am</div>
        <h1 className="name">Tomasz Gajda</h1>
        <div className="title">Front-end Developer / UI Designer</div>
        <div className="social-media">
          <a className="a" href="mailto:chizhimchijioke@gmail.com">📧</a>
          <a className="a" href="https://github.com/chizhinime" target="_blank" rel="noopener noreferrer">🐱</a>
          <a className="a" href="https://linkedin.com/in/ChizhinimeC" target="_blank" rel="noopener noreferrer">🔗</a>
        </div>
      </div>
      <div className="home-img">
        <img src="/src/assets/image 17.png" alt="Tomasz Gajda"/>
      </div>
    </main>
  );
};

export default Main;