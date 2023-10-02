import Item from './components/Item'
import StateBlock from './components/StateBlock'

const App = () => {
  const name = 'Gonsalo'
  return (
    <>
      <div>
        <User name={name} />
        <User name="Pedro" />
        <User name="Marcelo" />
      </div>
      <StateBlock />
    </>
  )
}

const User = ({name}) => {
  const isGreen = true
  const languages = ['Python', 'Javascript', 'PHP']
  return (
    <div className="user">
      <h2>{name}</h2>
      <h3 style={{color: "red"}}>This has color</h3>
      {
        isGreen ? <button>Green button</button> : ''
      }
      {
        languages.map((language, key) => {
          return <Item key={key} language={language} />
        })
      }
      
    </div>
  )
}

export default App
