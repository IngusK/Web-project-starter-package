import React from 'react';
import style from './style.scss';
import {Link} from 'react-router-dom';

const Home = () => (
  <div className="wrapper">
    <h1>Home page!</h1>
    <Link to="/about">About</Link>
  </div>
);

export default Home;
