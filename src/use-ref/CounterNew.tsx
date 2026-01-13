import { useEffect, useRef, useState } from "react";
import AppLayout from "../AppLayout";

const CounterNew = () => {
  const count = useRef(0);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    count.current = count.current + 1;
  });

  //   function handleClick() {
  //     setCount((prev) => prev + 1);
  //   }
  return (
    <AppLayout title="Counter - useRef">
      {count.current}
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
        className="border ml-4"
      />
      {/* <button type="button" onClick={handleClick} className="border ml-4">
        Click me
      </button> */}
    </AppLayout>
  );
};

export default CounterNew;
