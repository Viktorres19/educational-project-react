import { CounterContext } from '../CounterProvider'
import { useContext } from 'react'

const Counter = () => {
  const { counter, setCounter } = useContext(CounterContext)

  const changeCounter = (value) => {
    if (counter > -1 && counter < 11) {
      setCounter((prevState) => prevState + value)
    }
  }

  return (
    <div>
      {counter}
      <button onClick={() => changeCounter(1)}>
        Increment
      </button>
      <button onClick={() => changeCounter(-1)}>
        Decrement
      </button>
    </div>
  )
}

export default Counter