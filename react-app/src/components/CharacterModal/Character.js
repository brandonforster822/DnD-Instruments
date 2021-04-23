import React from 'react'
import {closeCharacter} from "../../store/modal"
import {useDispatch, useSelector} from "react-redux"
import "./Character.css"


const Character = () => {
    const dispatch = useDispatch()
    const character = useSelector((state) => state.character.character?.oneCharacter)
    return(
        <div className="frodocharacter__container">
            <div className={'name__container'}>
                <h2>{character?.name}</h2>
            </div>
                <label>Level:</label>
                <p>{character?.level}</p>
                <label>Class:</label>
                <p>{character?.characterClass}</p>
                <label>Race:</label>
                <p>{character?.race}</p>
                <label>Alignment:</label>
                <p>{character?.alignment}</p>
                <label>Proficiencies:</label>
                <p>{character?.proficiencies}</p>
                <label>Personality Traits:</label>
                <p>{character?.traits}</p>
                <label>Ideals:</label>
                <p>{character?.ideals}</p>
                <label>Bonds:</label>
                <p>{character?.bonds}</p>
                <label>Flaws:</label>
                <p>{character?.flaws}</p>
                <label>Strength:</label>
                <p>{character?.strength}</p>
                <label>Dexterity:</label>
                <p>{character?.dex}</p>
                <label>Constitution:</label>
                <p>{character?.constitution}</p>
                <label>Intelligence:</label>
                <p>{character?.intelligence}</p>
                <label>Wisdom:</label>
                <p>{character?.wisdom}</p>
                <label>Charisma:</label>
                <p>{character?.charisma}</p>
                <label>Saving throw one:</label>
                <p>{character?.saving__throw__one}</p>
                <label>Saving throw two:</label>
                <p>{character?.saving__throw__two}</p>
                <label>Skill one:</label>
                <p>{character?.skill_one}</p>
                <label>Skill two:</label>
                <p>{character?.skill_two}</p>
                <label>Skill three:</label>
                <p>{character?.skill_three}</p>
                <label>Skill four:</label>
                <p>{character?.skill_four}</p>
                <button onClick={()=> dispatch(closeCharacter())}>Close</button>
        </div>
    )
}

export default Character