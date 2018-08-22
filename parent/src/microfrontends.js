import axios from 'axios';
import React, { Component } from 'react';
import { loadScript, loadStyle } from './load_script';

function buildMicroFrontend(baseUrl, name) {
  class MicroFrontendWrapper extends Component {
    state = {
      MicroFrontend: null
    };
    componentDidMount() {
      axios.get(`${baseUrl}/api/embed-assets`)
        .then(({ data }) => {
          loadScript(`${baseUrl}/${data.js}`, name).then((amdModule) => {
            this.setState({ MicroFrontend: amdModule.Component });
          });
          loadStyle(`${baseUrl}/${data.css}`);
        });
    }
    render() {
      const { MicroFrontend } = this.state;
      return MicroFrontend ? <MicroFrontend {...this.props} /> : null;
    }
  }

  MicroFrontendWrapper.displayName = name;

  return MicroFrontendWrapper;
}

export default class MicroFrontends extends Component {
  static Artists = buildMicroFrontend('http://localhost:3001', 'Artists');
  static Songs = buildMicroFrontend('http://localhost:3003', 'Songs');
}