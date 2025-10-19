import { useState } from 'react'
import './App.css'
import { Button } from '@mantine/core';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Button variant="filled" color="rgba(147, 199, 219, 1)">Button</Button>
    </>
  )
}

export default App
