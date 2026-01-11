import { useState } from "react"
import AppLayout from "../AppLayout"

const Button = ({ title, onClick } : { title: string; onClick: () => void }) => {
  return <button type="button" className="inline-block h-8 px-4 border border-red-100 mr-2 mt-2" onClick={onClick}>{title}</button>
}

const numberLists = [1,2,3,4,5,6,7,8,9,10];
const randomNum = Math.floor(Math.random() * numberLists.length)

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<number>(randomNum);

  return (
    <AppLayout title="Counter">
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-semibold text-left mb-2">Counter Value: {count}</div>
        <div>
          <div className="font-semibold">Increment By:</div>
          <span>
          {numberLists.map((item: number) => (
            <button key={item} onClick={() => setValue(item)} type="button" className="inline-flex px-4! py-1! border border-red-100">
              {item}
            </button>
          ))}
          </span>
        </div>
      </div>
      <div className="">
        <Button onClick={() => setCount(prev => prev + value)} title={`Increment by ${value}`} />
        <Button onClick={() => setCount(prev => prev - value)} title={`Decrement by ${value}`} />
      </div>
    </AppLayout>
  )
}

export default Counter