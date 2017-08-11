const React = require('react');
const Draggable = require('./Draggable');
require('../../../themes/react-data-grid-header.css');

class ResizeHandle extends React.Component {
  style = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 6,
    height: '100%'
  };

  render(): ?ReactElement {
    return (
      <Draggable {...this.props}
        className="react-grid-HeaderCell__resizeHandle"
        style={this.style}
      />
    );
  }
}

ResizeHandle.displayName = 'ResizeHandle';

module.exports = ResizeHandle;
