import { useState } from 'react'

export const useCount = () => {
  const [state, setState] = useState(0)
  const increase = () => {
    setState((prev) => prev + 1)
  }
  const decrease = () => {
    setState((prev) => prev - 1)
  }
  const restart = () => {
    setState(0)
  }

  return { state, increase, decrease, restart }
}