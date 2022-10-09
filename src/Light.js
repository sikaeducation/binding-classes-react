import './Light.css';
import classNames from 'classnames';

function Light({ on }) {
  return (
    <div
      className={classNames({
        Light: true,
        on: on,
        off: !on,
      })}
    >&nbsp;</div>
  );
}

export default Light;
