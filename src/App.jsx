import { useEffect, useState } from 'react'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setLoading(true)
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  return (
    <div className="App">
      <h1>Hola</h1>
    </div>
  )
}

export default App
