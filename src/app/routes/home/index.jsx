import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";

import style from './styles.scss';

export default class Home extends React.PureComponent {

  render() {
    return (
      <div className="main-content">
        <h1>
          {/* {lastPost.name} */}
        </h1>
      </div>
    );
  }
};
