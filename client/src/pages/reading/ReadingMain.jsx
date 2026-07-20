import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./ReadingMain.css"

const ReadingMain = () => {
    const location = useLocation()
    const { readingType, selectedDeck } = location.state


    const [deck, setDeck] = useState([])
    const [pickedCards, setPickedCards] = useState([]);
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("");


    useEffect(() => {
        fetch(`https://the-arcana-room.onrender.com/api/cards/${selectedDeck}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch cards") 
                }
                return (response.json())
            })
            .then((data) => {
                setCards(data)
                handleShuffle(data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [selectedDeck])


    const handleShuffle = (deckToShuffle) => {
        const shuffledDeck = [...deckToShuffle];

        // Fisher–Yates shuffle
        for (let i = shuffledDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
        }
        setDeck(shuffledDeck);
    }


    const handleClick = () => {
        if (pickedCards.length >= Number(readingType)) {
            alert(`You have already picked ${readingType} cards`)
            return
        }

        if (deck.length === 0) {
            alert("No cards left. Click 'Clear All' to start a new reading.");
            return;
        }
        const newdeck = [...deck]
        const pickedCard = newdeck.shift()
        setPickedCards((prev) => [...prev, pickedCard]);
        setDeck(newdeck)
    }


    const clearBtn = () => {
        setPickedCards([]);
        handleShuffle(cards);
    };


    if (loading) {
        return <h2>Loading cards...</h2>;
    }

    if (error) {
    return <h2>{error}</h2>;
}


    return (
        <>
            <div className='readingSection'>
                <div className="readingH">READING</div>

                <div className='chooseCards'>
                    <div className='readingDeckH'>
                        {cards.length > 0 && cards[0].deckName}
                    </div>
                    <div className="coverImage">
                        <img src='/cards/00-card-back.jpg' alt="Rider–Waite–Smith (RWS) Tarot Deck" onClick={handleClick} />
                        <button className='shuffleBtn' onClick={() => handleShuffle(deck)}>Shuffle</button>
                    </div>


                </div>
            </div >

            <div className="pickingCards">
                <div className="pickedCardH">PICKED CARDS</div>
                <div className="readingProgress">
                    {pickedCards.length} / {readingType} Cards Selected
                </div>
                {pickedCards.length > 0 && (
                    <button className="clearBtn" onClick={clearBtn}>
                        Clear All
                    </button>
                )}
                <div className="pickedcard">
                    {pickedCards.length === 0 && <div className='shuffleGuide'>Shuffle the deck and pick cards</div>}
                    {pickedCards.map((picked) => (<img key={picked.imageName} alt={picked.name} src={`/cards/${picked.imageName}`} />))}
                </div>
            </div>

        </>
    )
}

export default ReadingMain