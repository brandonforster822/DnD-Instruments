import React, {useState} from "react"
import "./DiceBox.css"

const DiceBox = () => {
    const [randomNumber, setRandomNumber] = useState(0)

    const getRandomNumber = (limit) => {
        const newRandomNumber = Math.floor(Math.random() * limit + 1)
        if (newRandomNumber !== randomNumber) {
            setRandomNumber(newRandomNumber)
        }
    }

    const handleGetRandomNumber = (limit) => {
            const randomInterval = setInterval(() => getRandomNumber(limit), 50)
            setTimeout(() => clearInterval(randomInterval), 1000)
    }
    return(
        <div className="dicebox__container">
            <div className="dice__container D4">
                <img src="https://static.thenounproject.com/png/763027-200.png"/>
                <h5 onClick={() => handleGetRandomNumber(4)}>D4</h5>
            </div>
            <div className="dice__container D6">
                <img src="https://static.thenounproject.com/png/763027-200.png"/>
                <h5 onClick={() => handleGetRandomNumber(6)}>D6</h5>
            </div>
            <div className="dice__container D8">
                <img src="https://static.thenounproject.com/png/763027-200.png"/>
                <h5 onClick={() => handleGetRandomNumber(8)}>D8</h5>
            </div>
            <div className="result__container">
                <h3>{randomNumber}</h3>
            </div>
            <div className="dice__container D10">
                <img src="https://static.thenounproject.com/png/763027-200.png"/>
                <h5 onClick={() => handleGetRandomNumber(10)}>D10</h5>
            </div>
            <div className="dice__container D12">
                <img src="https://static.thenounproject.com/png/763027-200.png"/>
                <h5 onClick={() => handleGetRandomNumber(12)}>D12</h5>
            </div>
            <div className="dice__container D20">
                <img src="https://static.thenounproject.com/png/763027-200.png"/>
                <h5 onClick={() => handleGetRandomNumber(20)}>D20</h5>
            </div>
            
        </div>
    )
}

export default DiceBox