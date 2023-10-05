import { Cat } from '../components/Cat'
import Counter from '../components/Counter'
import Toggler from '../components/Toggler'

export const Home = () => {

  return (
    <div className="home">
      <Toggler />
      <Cat />
      <Counter />
    </div>
  )
}