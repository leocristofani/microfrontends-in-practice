import React, { Component } from 'react';
import loadScript from './load_script';

function buildMicroFrontend(baseUrl, name) {
  class MicroFrontendWrapper extends Component {
    state = {
      MicroFrontend: null
    };
    componentDidMount() {
      loadScript(`${baseUrl}/api/embed-assets`, name).then((amdModule) => {
        this.setState({ MicroFrontend: amdModule.Component });
      });
    }
    render() {
      const { MicroFrontend } = this.state;
      return MicroFrontend ? <MicroFrontend {...this.props} baseApiUrl={`${baseUrl}/api`} /> : null;
    }
  }

  MicroFrontendWrapper.displayName = name;

  return MicroFrontendWrapper;
}

export default class MicroFrontends extends Component {
  static Songs = buildMicroFrontend('http://localhost:3002', 'Songs');
}