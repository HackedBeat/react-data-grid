let React = require('react');

module.exports = function(mockTagName: string) {
  return (props) => {
    let _mockTagName = mockTagName || 'div';

    return React.DOM[_mockTagName](null, props.children);
  };
};
