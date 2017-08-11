const React = require('react');

module.exports = class extends React.Component {
  render() {
    const codeSample = `let _rows = [];
for (var i = 0; i < 1000; i++) {
  _rows.push({
    id: i,
    title: 'Title ' + i,
    count: i * 1000
  });
}

const rowGetter = (i) => _rows[i];

const rowsCount = () => _rows.length;`;

    return (
      <div>
        <p>The rows property should be an array of objects whose property names match the key property of each column</p>
        <div className="code-block js">
          <pre><code className="javascript">{codeSample}</code></pre>
        </div>
      </div>);
  }
};
