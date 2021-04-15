import React from 'react'
import {closeCheat} from "../../store/modal"
import {useDispatch} from "react-redux"
import "./Cheat.css"


const Cheat = () => {
    const dispatch = useDispatch()
    return(
        <div className="frodocheat__container">
                <label>Name:</label>
                <p>Samwise Gamgee</p>
                <label>Level:</label>
                <p>3</p>
                <label>Class:</label>
                <p>Ranger</p>
                <label>Race:</label>
                <p>Halfling</p>
                <label>Alignment:</label>
                <p>Lawful Good</p>
                <label>Proficiencies:</label>
                <p>Power of will</p>
                <label>Personality Traits:</label>
                <p>Selfless</p>
                <label>Ideals:</label>
                <p>Saving Middle Earth</p>
                <label>Bonds:</label>
                <p>Frodo Baggins</p>
                <label>Flaws:</label>
                <p>Short</p>
                <label>Strength:</label>
                <p>3</p>
                <label>Dexterity:</label>
                <p>6</p>
                <label>Constitution:</label>
                <p>3</p>
                <label>Intelligence:</label>
                <p>4</p>
                <label>Wisdom:</label>
                <p>5</p>
                <label>Charisma:</label>
                <p>7</p>
                <label>Saving throw one:</label>
                <p>DEX</p>
                <label>Saving throw two:</label>
                <p>CHA</p>
                <label>Skill one:</label>
                <p>Survival</p>
                <label>Skill two:</label>
                <p>Stealth</p>
                <label>Skill three:</label>
                <p>Persuasion</p>
                <label>Skill four:</label>
                <p>History</p>
                <button onClick={()=> dispatch(closeCheat())}>Close</button>
        </div>
    )
}

export default Cheat