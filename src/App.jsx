import Axios from 'axios'
import { useEffect, useState } from 'react'
import AgePredict from './components/AgePredict'
import Excuser from './components/Excuser'

//fetch function returns a promise
/* fetch('https://catfact.ninja/fact')
  .then(res => res.json())
  .then(data => console.log(data)) */

const App = () => {
  const [catFact, setCatFact] = useState()

  useEffect(() => {
    fetchCatFact()
  }, [])

  const fetchCatFact = () => {
    Axios.get('https://catfact.ninja/fact')
    .then(res => {
      setCatFact(res.data.fact)
    })
  }

  return (
    <div className="App">
      <div>
        <div><b>Interesting about cats:</b> <i>{catFact}</i></div>
        <button onClick={fetchCatFact}>Get cat fact</button>
        <p></p>
      </div>
      <AgePredict />
      <Excuser />
    </div>
  )
}

export default App
