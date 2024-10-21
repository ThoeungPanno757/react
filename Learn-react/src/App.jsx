import { useState } from 'react'
import Var01 from './assets/components/Varibles/Var01'
import Props01 from './assets/components/props/Props01'
import Props02 from './assets/components/props/Props02'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Var01/>
      <Props01 name={"PANNO"} addres={"Preah vihear"}/>
      <Props02 size={100} img={"https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=400"}/>
      <Props02 size={400} img={"https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=400"}/>
       <Props03 width={"400"} heigh={"400"} bg={"red"}/>
    </div>
  )
}

export default App
