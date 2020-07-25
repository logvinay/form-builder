import React, {useState, useEffect} from "react";

export interface IFormProps {

}

export function Form(props: IFormProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // get called componentDidMount and componentDidUpdate
    return () => {

    }
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}