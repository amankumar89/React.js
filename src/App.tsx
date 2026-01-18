import MovieListHoc from "./hoc/MovieList";
import FindUser from "./use-effect/FindUser";
import Greeting from "./use-effect/Greeting";
import CounterNew from "./use-ref/CounterNew";
import Focus from "./use-ref/Focus";
import Colorizer from "./use-state/Colorizer";
import Counter from "./use-state/Counter";
import UserProfileContainer from "./design-patterns/01-container-presenter/with-pattern/components/profile/UserProfileContainer";
import CounterDesignPattern from "./design-patterns/02-controlled-uncontrolled-component/state-ref/components/Counter";
import AutoFocusInput from "./design-patterns/02-controlled-uncontrolled-component/state-ref/components/AutoFocusInput";
import CounterWithRef from "./design-patterns/02-controlled-uncontrolled-component/state-ref/components/CounterWithRef";

const App = () => {
  return (
    <div className="App px-8">
      {/* react-design-patterns */}
      <div className="flex flex-col gap-6">
        <CounterDesignPattern />
        <AutoFocusInput />
        <CounterWithRef />
      </div>
      <UserProfileContainer userId={1} />
      {/* hoc */}
      <MovieListHoc />
      {/* use-ref */}
      <Focus />
      <CounterNew />
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
