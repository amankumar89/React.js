import FindUser from "./use-effect/FindUser";
import Greeting from "./use-effect/Greeting";
import Colorizer from "./use-state/Colorizer";
import Counter from "./use-state/Counter";

const App = () => {
  return (
    <div className="App px-8">
      {/* use-effect */}
      <FindUser />
      <Greeting max={8} />
      {/* use-state */}
      <Counter />
      <Colorizer />
    </div>
  );
};

export default App;
