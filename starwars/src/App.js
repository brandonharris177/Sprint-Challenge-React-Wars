import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import CreateCharacter from "./components/CreateCharacter"
import styled from "styled-components";

const Intro = styled.h2`
  color: yellow;
  text-shadow: 3px 3px black;
`;


const App = () => {

  const [nameState, setName] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then((response) => {
      console.log(response.data.results[0])
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
      <Intro>A long time ago far far away there were...</Intro>
      <h1 className = "Header">React Wars</h1>
      {nameState.map((charecter) =>{
        return <CreateCharacter className = "Names" key = {charecter.name} name = {charecter.name} year = {charecter.birth_year}/>
      })}
    </div>
  );
}

export default App;

// const App = () => {

//   const [nameState, setName] = useState([])
//   const [newNameState, setNewName] = useState(0);
//   // Try to think through what state you'll need for this app before starting. Then build out
//   // the state properties here.

//   useEffect(() => {
//     axios.get("https://swapi.co/api/people/")
//     .then((response) => {
//       // console.log(response.data.results[0])
//       console.log(newNameState)
//       setName(response.data.results[newNameState])
//     }).catch((err) => {
//       console.log(err)
//     })
//   }, [])

//   // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
//   // side effect in a component, you want to think about which state and/or props it should
//   // sync up with, if any.

//   return (
//     <div className="App">
//       <Intro>A long time ago far far away there were...</Intro>
//       <h1 className = "Header">React Wars</h1>
//       <CreateCharacter className = "Names" key = {nameState.name} name = {nameState.name} year = {nameState.birth_year}/>
//       <button onClick = {() => setNewName(newNameState + 1)}>Next Character</button>
//       {/* {button.addEventListner('click, nextCharacter)} */}
//       {console.log(newNameState)}
//     </div>
//   );
// }

// export default App;

// function nextCharacter(e){
//   console.log(`Its Working!`)
//   useEffect();
// }