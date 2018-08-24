import React from 'react';
import MicroFrontends from './microfrontends';

import './app.css';

export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__logo">Mi<strong>Songs</strong></h1>
      </header>
      <div className="app__main">
        <div className="app__main__column">
          <div className="microfrontend__wrapper">
            <MicroFrontends.Artists authToken="" basename="" />
          </div>
        </div>
        <div className="app__main__column">
          <div className="microfrontend__wrapper">
            <MicroFrontends.Playlist authToken="" basename="" />
          </div>
          <div className="microfrontend__wrapper">
            <MicroFrontends.Songs authToken="" basename="" />
          </div>
        </div>
      </div>
    </div>
  );
}