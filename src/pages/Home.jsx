import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const Home = () => {
  // data, isLoading, isError, refetch - are built in
  const { data: catData, isLoading, isError, refetch } = useQuery(['cat'], () => {
    return axios.get('https://catfact.ninja/fact').then((res) => res.data)
  }) // 2 arguments - function that fetch the data

  if (isError) {
    return <h2>Sorry, there was an error</h2>
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="home">
      <h1> THIS IS THE HOME PAGE {catData?.fact}</h1>
      <button onClick={refetch}>Update Data</button>
    </div>
  )
}