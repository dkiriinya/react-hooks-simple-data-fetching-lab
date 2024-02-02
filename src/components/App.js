// create your App component here
import React, {useState, useEffect} from "react";

function App() {
    const [dogImage, setdogImage] = useState("")
    const [loading, setLoading] = useState(true);

    useEffect(() => {
         fetch("https://dog.ceo/api/breeds/image/random")
         .then((response) => response.json())
         .then((data) => {
            setdogImage(data.message)
            setLoading(false)
         })
    }, [])

    return(
        <div>
          <h1>Random Dog Image</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (<img src={dogImage} alt="A Random Dog" />)}
          
        </div>
    )



}

export default App
