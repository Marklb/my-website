import React from 'react';
import '../styles/home.scss';

/*
*/
export default class Home extends React.Component {
  static propTypes = {
    // children: PropTypes.element
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <div className="home">
        <div className="home-section">
          <p>Name: Mark Berry</p>
        </div>

        <div className="home-section">
          <p>Degrees: </p>
          <ul className="home-info-list-ul">
            <li>M.S. Computer Science, New Jersey Institute of Technology</li>
            <li>B.S. Computer Science, University of Memphis</li>
          </ul>
        </div>

        <div className="home-section home-new-site-notice">
          <p>Not much information is here as am in the process of remaking this site.</p>
        </div>
      </div>
    );
  }

}
