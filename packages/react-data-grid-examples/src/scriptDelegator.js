/* eslint-disable no-unused-vars */

let isDevEnv = function() {
  return window.location.hostname === 'localhost';
};

let delegateScript = function(fileName) {
  let src = (isDevEnv() ? 'http://localhost:8080/' : 'dist/') + fileName;

  let script = document.createElement('script');
  script.setAttribute('src', src);
  document.getElementsByTagName('body')[0].appendChild(script);
};
