import React from 'react';
import './index.css';

import LinkSection from '../LinkSection'

let linksList1 = [
  {"title": "Google" , "link": "https://www.google.com/"},
  {"title": "Reddit" , "link": "https://www.reddit.com/"}
]

let linksList2 = [
  {"title": "Github" , "link" : "https://github.com/"},
  {"title": "Hacker News" , "link": "https://news.ycombinator.com/"}
]

function App() {
  return (
    <div className="App">
      <LinkSection list={linksList1} title="Time Pass"/>
      <LinkSection list={linksList2} title="Work"/>
    </div>
  );
}

export default App;
