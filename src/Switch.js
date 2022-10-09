import './Switch.css';
import classNames from 'classnames';

function Switch({on, action}) {
  return (
    <button
      onClick={() => action(!on)}
      className={classNames({
        Switch: true,
        on: !on,
        off: on,
      })}
    >{ on ? "Turn Off" : "Turn On"}</button>
  );
}

export default Switch;
