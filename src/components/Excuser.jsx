import { useState } from 'react'
import axios from 'axios'

const Excuser = () => {
  const [generatedExcuse, setGeneratedExcuse] = useState('')
  const fetchExcuse = (excuse) => {
    axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}`)
      .then((res) => {
        setGeneratedExcuse(res.data[0].excuse)
      })
  }

  return (
    <div className="excuser">
      <h1>Generate an Excuse</h1>
      <button onClick={() => fetchExcuse('party')}>Party</button>
      <button onClick={() => fetchExcuse('family')}>Family</button>
      <button onClick={() => fetchExcuse('office')}>Office</button>
      <p>{generatedExcuse}</p>
    </div>
  );
};

export default Excuser