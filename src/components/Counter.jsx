import { useCount } from '../hooks/useCount'

const Counter = () => {
  const { state: count, increase, decrease, restart } = useCount()
  return (
    <>
      <div>
        { count }
      </div>
      <div>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={restart}>restart</button>
      </div>
    </>
  )
}

export default Counter