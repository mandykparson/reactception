import './App.css';
import MetaData from "./Components/MetaData/MetaData"
import { useState, useEffect, useRef } from 'react'
import Dream from "./Components/PublicData/Dream"


export default function App() {

  const [ dreams, setDreams ] = useState([])
  // const [ count, setCount ] = useState(1)

  const dbjsonRef = useRef(null)

  useEffect(() => {
    fetch('http://localhost:3000/dreams')
      .then(response => response.json())
      .then(dreamsApi => setDreams(dreamsApi))
  }, [])

//   const increaseCount = () => {
//     if (count <= 5) {
//         setCount({count: count + 1})
//     } else {
//         setCount({count: 1})
//     }
// }
  const handleClick = (e) => {
    (e.target.style.width === '35px' || e.target.style.width === '')
        ? e.target.style.width = 'fit-content' 
        : e.target.style.width = '35px';
    let db_json = dbjsonRef.current
    console.log(db_json)
    if (db_json.style.display === "block") {
      db_json.style.display = "none";
    } else {
      db_json.style.display = "block";
    }
  }

  const rideTheKick = (dreamToLeave) => {
    const filteredDreams = dreams.filter(dream => {
      return dream !== dreamToLeave
    })
    setDreams(filteredDreams)
  }

  return (
    <div className="App">
      <div id="slide" onClick={ handleClick }>
        Access db.json
        <div id="dbjson" ref={dbjsonRef}>
          <img src="https://i.imgur.com/ENiCA99.png" alt="source: imgur.com" />
        </div>
      </div>
      <div id="app-main-content">
        <div className="header">
          <div>
            <h1>Reactception</h1>
            <h3>A Componenet Within a Component</h3>
          </div>
        </div>
        <div className="sub-header">
          <div className="render-container">
            <Dream dreams={dreams} rideTheKick={rideTheKick}/>
          </div>
          <div className="meta-data">
            <MetaData /> 
          </div>
        </div>
      </div>
    </div>
  );
}












