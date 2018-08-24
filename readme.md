# Microfrontends in Practice

This repo is an example of micro-frontends using the following approach:

## Approach

- Create AMD build of micro-frontend to be embeded into parent application;
- Microfrontend server exposes an endpoint that returns path to micro-frontend .js .css;
- Parent, which is the app that integrates all the micro-frontends, loads .js and .css of each micro-frontend at runtime with javascript asynchronously;
- Microfrontends communicate with each other via custom DOM events.

## Running the example application

Open your favorite terminal, `cd into-this-repo` and type the follow the steps below:

  1. Artists: install depencencies, build and run dev. server
    1.1. `cd artists/client`

    1.2. `npm install`

    1.3. `cd ../server && npm install`

    1.4. `cd ../utils && npm install`

    1.5. `./run_build.sh`

    1.6. `./run_dev.sh`

    1.7. Note that your browser will open at `http://localhost:3002/`. This is the standalone view of artists micro-frontend

    1.8. Go back to your terminal and open a new tab to start the second micro-frontend

  2. Songs: install depencencies, build and run dev. server
    2.1.`cd songs/client`

    2.2. `npm install`

    2.3. `cd ../server && npm install`

    2.4. `cd ../utils && npm install`

    2.5. `./run_build.sh`

    2.6. `./run_dev.sh`

    2.7. Note that your browser will open at `http://localhost:3004/`. This is the standalone view of songs micro-frontend

    2.8. Go back to your terminal and open a new tab to start the parent
  
  3. Playlist: install depencencies, build and run dev. server
    3.1.`cd playlist/client`

    3.2. `npm install`

    3.3. `cd ../server && npm install`

    3.4. `cd ../utils && npm install`

    3.5. `./run_build.sh`

    3.6. `./run_dev.sh`

    3.7. Note that your browser will open at `http://localhost:3006/`. This is the standalone view of playlist micro-frontend

    3.8. Go back to your terminal and open a new tab to start the parent

  4. Parent install depencencies and run
    4.1. `cd parent`

    4.2. `npm install`

    4.3. `npm start`

    4.4. Note that your browser will open at `http://localhost:3000/`. This is the parent application that integrates the micro-frontends.
