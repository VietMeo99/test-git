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
  console.log('them 1');
  console.log('develop them 2');
  console.log('test 2 them 1');
  console.log('test 1 them 1');
  console.log('test 1 them 2');
  console.log('test 1 them 3');
  console.log('test 1 them 4');
  console.log('develop them 3');
  console.log('delete previous commit ');

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