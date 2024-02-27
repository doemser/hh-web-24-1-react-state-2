import { useState } from "react";
import CountDisplay from "./components/CountDisplay";
import CounterButtons from "./components/CounterButtons";

export default function LiftingUpState() {
  const [count, setCount] = useState(1337);

  function handleSubtractCount() {
    setCount(count - 1);
  }

  function handleAddCount() {
    setCount(count + 1);
  }

  return (
    <>
      <h2>Lifting up State</h2>

      <CountDisplay brokkoliCount={count} />

      <CounterButtons
        onSubtractCount={handleSubtractCount}
        onAddCount={handleAddCount}
      />
    </>
  );
}
