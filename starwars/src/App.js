import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import CreateCharecter from "./components/CreateCharecter"

const App = () => {

  const [nameState, setName] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then((response) => {
      console.log(response.data.results)
      setName(response.data.results)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {nameState.map((charecterNames) =>{
        return <CreateCharecter className = "Names" key = {charecterNames.name} name = {charecterNames.name}/>
      })}
    </div>
  );
}

export default App;
