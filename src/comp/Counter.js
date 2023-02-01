import React, { useState } from "react";
import { Button } from '@mui/material';
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <Button variant="outlined"
        onClick={() => { setCount(count+1) }}
      >
        React MUI Button
      </Button>
    </>
  );
};

export default Counter;
