import React from 'react';
import MicroFrontends from './microfrontends';

import './app.css';

export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 class="app__logo">Mi<strong>Songs</strong></h1>
      </header>
      <div className="app__main">
        <div className="app__main__box">
          <div className="app__main__box__inner">
            <MicroFrontends.Artists authToken="" basename="" />
          </div>
        </div>
        <div className="app__main__box">
          <div className="app__main__box__inner">
            <MicroFrontends.Songs authToken="" basename="" />
          </div>
        </div>
      </div>
      <footer className="app__footer">&copy; Microfrontends in Practice 2018. I hope this is useful!</footer>
    </div>
  );
}