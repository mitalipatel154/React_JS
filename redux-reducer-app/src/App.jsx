import { useDispatch, useSelector } from "react-redux";
import { incrementCount, decrementCount, incrementCount2, decrementCount2, reset } from "./features/counterSlice";

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) =>
    typeof state[0] === "number" ? state[0] : state[0]?.count ?? 0
  );

  const count2 = useSelector((state) =>
    state[1]?.count2 ?? state[0]?.count2 ?? 0
  );

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Count: {count}</h2> 
      <h2>Count2: {count2}</h2>

      <button onClick={() => dispatch(incrementCount())}>+ Count</button>
      <button onClick={() => dispatch(decrementCount())}>- Count</button>

      <br /><br />

      <button onClick={() => dispatch(incrementCount2())}>+ Count2</button>
      <button onClick={() => dispatch(decrementCount2())}>- Count2</button>

      <br /><br />

      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
