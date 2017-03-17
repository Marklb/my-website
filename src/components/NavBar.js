import React from 'react';
import { Link } from 'react-router';
import '../styles/nav-bar.scss';


/*
*/
export default class NavBar extends React.Component {
  static propTypes = {};

  static links = [
    { text: 'Home', to: '/' },
    { text: 'Projects', to: '/projects' },
    // { text: 'Resume', to: '/resume' },
    { text: 'Publications', to: '/publications' },
    { text: 'Contact', to: '/contact' },
  ];

  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <div className="nav-bar">
        <div className="nav-buttons">
          {NavBar.links.map((link, i) => { return (
              <Link key={`nav-${link.text}`} to={link.to} onlyActiveOnIndex 
                activeClassName="active">
                <span>{link.text}</span>
              </Link>);
          })}
        </div>
      </div>
    );
  }

};
