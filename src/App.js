import './App.css';
import classNames from 'classnames';
import {useState} from 'react';

function App() {
  const [lightOn, setLightOn] = useState(false)
  return (
    <div className="App">
      <div>
        <button
          onClick={() => setLightOn(!lightOn)}
          className={classNames({
            switch: true,
            on: !lightOn,
            off: lightOn,
          })}
        >{ lightOn ? "Turn Off" : "Turn On"}</button>
        <div
          className={classNames({
            lightbulb: true,
            on: lightOn,
            off: !lightOn,
          })}
        >&nbsp;</div>
      </div>
    </div>
  );
}

export default App;
