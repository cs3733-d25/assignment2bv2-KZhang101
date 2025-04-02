// import { useState } from 'react'
import './App.css'
import './list.css'
import {title} from "./title.tsx";
import Intro from "./intro.tsx";
import KangsHobby from "./kangs/hobby1.tsx";
import AndysHobby from "./Andy/hobby2.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        {title('CS3733-D25', 24, "Kang and Andy")}
        <Intro username="Kang and Andy"/>
        <KangsHobby/>
        <AndysHobby/>
    </>
  )
}

export default App
