// import React, {useState, useEffect} from "react"

// const [newNameState, setNewName] = useState(0);

// useEffect(() => {
//     axios.get("https://swapi.co/api/people/")
//     .then((response) => {
//       // console.log(response.data.results)
//       setName(response.data.results[newNameState])
//     }).catch((err) => {
//       console.log(err)
//     })
//   }, [])

// getCharacters() = {
    
//     return (
//         <>
//         {return <CreateCharacter className = "Names" key = {nameState.name} name = {nameState.name} year = {nameState.birth_year}/>}
//         <button onclick = {() => setNewName(newNameState + 1)}>Next Charecter</button>
//         </>
//     );