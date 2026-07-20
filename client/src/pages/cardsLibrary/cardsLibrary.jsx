import React from 'react'
import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./cardsLibrary.css"

const CardsLibrary = () => {

  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true);
  const [showDeck, setshowDeck] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("https://the-arcana-room.onrender.com/api/cards/rider-waite")
      .then((Response) => {
        if (!Response.ok) {
          throw new Error("Failed to fetch cards")
        }
      return (Response.json())
      })
      .then((data) => {
        setCards(data)
        setLoading(false)})
        .catch((err) => {
          setError(err.message)
          setLoading(false)
        })
  }, [])



  const showRiderDeck = () => {
    setshowDeck(prev => !prev);
  };

  if (loading) {
  return <h2>Loading cards...</h2>;
}

if (error) {
  return <h2>{error}</h2>;
}

  return (
    <>
      <div className="deckSelection">
        <h1 className="libraryH">DECK SELECTION</h1>
        <div className='rider-waiteSection' onClick={showRiderDeck}>

          <div className='deckH'>Rider–Waite–Smith (RWS) Tarot Deck</div>

          <button className='arrowBtn' >
            {showDeck ? <FaChevronUp /> : <FaChevronDown />}
          </button>

        </div>

        {showDeck && (
          <div className="cardsImage">
            {cards.map((card) => (
              <div className='cardTag' key={card.imageName}>
                <img key={card.imageName} src={`/cards/${card.imageName}`} alt={card.name} />
                <p> {card.name} </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </>
  )
}

export default CardsLibrary






