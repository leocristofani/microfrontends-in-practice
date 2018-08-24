import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error, info);
  }

  render() {
    return this.state.hasError
      ? (
        <div>
          <p className="alert alert-warning">
            Something went wrong
          </p>
        </div>
      ) : this.props.children;
  }
}