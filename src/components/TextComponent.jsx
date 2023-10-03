import { useEffect } from 'react'

const TextComponent = () => {
  useEffect(() => {
    console.log('component mounted')
  }, [])
  return (
    <div>
      Text
    </div>
  );
};

export default TextComponent