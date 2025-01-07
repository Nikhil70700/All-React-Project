import { useState } from 'react'
import { ToggleSwitch } from './Project/ToggleSwitch/ToggleSwitch';

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="container">
      <ToggleSwitch/>
    </section>
    
  );
};

export default App
