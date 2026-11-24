
import { useEffect } from "react"
function App() {


 useEffect(()=>{
  getUsers()
 },[])

  async function getUsers() {
    let data = await fetch('http://localhost:3200/')
    data = await data.json()
    console.log(data);
    
    
  }
  return (
    <>
      hello
    </>
  )
}

export default App
