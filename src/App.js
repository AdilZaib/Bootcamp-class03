import React from 'react';
import './App.css';
import './Hello.css';

function Sum(props) {
  return <div className="intro">
          <div>
           <h1>My name is <strong>{props.name}</strong></h1>
            <h2>My age is {props.age}</h2>
          </div>
          <p>What are your hobbies</p>
          <ul>
            <li>Gaming</li>
            <li>Listening Songs</li>
            <li>Reading</li>
            <li>Cricket</li>
          </ul>
           
          </div>
}

export default Sum;
