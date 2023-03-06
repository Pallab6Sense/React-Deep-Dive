import { useState } from 'react';
import ChildA from './ChildA';

const PropsDrilling = () => {
  const [name, setName] = useState('Pallab Majumdar');
  return (
    <div>
      <ChildA name={name} />
    </div>
  );
};

export default PropsDrilling;
