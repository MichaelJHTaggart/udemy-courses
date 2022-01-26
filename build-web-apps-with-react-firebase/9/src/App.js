import './App.css';
import { useEffect, useState } from "react";
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/logo192.png", matched: false },
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false }
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  //? Testing out prevState
  // const [input, setInput] = useState("")

  // const handleInput = (userInput) => {
  //   setInput((prevState) => {
  //     console.log(prevState)
  //     return userInput.target.value
  //   })
  // }

  const handleChoice = (card) => {
    console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  useEffect(() => {
    const compareCards = () => {
      if (choiceOne && choiceTwo) {
        setDisabled(true)
        if (choiceOne.src === choiceTwo.src) {
          setCards(prevCards => {
            return prevCards.map((card) => {
              if (card.src === choiceOne.src) {
                return { ...card, matched: true }
              } else {
                return card
              }
            })
          })
          return resetTurn()
        } else {
          console.log("Wrong!")

          setTimeout(() => { resetTurn() }, 1000)
        }
      }
    }
    compareCards()
  }, [choiceOne, choiceTwo])

  console.log(cards)

  // shuffle the cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      
      <button onClick={shuffleCards}>New Game</button>

      {/* 
      //? Testing out prevState
      <input 
      type="text"
      onChange={handleInput}
      />
      {input} */}

      <div className="card-grid">
        {
          cards.map((card) => (
            <SingleCard
              handleChoice={handleChoice}
              card={card}
              key={card.id}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))
        }



      </div>
      <h2>Turns taken: {turns}</h2>
    </div>
  );
}

export default App;
