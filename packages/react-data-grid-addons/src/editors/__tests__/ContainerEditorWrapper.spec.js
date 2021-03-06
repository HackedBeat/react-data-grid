const Enzyme = require('enzyme');
const PropTypes = require('prop-types');
const React = require('react');

const ContainerEditorWrapper = require('../ContainerEditorWrapper');

class FakeComponent extends React.Component {
  getValue = jasmine.createSpy()
  getInputNode = jasmine.createSpy()
  render() {return (<div />);}
}

class FakeContainer extends React.Component {
  render() { return (<FakeComponent ref={this.props.refCallback} />); }
}

FakeContainer.propTypes = {
  refCallback: PropTypes.func.IsRequired
};

describe('ContainerEditorWrapper', () => {
  describe('Basic tests', () => {
    it('should create a new ContainerEditorWrapper instance wrapping the passed in component', () => {
      // ACT
      let ConnectedContainerEditorWrapper = ContainerEditorWrapper(FakeContainer);
      const renderedComp = Enzyme.mount(<ConnectedContainerEditorWrapper />);

      // ASSERT
      expect(renderedComp).toBeDefined();
      expect(renderedComp.find('ContainerEditorWrapper').length).toBe(1);
      expect(renderedComp.find('FakeContainer').length).toBe(1);
      expect(renderedComp.find('FakeComponent').length).toBe(1);
    });

    describe('when calling the getValue on ContainerEditorWrapper', () => {
      it('should call the components getValue', () => {
        // ACT
        let ConnectedContainerEditorWrapper = ContainerEditorWrapper(FakeContainer);
        const renderedComp = Enzyme.mount(<ConnectedContainerEditorWrapper />);

        // ASSERT
        let redneredContainerEditorWrapper = renderedComp.find('ContainerEditorWrapper').node;
        let renderedFakeComponent = renderedComp.find('FakeComponent').node;
        redneredContainerEditorWrapper.getValue();

        expect(renderedComp).toBeDefined();
        expect(renderedFakeComponent.getValue).toHaveBeenCalled();
      });
    });

    describe('when calling the getInputNode on ContainerEditorWrapper', () => {
      it('should call the components getInputNode', () => {
        // ACT
        let ConnectedContainerEditorWrapper = ContainerEditorWrapper(FakeContainer);
        const renderedComp = Enzyme.mount(<ConnectedContainerEditorWrapper />);

        // ASSERT
        let redneredContainerEditorWrapper = renderedComp.find('ContainerEditorWrapper').node;
        let renderedFakeComponent = renderedComp.find('FakeComponent').node;
        redneredContainerEditorWrapper.getInputNode();

        expect(renderedComp).toBeDefined();
        expect(renderedFakeComponent.getInputNode).toHaveBeenCalled();
      });
    });
  });
});
