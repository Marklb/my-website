import React, { PropTypes } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
// import s from '../styles/navBar.style';

import _ from 'lodash';

require("../styles/nav-bar.scss");


/*
*/
export default class NavBar extends React.Component {
  static propTypes = {
    
  };

  static links = [
    {'text': 'Home', to: '/'},
    {'text': 'Projects', to: '/projects'},
    {'text': 'Resume', to: '/resume'},
    {'text': 'Contact', to: '/contact'},
  ];

  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <div className='nav-bar'>
        <div className='nav-buttons'>
          {NavBar.links.map((link, i) => {
            return (
              <Link key={i}
                to={link.to}
                onlyActiveOnIndex={true}
                activeClassName='active'>
                <span>{link.text}</span>
              </Link>);
          })}
        </div>
      </div>
    );
  }

  /*
  Event Callbacks
  */



};
