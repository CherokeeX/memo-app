import React from 'react'

export default function MemoryCard({card}) {
  return (
    <div className='card'>
              <img className= "cardFront" src={card.path} alt="" />
              <img className="cardBack" src="/img/cover.jpeg" alt="" />
              
            </div>
  )
}