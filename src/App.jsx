import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navigation from './components/Navigation';
import Herosection from './components/Hero';

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Navigation />
    <Herosection />
  </div>
  )
}

export default App
