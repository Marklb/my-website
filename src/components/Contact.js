import React from 'react';
import { Link } from 'react-router';
import '../styles/contact.scss';

/*
*/
export default class Contact extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <div className="contact">
        <div className="contact-section">
          <p>Name: Mark Berry</p>
        </div>

        <div className="contact-section">
          <p>Email: MarkBerry867@gmail.com</p>
        </div>

        <div className="contact-section">
          <Link to="https://github.com/Marklb" className="contact-link">
            <i className="fa fa-github fa-lg contact-icon-left" />
            Github
          </Link>
        </div>

      </div>
    );
  }

}
