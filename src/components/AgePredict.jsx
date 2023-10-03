import Axios from 'axios'
import { useState } from 'react';

const AgePredict = () => {
  const [name, setName] = useState('')
  const [predictedAge, setPredictedAge] = useState(null)
  /* const handleSetName = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
    console.log(name)
  } */
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
      .then(res => {
        setPredictedAge(res.data)
      })
  }

  return (
    <div className='age-predict'>
      <input type="text" placeholder='Ex. Pedro...' onChange={(event) => setName(event.target.value)} />
      <button onClick={fetchData}>Predict Age</button>

      <h2>Predicted Age Name: {predictedAge?.name}</h2>
      <h2>Predicted Age: {predictedAge?.age}</h2>
      <h2>Predicted Count: {predictedAge?.count}</h2>
    </div>
  );
};

export default AgePredict