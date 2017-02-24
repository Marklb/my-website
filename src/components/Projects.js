import React, { PropTypes } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
// import s from '../styles/project.style';

import ProjectTile from './ProjectTile';

import _ from 'lodash';

require("../styles/projects.scss");


/*
*/
export default class Projects extends React.Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <div className='projects'>
        {/* <p>To Be Completed</p> */}
        <ProjectTile
          title='A Project'
          description=''
          linkTo=''/>
        <ProjectTile
          title='A Project'
          description=''
          linkTo=''/>
        <ProjectTile
          title='A Project'
          description=''
          linkTo=''/>
      </div>
    );
  }

  /*
  Event Callbacks
  */



};
