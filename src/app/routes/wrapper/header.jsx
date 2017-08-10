import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";

import styles from './styles/styles-header.scss';

export default class Header extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    content: [],
  }

  componentDidMount() {
    var posts = database().ref('master/');
    posts.on('value', (data) => {
      this.setState({ content: data.val() });
    });
  };

  getValue(val) {
    return this.state.posts[0] && this.state.posts[0][val];
  }

  render() {
    return (
      <header>
        <div className="logo">
          <Link to='/'><h1>Logo</h1></Link>
        </div>
        <nav>
          <ul className="nav-large">
            <li><Link to='/travel'>Travel</Link></li>
            <li><Link to='/story-blog'>Story Blog</Link></li>
            <li><Link to='/photography'>Photography</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
};
