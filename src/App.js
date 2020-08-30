import React from 'react';
import './App.css';
import blog from './blog.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="wrap">
      <div className="info">
        <div className="title">
          Personal Project Playground
        </div>
        <div className="about">
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <a href="https://github.com/ialy1595">&nbsp;Github</a>
          </div>
          <div>
            <img className="blog-image" src={blog} alt="blog"></img>
            <a href="https://ialy1595.github.io/">&nbsp;Blog</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faUser} />
            <a href="https://ialy1595.github.io/about/">&nbsp;About</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
