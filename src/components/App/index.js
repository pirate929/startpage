import React from "react";
import "./index.css";
import LinkTable from "../LinkTable";
import PageHeader from "../PageHeader";

let linksList1 = [
  {"title": "Google" , "link": "https://www.google.com/"},
  {"title": "Reddit" , "link": "https://www.reddit.com/"}
];

let linksList2 = [
  {"title": "Github" , "link" : "https://github.com/"},
  {"title": "Hacker News" , "link": "https://news.ycombinator.com/"}
];

let sectionsList = [
  {"title": "Time Pass", "list": linksList1}, {"title": "Work", "list":linksList2}
];

let theme = "default";

function App() {

  return (
    <div className="App">
      <PageHeader theme={theme} />
      <LinkTable sectionsList={sectionsList} theme={theme} />
    </div>
  );

}

export default App;
