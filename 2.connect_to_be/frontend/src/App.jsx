import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')//WE CAN ALSO GIVE THE COMPLETE URL BUT WE
    //GIVE THIS STANDARDIZATION TO HELP CONNECT BACKEND AND FRONTEND
    //check vite.config.js for more info
    
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
    <h1>Chai aur fullstack</h1>
    <p>jokes length:{jokes.length}</p>
     
     {
        jokes.map((joke)=>(//we donot use curly braces here because we are returning jsx
          <div key={joke.id}>
            <h3>{joke.joke}</h3>
            {/* //till this point we have just created the frontend to display the data
            //we need to fetch thedata from backend and display it here
            //for that we can use fetch or axios */}
          </div>
        ))
     }
    </>
  )
}

export default App
