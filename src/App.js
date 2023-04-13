import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import MemoryCard from "./components/MemoryCard";

const cardList = [
  { path: "/img/1.jpeg" },
  { path: "/img/2.jpeg" },
  { path: "/img/3.jpeg" },
  { path: "/img/4.jpeg" },
  { path: "/img/5.jpeg" },
  { path: "/img/6.jpeg" },
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
    }
  }, [selectedFirst,selectedSecond]);

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
            
          />
        ))}
      </div>
    </div>
  );
}

export default App;
