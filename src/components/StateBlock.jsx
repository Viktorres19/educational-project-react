import { useState } from 'react'
const StateBlock = () => {
  const [age, setAge] = useState(0)
  const increaseAge = () => {
    setAge(age + 1)
    console.log(age)
  }
  const [inputValue, setInputValue] = useState('')
  const handleInput = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div className='state-block'>
      <div>{age}</div>
      <button onClick={increaseAge}>Increase age</button>
      <div>
        input value: {inputValue}
      </div>
      <input type="text" value={inputValue} onChange={handleInput} />
    </div>
  );
};

export default StateBlock