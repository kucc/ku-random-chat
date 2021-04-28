import React, { useState } from 'react';

function Settings() {
  const [volume, setVolume] = useState(0);
  const [alarm, setValue] = useState(true);
  const onIncrease = () => setVolume(volume+1);
  const onDecrease = () => setVolume(volume-1);
  const alarmOn = () => setValue(true);
  const alarmOff = () => setValue(false);
  return (
    <div>
      <h1>{volume}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
      <h1>{alarm}</h1>
      <div>
          <button onClick={alarmOn}>On</button>
          <button onClick={alarmOff}>Off</button>
      </div>
    </div>
  );
}

export default Settings;