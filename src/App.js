import { useState } from 'react';
import './App.css';



const cardList = [
  {'path ': '/img/1.jpeg'},
  {'path ': '/img/2.jpeg'},
  {'path ': '/img/3.jpeg'},
  {'path ': '/img/4.jpeg'},
  {'path ': '/img/5.jpeg'},
  {'path ': '/img/6.jpeg'},
]



function App() {

  const [cards,setCards ] = useState([])

  setCards(cardList)
  return (
    <div className="App">
      <h1>Memory App</h1>
    </div>
  );
}

export default App;
