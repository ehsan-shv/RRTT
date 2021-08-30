import { decrement, increment, incrementByAmount } from '../store/counter'
import { useAppSelector, useAppDispatch } from '../store/hooks'

export interface CounterProps {}

const Counter: React.FC<CounterProps> = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        increment by 2
      </button>
    </div>
  )
}

export default Counter
