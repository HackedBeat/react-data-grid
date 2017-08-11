let React = require('react');
let ReactDOM = require('react-dom');
let ReactRouter = require('react-router');

let gettingStarted = require('./scripts/documentation01-gettingstarted');
let apiReference = require('./scripts/documentation02-apireference');
let componentsDocs = require('./scripts/documentation03-components');

let { Route, RouteHandler } = ReactRouter;

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="page-header">Documentation</h1>
        <RouteHandler/>
      </div>
    );
  }
}

let routes = (
  <Route handler={App}>
    <Route name="gettingstarted" handler={gettingStarted} />
    <Route name="apireference" handler={apiReference} />
    <Route name="componentsDocs" handler={componentsDocs} />
  </Route>
);

ReactRouter.run(routes, function(Handler) {
  ReactDOM.render(<Handler/>, document.getElementById('documentation'));
});
