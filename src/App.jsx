import { useState } from 'react'
import './App.css'
import Register from './component/pure/Register'
// import Login from './component/pure/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Register/>
     {/* <Login /> */}
    </div>
  )
}

export default App
