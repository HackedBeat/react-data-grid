const React = require('react');

module.exports = React.createClass({
  render: function() {
    const codeSample = `const columns = [
  {
    key: 'id',
    name: 'ID'
  },
  {
    key: 'title',
    name: 'Title'
  },
  {
    key: 'count',
    name: 'Count'
  }
]`;

    return (
      <div>
        <p>The columns property is an array of objects that has at a minimum key and name properties</p>
        <div className="code-block js">
          <pre>{codeSample}</pre>
        </div>
      </div>);
  }
});
