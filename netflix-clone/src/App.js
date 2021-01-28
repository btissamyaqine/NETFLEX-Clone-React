import React from 'react';
import './App.css';
import Row from "./component/Row";
import requests from "./requests";
// https://netflix-clone-react-a6eb5.web.app/


function App() {
  return (
    <div className="App">
      <h1>Hey am Btissam YAQINE! Let's Build  Netflix for my Lovely Husband today :*)</h1>
      <Row title="NETFLIX ORIGINALS" setchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" setchUrl={requests.fetchTrendingssssss} />

    </div>
  );
}

export default App;
