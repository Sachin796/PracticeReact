// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import Tweet from "./tweet";
import "./App.css";
function App() {
  return (
    <div className="app">
      <h1> This is the app component (Inside app.js)</h1>
      <div className="displaydir">
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
      <div className="displaydir">
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
      <div className="displaydir">
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
}
export default App;
