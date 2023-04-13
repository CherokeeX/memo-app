import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import MemoryCard from './components/MemoryCard';



const cardList = [
  {"path": '/img/1.jpeg'},
  {"path": '/img/2.jpeg'},
  {"path": '/img/3.jpeg'},
  {"path": '/img/4.jpeg'},
  {"path": '/img/5.jpeg'},
  {"path": '/img/6.jpeg'}
];



function App() {

  const [cards,setCards ] = useState([]);

  const prepareCards = ()=>{

    const  sortedCards = [...cardList,...cardList].sort(()=>(0.5-Math.random())).map((card)=> ({...card, id: Math.random()}));
    
    setCards(sortedCards); 
  }
useEffect(()=>{prepareCards()},[]);
  
  return (
    <div className="Container">
      <h1>Memory App</h1>
      <button onClick={prepareCards} type="">START GAME</button> 
      <div className='card-grid'>
          {
            cards.map(card => (

            <MemoryCard card ={card} id={card.id}/>

            ))


          }
        
      </div>
    </div>
  );
}

export default App;
