import { useState } from 'react'

const MouseTracker = ({render}) => {
    const [pos, setPost] = useState({
        x: 0,
        y: 0,
    })

    function handleMouseChange(e) {
        setPost({
            x: e.clientX,
            y: e.clientY
        })
    }
  return (
    <div className="w-screen h-72 border" onMouseMove={handleMouseChange}>
        {render(pos)}
    </div>
  )
}

export default MouseTracker