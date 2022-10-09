import './App.css';
import {useState} from 'react';
import Switch from './Switch';
import Light from './Light';

function App() {
  const [lightOn, setLightOn] = useState(false);

  return (
    <div className="App">
      <div>
        <Switch on={lightOn} action={setLightOn} />
        <Light on={lightOn} />
      </div>
    </div>
  );
}

export default App;
