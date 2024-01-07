import { useState } from 'react'
import './App.css'
import DataContextProvider from './Context/DataContextProvider'
import Desssert from './Components/Desssert'
import Forms from './Components/Forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <DataContextProvider>
      <Desssert/>
      <Forms/>
    </DataContextProvider>
  )
}

export default App
