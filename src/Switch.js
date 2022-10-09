import './Switch.css';

function Switch({on, action}) {
  return (
    <button
      onClick={() => action(!on)}
      className="Switch"
    >{ on ? "Turn Off" : "Turn On"}</button>
  );
}

export default Switch;
