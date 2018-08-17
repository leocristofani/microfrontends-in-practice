import React from 'react';
import MicroFrontends from './microfrontends';

import './app.css';

export default function App() {
  return (
    <div className="app">
      <header className="app__header">Parent Header</header>
      <div className="app__main">
        <div className="app__main__box">
          <MicroFrontends.Songs authToken="" basename="" />
        </div>
      </div>
      <footer className="app__footer">Parent Footer</footer>
    </div>
  );
}