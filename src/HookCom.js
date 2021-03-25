import React, { useEffect, useState } from 'react';

const HookCom = ({ tet }) => {
  const [employ, setEmploy] = useState({ ceo: 0, salary: 1000 })
  const [count, setCount] = useState(0);
  const handle = (x) => {
    console.log('x :', x);
    setEmploy((prevState) => ({
      salary: x * prevState.salary
    }))
  }
  console.log('state hook : ', employ);
  let x = employ.ceo + 1;
  useEffect(() => {
    document.title = `test1`;
    console.log('effect : ');
    return () => {
      // cleanup   
      console.log('clear');
    }
  }, [tet])
  return (
    <div>
      <button onClick={() => handle(x)}>Test + </button>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default HookCom;