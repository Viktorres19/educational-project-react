const App = () => {
  const name = <h3>Gonsalo</h3>
  return (
    <>
      <User name={name} />
      <User name="Pedro" />
      <User name="Marcelo" />
    </>
  )
}

const User = ({name}) => {
  return (
    <div className="user">
      <h2>{name}</h2>
    </div>
  )
}

export default App
