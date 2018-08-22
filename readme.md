# Microfrontends in Practice

This repo is an example of microfrontend using the following approach:

## Approach

1. Create AMD build of microfrontend to be embeded into parent application;
2. Microfrontend server exposes an endpoint that returns path to microfrontend .js .css;
3. Parent, which is the app that integrates all the microfrontends, loads .js and .css of each microfrontend at runtime with javascript asynchronously;
4. Microfrontends communicate with each other via custom DOM events.

## Running the example application

Open your favorite terminal, `cd into-this-repo` and type the follow the steps below:

1. Artists: install depencencies, build and run dev. server

  1.1. `cd artists/client`
  1.2. `npm install`
  1.3. `cd ../server && npm install`
  1.4. `cd ../utils && npm install`
  1.5. `./run_build.sh`
  1.6. `./run_dev.sh`
  1.7. Note that your browser will open at `http://localhost:3002/`. This is the standalone view of artists microfrontend

  1.8. Go back to your terminal and open a new tab to start the second microfrontend

2. Songs: install depencencies, build and run dev. server

  2.1.`cd songs/client`
  2.2. `npm install`
  2.3. `cd ../server && npm install`
  2.4. `cd ../utils && npm install`
  2.5. `./run_build.sh`
  2.6. `./run_dev.sh`
  2.7. Note that your browser will open at `http://localhost:3004/`. This is the standalone view of songs microfrontend
  2.8. Go back to your terminal and open a new tab to start the parent

3. Parent install depencencies and run

  3.1. `cd parent`
  3.2. `npm install`
  3.3. `npm start`
  3.4. Note that your browser will open at `http://localhost:3000/`. This is the parent application that integrates the microfrontends.