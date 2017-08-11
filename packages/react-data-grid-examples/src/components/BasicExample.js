const React = require('react');
let ColsDescription = require('./ColsDescription');
let RowsDescription = require('./RowsDescription');
let RenderGridDescription = require('./RenderGrid');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h3 id="js-basic-example">A Simple Example</h3>
        <p>The most basic implementation of ReactDataGrid requires 4 properties; an array of columns, a rowGetter function to retrive a row for a given index, the number of rows the grid expects and the minimum height of the grid.</p>
        <p>The columns property is an array of object that has at a minimum key and name properties</p>
        <ColsDescription />
        <RowsDescription />
        <RenderGridDescription />
      </div>);
  }
});
