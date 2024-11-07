import { useState } from 'react'
import './App.css'
import Joke from './Joke'

function App() {

  const jokes = [
    {
      id: crypto.randomUUID(),
      joke: "first joke",
      rating: 3,
    },
    {
      id: crypto.randomUUID(),
      joke: "second joke",
      rating: 2,
    },
    {
      id: crypto.randomUUID(),
      joke: "third joke",
      rating: 4,
    },
    {
      id: crypto.randomUUID(),
      joke: "forth joke",
      rating: 5,
    }
  ]

  return (
    <>
      <h1>Jokes</h1>

      {jokes.map((joke, index) => { return <Joke key={index} joke={joke.joke} rating={joke.rating} /> })}
      <Joke joke={jokes.joke} rating={jokes.rating}></Joke>
    </>
  )
}

export default App
