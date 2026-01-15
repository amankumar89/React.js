import { useEffect, useState } from "react";
import AppLayout from "../AppLayout";

const DATA = [
  "Hello",
  "Namaste",
  "Hola",
  "Bonjour",
  "Hallo",
  "Ciao",
  "Konnichiwa",
  "Nǐ hǎo",
  "As-salāmu ʿalaykum",
  "Annyeonghaseyo",
];

const Greeting = ({ max }) => {
  const [greetings, setGreetings] = useState<string | null>(null);
  const [num, setNum] = useState<number>(1);

  useEffect(() => {
    setNum(() => Math.floor(Math.random() * DATA.length));
  }, []);

  useEffect(() => {
    if (max === num) {
      window.localStorage.setItem("jackpot", "true");
    } else window.localStorage.setItem("jackpot", "false");

    const randomGreet = DATA[num];

    setGreetings(randomGreet);

    return () => {
      console.log("Clean up");
      window.localStorage.removeItem("jackpot");
    };
  }, [num, max]);

  return (
    <AppLayout title="Random Greetings">
      <div className="my-4 text-2xl font-semibold text-gray-800 hover:text-blue-600 transition">
        {`Hello, ${greetings}`}
      </div>
    </AppLayout>
  );
};

export default Greeting;
