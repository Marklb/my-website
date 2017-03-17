import React, { PropTypes } from 'react';
import NavBar from './NavBar';
import '../styles/app.scss';


export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="app">
        <div className="app-top-header">
          <h1 className="app-top-title">Mark Berry</h1>
        </div>
        <NavBar />
        <div className="app-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
