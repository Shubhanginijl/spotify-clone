import React from 'react';
import Logo from '../Pages/HeaderComponents/Logo';
// import Home from './Home';
// import Search from './Search';
// import YourLibrary from './YourLibrary';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Fragment } from 'react';

const UserLeftBlock = () => {
    return (
      <div className="userLeftBlock">
        <div className="logo">
          <Logo />
          <Router>
            <div className="leftcontent">
              <ul>
                <li>
                  <span>
                    <i class="fas fa-home"></i>
                  </span>
                  &nbsp;&nbsp;
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <span>
                    <i class="fas fa-search"></i>
                  </span>
                  &nbsp;&nbsp;
                  <Link to="/">Search</Link>
                </li>
                <li>
                  <span>||\</span>&nbsp;&nbsp;
                  <Link to="/">Your Library</Link>
                </li>
                <li className="next">
                  <span>
                    <i class="fas fa-plus-square"></i>
                  </span>
                  &nbsp;&nbsp;
                  <Link to="/">Create playlist</Link>
                </li>
                <li>
                  <span>
                    <i class="fas fa-heart"></i>
                  </span>
                  &nbsp;&nbsp;
                  <Link to="/">Liked songs</Link>
                </li>
              </ul>
            </div>
            <div className="line"></div>
            <div className="nextContent">
              <ul>
                <li>
                  <span>
                    <i class="far fa-arrow-alt-circle-down"></i>
                  </span>
                  &nbsp;&nbsp;
                  <Link to="/">Install App</Link>
                </li>
              </ul>
            </div>
          </Router>
        </div>
      </div>
    );
}

export default UserLeftBlock
