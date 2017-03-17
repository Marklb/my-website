import React from 'react';
import '../styles/publications.scss';

/*
*/
export default class Publications extends React.Component {
  static propTypes = {
    // children: PropTypes.element
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  myName(s) {
    return (<span className="my-name">{s}</span>);
  }

  render() {
    return (
      <div className="publications">
        <div className="publications-section">
          <p>Publications: </p>
          <ul className="publications-info-list-ul">

            <li>Z. Cao, C.Q. Wu, and {this.myName("M.L. Berry")}. On Routing of 
              Multiple Concurrent User Requests in Multi-Radio Multi-Channel 
              Wireless Mesh Networks. In Proceedings of the 17th International 
              Conference on Parallel and Distributed Computing, Applications 
              and Technologies, Guangzhou, China, December 16-18, 2016 
              (PDCAT16, Best Paper Award).</li>

            <li>C.Q. Wu, {this.myName("M.L. Berry")}, K.M. Grieme, S. Sen, 
              N.S.V. Rao, R.R. Brooks, G. Cordone. A Source-Attractor Approach 
              to Network Detection of Radiation Source. In Proceedings of the 
              IEEE International Conference on Multisensor Fusion and 
              Integration for Intelligent Systems, Baden-Baden, Germany, 
              September 19 – 21, 2016 (MFI16).</li>

            <li>N.S.V. Rao, S. Sen, K.M. Grieme, {this.myName("M.L. Berry")}, 
              C.Q. Wu, G. Cordone, and R.R. Brooks. Datasets for Radiation 
              Network Algorithm Development and Testing. In Proceedings of the 
              IEEE Nuclear Science Symposium & Medical Imaging Conference, 
              Strasbourg, France, October 29 – November 6, 2016 (NSS16).</li>

            <li>S. Sen, N.S.V. Rao, C.Q. Wu, {this.myName("M.L. Berry")}, K.M. 
              Grieme, R.R. Brooks, and G. Cordone. Performance Analysis of 
              Wald-Statistic Based Network Detection Methods for Radiation 
              Sources. In Proceedings of the 19th International Conference on 
              Information Fusion, Heidelberg, Germany, July 5-8, 2016 
              (FUSION16).</li>

            <li>S. Sen, N.S.V. Rao, R.R. Brooks, G. Cordone, C.Q. Wu, 
              {this.myName("M.L. Berry")}, and K.M. Grieme. On Simple 
              Computationally-Light Network Detection Methods for Radiation 
              Sources. In Proceedings of Symposium on Radiation Measurements 
              and Applications, University of California, Berkeley, May 22-26, 
              2016 (SORMA16).</li>

            <li>C.Q. Wu, {this.myName("M.L. Berry")}, K.M. Grieme, S. Sen, 
              N.S.V. Rao, R.R. Brooks, and C. Temples. Network Detection of 
              Radiation Sources Using ROSD Localization. In Proceedings of the 
              IEEE Nuclear Science Symposium & Medical Imaging Conference, San 
              Diego, CA, USA, October 31 – November 7, 2015 (NSS15).</li>

          </ul>
        </div>
      </div>
    );
  }

}
