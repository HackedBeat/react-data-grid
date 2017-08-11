const React = require('react');
const PropTypes = require('prop-types');
const markdown = require('markdown');

class DocumentContainer extends React.Component {
  static propTypes = {
    documentContent: PropTypes.string.isRequired,
    documentName: PropTypes.string.isRequired,
    documentPath: PropTypes.string.isRequired
  };

  getHtml = () => {
    return { __html: this.getMarkdownAsHtml() };
  };

  getMarkdownAsHtml = () => {
    return markdown.parse(this.props.documentContent);
  };

  render() {
    return (
      <div className={'pull-left'} style={ {marginLeft: '100px'} }>
        <h3>{ this.props.documentName }</h3>
        <div dangerouslySetInnerHTML={ this.getHtml() } />
      </div>);
  }
}

class ComponentDocs extends React.Component {
  state = { selectedDocumentIndex: 0, documentContent: '' };

  componentDidMount() {
    this.getDocumentContent(0);
  }

  getDocumentContent = (key) => {
    let documentPath = generatedDocs[key].path;
    $.ajax({
      url: documentPath,
      success: function(documentContent) {
        this.setState({ documentContent: documentContent, selectedDocumentIndex: key });
      }.bind(this)
    });
  };

  onNavBarClicked = (key, e) => {
    this.getDocumentContent(key);
    e.preventDefault();
  };

  getComponentDocs = () => {
    let docsToRender = [];
    for (let key in generatedDocs) {
      if (generatedDocs.hasOwnProperty(key)) {
        let className = key === this.state.selectedDocumentIndex ? 'active' : '';
        let doc = generatedDocs[key];
        docsToRender.push(
          <li key={key} role="presentation" className={className}>
            <a href="#" onClick={function(index, e) { this.onNavBarClicked(index, e); }.bind(this, key) }>{doc.name}</a>
          </li>);
      }
    }

    return docsToRender;
  };

  renderNavBar = () => {
    return (
      <ul className="nav nav-pills nav-stacked pull-left">
        { this.getComponentDocs() }
      </ul>);
  };

  render() {
    let selectedDocumentIndex = this.state.selectedDocumentIndex;
    return (
      <div>
        <h1 id="js-api-refernce">Components Docs</h1>
        { this.renderNavBar() }
        <DocumentContainer
          documentContent={this.state.documentContent}
          documentName={generatedDocs[selectedDocumentIndex].name}
          documentPath={generatedDocs[selectedDocumentIndex].path}/>
      </div>
    );
  }
}


module.exports = ComponentDocs;
