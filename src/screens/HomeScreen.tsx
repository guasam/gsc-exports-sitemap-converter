import React, { useState } from 'react';
import logo from '@assets/images/logo.png';

const HomeScreen: React.FC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div id='HomeScreen' className='screen'>
      <div className='main-heading'>
        <h1>Github Pages React Environment</h1>
      </div>
      <div className='main-teaser'>
        <img src={logo} title='Cauldron by Guasam' />
        <div>
          Custom project for developing Desktop Applications using Electron.
          <br />
          This project makes use of Electron, React, Typescript, Webpack to
          serve the best environment for development with hot-reloading of
          modules and styles
        </div>
      </div>
      <div className='versions center'>
        <span>
          Cauldron <span id='cauldron-version'></span>
        </span>
        <span>
          Electron <span id='electron-version'></span>
        </span>
        <span>
          Chrome <span id='chrome-version'></span>
        </span>
        <span>
          Node <span id='node-version'></span>
        </span>
      </div>
      <p className='main-teaser small center'>
        Click below button(s) to update the application &quot;counter&quot;
        state. For faster development experience, this application will update
        using Hot Reload without needing to restart/reload after code changes
      </p>
      <div className='center'>
        <button onClick={() => setCounter(counter + 1)}>
          Increment Counter <span>{counter}</span>
        </button>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>
          Decrement Counter <span>{counter}</span>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
