const PropTypes = require('prop-types');
const React = require('react');
require('../../../../themes/react-data-grid-checkbox.css');

class CheckboxEditor extends React.Component {
  static propTypes = {
    value: PropTypes.bool,
    rowIdx: PropTypes.number,
    column: PropTypes.shape({
      key: PropTypes.string,
      onCellChange: PropTypes.func
    }),
    dependentValues: PropTypes.object
  };

  handleChange = (e: Event) => {
    this.props.column.onCellChange(this.props.rowIdx, this.props.column.key, this.props.dependentValues, e);
  };

  render(): ? ReactElement {
    let checked = this.props.value != null ? this.props.value : false;
    let checkboxName = 'checkbox' + this.props.rowIdx;
    return (
      <div className="react-grid-checkbox-container checkbox-align" onClick={this.handleChange}>
        <input className="react-grid-checkbox" type="checkbox" name={checkboxName} checked={checked} />
        <label htmlFor={checkboxName} className="react-grid-checkbox-label" />
      </div>);
  }
}

module.exports = CheckboxEditor;
