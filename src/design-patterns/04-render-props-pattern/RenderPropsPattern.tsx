import BikeTracker from "./messy/BikeTracker"
import CarTracker from "./messy/CarTracker"
import MouseTracker from "./with-pattern/MouseTracker"
import MouseTrackerWithChildren from "./with-pattern/MouseTrackerWithChildren"

const RenderPropsPattern = () => {
   return (
    <div className="flex flex-col gap-8 p-8">
        {/* <CarTracker  />
        <BikeTracker /> */}

        {/* <MouseTracker render={(post) => (
            <p>
                Car is at {post.x}, {post.y}
            </p>
        )} />

        <MouseTracker render={(post) => (
            <p>
                Bike is at {post.x}, {post.y}
            </p>
        )} /> */}

        <MouseTrackerWithChildren>
            {(pos) => (

            <p>
                Car is at {pos.x}, {pos.y}
            </p>
            )}
        </MouseTrackerWithChildren>

        <MouseTrackerWithChildren>
            {(pos) => (

            <p>
                Bike is at {pos.x}, {pos.y}
            </p>
            )}
        </MouseTrackerWithChildren>
    </div>
  )
}

export default RenderPropsPattern