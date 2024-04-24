import "./App.css";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="flex flex-col justify-center mt-24 items-center font-bold text-xl font-mono text-orange-700">
      Counter App using React Redux
      <Counter />
    </div>
  );
}

export default App;
