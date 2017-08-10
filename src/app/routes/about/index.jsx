import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";

import style from './styles.scss';

export default class About extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    aboutPageContent: [],
  }

  componentDidMount() {
    var aboutPage = database().ref('about/');
    aboutPage.on('value', (data) => {
      this.setState({ aboutPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.aboutPageContent[nr] && this.state.aboutPageContent[nr][val];
  }

  render() {
    return (
      <div className="about-content">
        <h2>About me</h2>
      </div>
    );
  }
};
