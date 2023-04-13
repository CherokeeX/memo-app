import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import MemoryCard from "./components/MemoryCard";

const cardList = [
  { path: "/img/1.jpeg" , matched:false},
  { path: "/img/2.jpeg" , matched:false},
  { path: "/img/3.jpeg" , matched:false},
  { path: "/img/4.jpeg" , matched:false},
  { path: "/img/5.jpeg" , matched:false},
  { path: "/img/6.jpeg" , matched:false},
];

function App() {
  const [cards, setCards] = useState([]);
  const [selectedFirst, setSelectedFirst] = useState(null);
  const [selectedSecond, setSelectedSecond] = useState(null);
  const [disabled,setDisabled] = useState(false);

  const prepareCards = () => {
    const sortedCards = [...cardList, ...cardList]
      .sort(() => 0.5 - Math.random())
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(sortedCards);
    setSelectedFirst();
    setSelectedSecond();
  }

  const handleSelected = (card) => {
    selectedFirst ? setSelectedSecond(card):setSelectedFirst(card)
  };
  useEffect(() => {
    prepareCards();
  }, []);

  useEffect(() => {
    if (selectedFirst && selectedSecond) {
      setDisabled(true);
      if(selectedFirst.path===selectedSecond.path){
        setCards(prevCards => {
          return prevCards.map(card =>{
            if (card.path===selectedFirst.path){
              return {...card, matched:true}
            }else{
              return card
            }
          })
        })
        setTimeout(()=>{
          resetState();
        }, 1000)}else {
              setTimeout(()=>{
                resetState();
              }, 1000)
      }
    }
  }, [selectedFirst,selectedSecond]);
const resetState = ()=>{
  setSelectedFirst(null);
  setSelectedSecond(null);
  setDisabled(false);
}
  return (
    <div className="Container">
      <h1>Memory App</h1>
      <button onClick={prepareCards} type="">
        START GAME
      </button>
      <div className="card-grid">
        {cards.map((card) => (
          <MemoryCard
            card={card}
            id={card.id}
            handleSelected={handleSelected}
            disabled={disabled}
            rotated={card === selectedFirst || card===selectedSecond || card.matched}
            
          />
        ))}
      </div>
    </div>
  );
}

export default App;
