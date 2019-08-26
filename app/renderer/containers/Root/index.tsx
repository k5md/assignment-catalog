import * as React from 'react';

export class Root extends React.Component<any, any> {
  renderDevTool() {

  }

  render() {
    return (
      <div className="container">
        {this.props.children}
        {this.renderDevTool()}
      </div>
    );
  }
}
