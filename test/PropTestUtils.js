/* @flow */
/** @jsx dom */


let React    = require('react');
let ReactDOM = require('react-dom');

class PropTestUtils {
  constructor(klass, props, container, callback) {
    this.klass = klass;
    this.container = container || document.createElement('div');
    this.props = props || {};

    this.render(callback);
  }

  render(callback) {
    let element = React.createElement(this.klass, this.props);
    this.component = ReactDOM.render(element, this.container, callback);
  }

  replaceProps(props, callback) {
    this.props = {};
    this.setProps(props, callback);
  }

  setProps(partialProps, callback) {
    if (this.klass == null) {
      console.warn(
        'setProps(...): Can only update a mounted or ' +
        'mounting component. This usually means you called setProps() on ' +
        'an unmounted component. This is a no-op.'
      );
      return;
    }
    Object.assign(this.props, partialProps);
    let element = React.createElement(this.klass, this.props);
    this.component = ReactDOM.render(element, this.container, callback);
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(this.container);
    this.klass = null;
  }
}

module.exports = PropTestUtils;
