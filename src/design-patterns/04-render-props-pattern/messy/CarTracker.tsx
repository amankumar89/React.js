import { useState } from "react"

const CarTracker = () => {
    const [pos, setPos] = useState({x: 0, y: 0})

  return (
    <div className="w-screen h-72 border" onMouseMove={(e) => setPos({x: e.clientX, y: e.clientY})}>
        <p>
            Car is at post({pos.x}, {pos.y})
        </p>
    </div>
  )
}

export default CarTracker