import { useGetCat } from "../hooks/useGetCat"

export const Cat = () => {
  const { data, isCatLoading, refetchData } = useGetCat()
  if (isCatLoading) return <h1> loading... </h1>
  return (
    <div>
      <h1>{data?.fact}</h1>
      <button onClick={refetchData}>refetch data</button>
    </div>
  )
}