import React from "react";
import "./index.css";
import LinkTable from "../LinkTable";
import PageHeader from "../PageHeader";

let linksList1 = [
  {"title": "Google" , "link": "https://www.google.com/"},
  {"title": "Reddit" , "link": "https://www.reddit.com/"}
]

let linksList2 = [
  {"title": "Github" , "link" : "https://github.com/"},
  {"title": "Hacker News" , "link": "https://news.ycombinator.com/"}
]

let sectionsList = [
  {"title": "Time Pass", "list": linksList1}, {"title": "Work", "list":linksList2}
]

function App() {

  return (
    <div className="App">
      <PageHeader />
      <LinkTable sectionsList={sectionsList} />
    </div>
  );

}

export default App;
