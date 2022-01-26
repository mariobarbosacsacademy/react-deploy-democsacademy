import react from 'react';
import profileImage from './img/profile-image.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React App Demo CSAcademy</h1>
      <h2>Teste Mario Barbosa</h2>
      <img src={profileImage} alt="profile-image" />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
