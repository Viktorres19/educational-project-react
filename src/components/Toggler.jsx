import { useToggle } from '../hooks/useToggle'

const Toggler = () => {
  const [isVisible, toggle] = useToggle()
  const [isVisible2, toggle2] = useToggle()
  return (
    <div>
      <button onClick={toggle}>{isVisible ? 'hide' : 'Show'}</button>
      {isVisible && <h1>Hidden text</h1>}
      <button onClick={toggle2}>{isVisible2 ? 'hide' : 'Show'}</button>
      {isVisible2 && <h1>Hidden text</h1>}
    </div>
  );
};

export default Toggler