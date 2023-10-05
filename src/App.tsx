import './App.css'
import { Person, Country } from './components/Person'

function App() {

  const getAge = (name: string): number => {
    return 99
  }

  return (
    <>
      <div className='App'>
        <Person
          name="Pedro"
          email="pedro@gmail.com"
          age={21}
          isMarried={true}
          friends={["jake", "jessica", "jerry"]}
          country={Country.Portugal} //there is no Portugal and it will be underlined as a mistake
        />
      </div>
    </>
  )
}

export default App
