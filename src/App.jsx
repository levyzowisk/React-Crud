import { useState } from "react"

function App() {
  const [data, setData] = useState([])
  fetch("http://admin.pedabete.app.br/api/faq")
    .then(res => res.json())
    .then(res => setData(res))
    console.log(data);
    
  return (
    <>
     <h1>Olá mundo !</h1>
    </>
  )
}

export default App
