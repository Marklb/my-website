import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import '../styles/project-tile.scss';


/*
*/
export default class ProjectTile extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <div className="project-tile">
        <div className="project-tile-header">
          <Link className="project-tile-header-title" to={this.props.linkTo}>
            {this.props.title}
          </Link>
          
        </div>
        <div className="project-tile-body">
          {this.props.description}
        </div>
      </div>
    );
  }

}
// {/*<div className="project-tile-header-more">
//   <Link to={this.props.linkTo}>
//     More
//     {/* <i className="fa fa-angle-right"></i> */}
//     <i className="fa fa-angle-double-right" />
//     {/* <i className="fa fa-arrow-right"></i> */}
//   </Link>
// </div>*/}
