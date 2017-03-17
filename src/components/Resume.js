import React from 'react';
// import { Link } from 'react-router';
import '../styles/resume.scss';
// import MyPdfViewer from './MyPdfViewer';
import ReactPDF from 'react-pdf';


/*
*/
export default class Resume extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <div className="resume">
        {/*<MyPdfViewer />*/}
        {/*<ReactPDF file="MarkBerryResume_2017_Web.pdf" />*/}

      </div>
    );
  }

}
