import _ from 'lodash';
import useInterval from '@use-it/interval';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Root, Button } from './styles';

function toDoubleDigits(number) {
  const digits = _.split(_.toString(number), '', 2);
  if (digits.length === 1) return ['0', ...digits];
  return digits;
}

const Counter = ({ delay = 1000, cb, startDuration = 10 }) => {
  const [count, setCount] = useState(startDuration);
  const [isRunning, setIsRunning] = useState(true);
  const [minuteTens, minuteUnits] = toDoubleDigits(_.floor(count / 60));
  const [secondTens, secondUnits] = toDoubleDigits(count % 60);

  const toggleRefresh = () => setIsRunning((prevState) => !prevState);

  useInterval(
    () => {
      setCount((currentCount) => currentCount - 1);
    },
    isRunning ? delay : null
  );

  useEffect(() => {
    if (count === 0) {
      cb();
      setCount(startDuration);
    }
  }, [count, cb, startDuration]);

  return (
    <Root>
      <h1>
        {minuteTens}
        {minuteUnits}:{secondTens}
        {secondUnits}
      </h1>
      <Button onClick={toggleRefresh}>{isRunning ? 'Disable' : 'Enable'} auto-refresh</Button>
    </Root>
  );
};

Counter.propTypes = {
  cb: PropTypes.func,
  delay: PropTypes.number,
  startDuration: PropTypes.number,
};

export default Counter;
