import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import "./ReadingSetup.css"

const ReadingSetup = () => {
    const navigate = useNavigate();


    const [readingType, setReadingType] = useState("");
    const [selectedDeck, setselectedDeck] = useState("")


    const startReading = () => {
    navigate("/reading/main", {
        state: {
            readingType,
            selectedDeck,
        },
    });
};

    return (
        <>
        
                    <div className="chooseDeckS" >
                        <div className="chooseHeading">CHOOSE</div>
                        <select className="chooseR" value={readingType} onChange={(e) => setReadingType(e.target.value)} >
                            <option value="" disabled hidden>Select Reading Type</option>
                            <option value="3">3 Card Reading</option>
                            <option value="5">5 Card Reading</option>
                            <option value="unlimited">Unlimited </option>
                        </select>
                        <select className='chooseD' value={selectedDeck} onChange={(e) => setselectedDeck(e.target.value)} >
                            <option value="" disabled hidden>Select Deck</option>
                            <option value="rider-waite">Rider–Waite–Smith (RWS)</option>
                        </select>
                        {readingType && selectedDeck && (
                            <button className='nextBtn' onClick={startReading}>Start Reading</button>
                        )}
                    </div>

          
        </>
    )
}

export default ReadingSetup