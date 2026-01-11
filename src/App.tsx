import Colorizer from "./use-state/Colorizer";
import Counter from "./use-state/Counter";

const App = () => {
  return (
    <div className="App px-8">
      <Counter />
      <Colorizer />
    </div>
  );
};

export default App;
