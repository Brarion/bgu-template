import React from "react";

import './counter.css'

const Counter = () => {
  const [state, setState] = React.useState<number>(0);

  const onClick = () => {
    setState(v => v + 1);
  }

  return <div className="counter" data-testid="counter">
    <button type="button" onClick={onClick}>Кнопка</button>
    <p>{state}</p>
  </div>
}

export default Counter;