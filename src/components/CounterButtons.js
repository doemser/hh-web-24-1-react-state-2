export default function CounterButtons({ onSubtractCount, onAddCount }) {
  return (
    <>
      <button onClick={onSubtractCount}>-1</button>
      <button onClick={onAddCount}>+1</button>
    </>
  );
}
