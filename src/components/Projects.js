import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import ProjectTile from './ProjectTile';
import '../styles/projects.scss';

const projectsData = [
  {
    name: 'SuchForgot',
    description: `[Class Project] Android app that detects when a vehicle has stopped and \
      turned off the engine. Data collected from the accelerometer sensor \
      is how the detection is done. We used the movement to know when the \
      vehicle has stopped and the engines vibration to know when the engine \
      has been turned off.`,
    linkTo: '',
    repoUrl: 'https://github.com/Marklb/SuchForgot',
  },
  {
    name: 'Mokbnb Progress Site',
    description: `Small ReactJs + Firebase app I made one night to learn \
      Firebase and get better at ReactJs. It is written as a user stories \
      organization app. It uses the Firebase live data api to syncronize the \
      client data as the servers data changes. When getting the link to add to \
      this site I noticed I must have changed something that caused the live \
      data loading to not always work, but the data is still passed to \
      firebase and will display the new data after refreshing the page.`,
    linkTo: '',
    repoUrl: 'https://github.com/Marklb/mokbnb-progress-site',
  },
  {
    name: 'MB Snippet Manager',
    description: `ReactJs app I started making recently to learn react-redux. \
      Only features implemented so far are Github authentication, gists read \
      from your account using Guthub API after authenticating app, firebase \
      authentication library to easy Github auth, and partial displaying a \
      gist.`,
    linkTo: '',
    repoUrl: 'https://github.com/Marklb/mb-snippet-manager',
  },
  {
    name: 'Mokbnb',
    description: `[Class project] The goal of this project was to implement a \
      Airbnb-like website. We did not get to fully finish all the features \
      we planned, only minimum requirement for the feature to work on some. \
      This was each members first time using ReactJs.`,
    linkTo: '',
    repoUrl: 'https://github.com/Marklb/CS673Airbnb',
  },
  {
    name: 'MARK_Framework',
    description: `[Class Project] Python micro framework that handles dynamic \
      routing and includes a simple templating engine.`,
    linkTo: '',
    repoUrl: 'https://github.com/Marklb/MARK_Framework',
  },
  {
    name: 'IMAP Email Client',
    description: `[Class Project] Text based python client that is able to \
      view all mail boxes, view a single mail box, create and delete mail \
      boxes, and and copy to another mail box.`,
    linkTo: '',
    repoUrl: 'https://github.com/Marklb/imapEmailClient',
  },
];

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
      <div className="projects">
        <p className="projects-not-done-notification">
          Detailed information pages have not been added yet.
        </p>

        {projectsData.map((data, i) => { return (
          <ProjectTile
            key={data.name}
            title={data.name}
            description={data.description}
            linkTo={data.linkTo}/>
        );})}

          <p className="projects-not-done-notification">
            More projects to be added.
          </p>
      </div>
    );
  }

}
