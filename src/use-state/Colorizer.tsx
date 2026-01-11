import { useState } from "react";
import AppLayout from "../AppLayout";

function getRandomColor() {
  return "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
}
const Colorizer = () => {
  const [color, setColor] = useState<string>(() => getRandomColor());

  function handleClick() {
    setColor(() => getRandomColor());
  }

  return (
    <AppLayout title="Colorizer">
      <div
        style={{backgroundColor: color}}
        className="w-96 h-96 rounded-md my-4"
      />
      <button
        type="button"
        onClick={handleClick}
        className="w-96 px-4 text-xl font-medium border border-neutral-400 border-radius-4 cursor-pointer rounded-md"
      >
        Change Color
      </button>
    </AppLayout>
  );
};

export default Colorizer;
