import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"
import * as characterActions from "../../store/character"
import "./CharacterCreation.css"
const CharacterCreation = ({setCheat}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const characterObject = useSelector((state) => state.character)
    const [name, setName] = useState('')
    const [level, setLevel] = useState(0)
    const [characterClass, setcharacterClass] = useState('barbarian')
    const [race, setRace] = useState('')
    const [alignment, setAlignment] = useState('')
    const [proficiencies, setProficiencies] = useState('')
    const [languages, setLanguages] = useState([])
    const [personalityTraits, setPersonalityTraits] = useState('')
    const [ideals, setIdeals] = useState('')
    const [bonds, setBonds] = useState('')
    const [flaws, setFlaws] = useState('')
    const [strength, setStrength] = useState(0)
    const [dex, setDex] = useState(0)
    const [constitution, setConstitution] = useState(0)
    const [intelligence, setIntelligence] = useState(0)
    const [wisdom, setWisdom] = useState(0)
    const [charisma, setCharisma] = useState(0)
    const [savingThrowOne, setSavingThrowOne] = useState('')
    const [savingThrowTwo, setSavingThrowTwo] = useState('')
    const [skillOne, setSkillOne] = useState('')
    const [skillTwo, setSkillTwo] = useState('')
    const [skillThree, setSkillThree] = useState('')
    const [skillFour, setSkillFour] = useState('')
    useEffect(() => {
        dispatch(characterActions.fetchAll())
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        setCheat(true)
        history.push('/')
    }
    return(
        <div className="characterform__container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Name:</label>
                <input onChange={(e) => setName(e.target.value)}type='text'/>
                <label>Level:</label>
                <input onChange={(e) => setLevel(e.target.value)}type='number'/>
                <label>Class:</label>
                <select onChange={(e) => setcharacterClass(e.target.value)}>
                    <option value={characterObject?.classes?.results[0].index}>{characterObject?.classes?.results[0].name}</option>
                    <option value={characterObject?.classes?.results[1].index}>{characterObject?.classes?.results[1].name}</option>
                    <option value={characterObject?.classes?.results[2].index}>{characterObject?.classes?.results[2].name}</option>
                    <option value={characterObject?.classes?.results[3].index}>{characterObject?.classes?.results[3].name}</option>
                    <option value={characterObject?.classes?.results[4].index}>{characterObject?.classes?.results[4].name}</option>
                    <option value={characterObject?.classes?.results[5].index}>{characterObject?.classes?.results[5].name}</option>
                    <option value={characterObject?.classes?.results[6].index}>{characterObject?.classes?.results[6].name}</option>
                    <option value={characterObject?.classes?.results[7].index}>{characterObject?.classes?.results[7].name}</option>
                    <option value={characterObject?.classes?.results[8].index}>{characterObject?.classes?.results[8].name}</option>
                    <option value={characterObject?.classes?.results[9].index}>{characterObject?.classes?.results[9].name}</option>
                    <option value={characterObject?.classes?.results[10].index}>{characterObject?.classes?.results[10].name}</option>
                    <option value={characterObject?.classes?.results[11].index}>{characterObject?.classes?.results[11].name}</option>
                </select>
                <label>Race:</label>
                <select onChange={(e) => setRace(e.target.value)}>
                    <option value={characterObject?.races?.results[0].index}>{characterObject?.races?.results[0].name}</option>
                    <option value={characterObject?.races?.results[1].index}>{characterObject?.races?.results[1].name}</option>
                    <option value={characterObject?.races?.results[2].index}>{characterObject?.races?.results[2].name}</option>
                    <option value={characterObject?.races?.results[3].index}>{characterObject?.races?.results[3].name}</option>
                    <option value={characterObject?.races?.results[4].index}>{characterObject?.races?.results[4].name}</option>
                    <option value={characterObject?.races?.results[5].index}>{characterObject?.races?.results[5].name}</option>
                    <option value={characterObject?.races?.results[6].index}>{characterObject?.races?.results[6].name}</option>
                    <option value={characterObject?.races?.results[7].index}>{characterObject?.races?.results[7].name}</option>
                    <option value={characterObject?.races?.results[8].index}>{characterObject?.races?.results[8].name}</option>
                </select>
                <label>Alignment:</label>
                <select onChange={(e) => setAlignment(e.target.value)}>
                    <option value={characterObject?.alignments?.results[0].index}>{characterObject?.alignments?.results[0].name}</option>
                    <option value={characterObject?.alignments?.results[1].index}>{characterObject?.alignments?.results[1].name}</option>
                    <option value={characterObject?.alignments?.results[2].index}>{characterObject?.alignments?.results[2].name}</option>
                    <option value={characterObject?.alignments?.results[3].index}>{characterObject?.alignments?.results[3].name}</option>
                    <option value={characterObject?.alignments?.results[4].index}>{characterObject?.alignments?.results[4].name}</option>
                    <option value={characterObject?.alignments?.results[5].index}>{characterObject?.alignments?.results[5].name}</option>
                    <option value={characterObject?.alignments?.results[6].index}>{characterObject?.alignments?.results[6].name}</option>
                    <option value={characterObject?.alignments?.results[7].index}>{characterObject?.alignments?.results[7].name}</option>
                    <option value={characterObject?.alignments?.results[8].index}>{characterObject?.alignments?.results[8].name}</option>
                </select>
                <label>Proficiencies:</label>
                <textarea onChange={(e) => setProficiencies(e.target.value)}/>
                {/* <label>Languages</label>
                <label>{characterObject?.languages?.results[0].name}</label>
                <input type="checkbox"/>
                <label>{characterObject?.languages?.results[1].name}</label>
                <input type="checkbox"/>
                <label>{characterObject?.languages?.results[2].name}</label>
                <input type="checkbox"/>
                <label>{characterObject?.languages?.results[3].name}</label>
                <input type="checkbox"/>
                <label>{characterObject?.languages?.results[4].name}</label>
                <input type="checkbox"/>
                <label>{characterObject?.languages?.results[5].name}</label>
                <input type="checkbox"/>
                <label>{characterObject?.languages?.results[6].name}</label>
                <input type="checkbox"/>
                <label>{characterObject?.languages?.results[7].name}</label>
                <input type="checkbox"/>
                <label>{characterObject?.languages?.results[8].name}</label>
                <input type="checkbox"/>
                <label>{characterObject?.languages?.results[9].name}</label>
                <input type="checkbox"/>
                <label>{characterObject?.languages?.results[10].name}</label>
                <input type="checkbox"/>
                <label>{characterObject?.languages?.results[11].name}</label>
                <input type="checkbox"/>
                <label>{characterObject?.languages?.results[12].name}</label>
                <input type="checkbox"/>
                <label>{characterObject?.languages?.results[13].name}</label>
                <input type="checkbox"/>
                <label>{characterObject?.languages?.results[14].name}</label>
                <input type="checkbox"/>
                <label>{characterObject?.languages?.results[15].name}</label>
                <input type="checkbox"/> */}
                <label>Personality Traits:</label>
                <textarea onChange={(e) => setPersonalityTraits(e.target.value)}/>
                <label>Ideals:</label>
                <textarea onChange={(e) => setIdeals(e.target.value)}/>
                <label>Bonds:</label>
                <textarea onChange={(e) => setBonds(e.target.value)}/>
                <label>Flaws:</label>
                <textarea onChange={(e) => setFlaws(e.target.value)}/>
                <label>Strength:</label>
                <input onChange={(e) => setStrength(e.target.value)} type='number'/>
                <label>Dexterity:</label>
                <input onChange={(e) => setDex(e.target.value)} type='number'/>
                <label>Constitution:</label>
                <input onChange={(e) => setConstitution(e.target.value)} type='number'/>
                <label>Intelligence:</label>
                <input onChange={(e) => setIntelligence(e.target.value)} type='number'/>
                <label>Wisdom:</label>
                <input onChange={(e) => setWisdom(e.target.value)} type='number'/>
                <label>Charisma:</label>
                <input onChange={(e) => setCharisma(e.target.value)} type='number'/>
                <label>Saving throw one:</label>
                <select onChange={(e) => setSavingThrowOne(e.target.value)}>
                    <option value={characterObject?.savingThrows?.results[0].index}>{characterObject?.savingThrows?.results[0].name}</option>
                    <option value={characterObject?.savingThrows?.results[1].index}>{characterObject?.savingThrows?.results[1].name}</option>
                    <option value={characterObject?.savingThrows?.results[2].index}>{characterObject?.savingThrows?.results[2].name}</option>
                    <option value={characterObject?.savingThrows?.results[3].index}>{characterObject?.savingThrows?.results[3].name}</option>
                    <option value={characterObject?.savingThrows?.results[4].index}>{characterObject?.savingThrows?.results[4].name}</option>
                    <option value={characterObject?.savingThrows?.results[5].index}>{characterObject?.savingThrows?.results[5].name}</option>
                </select>
                <label>Saving throw two:</label>
                <select onChange={(e) => setSavingThrowTwo(e.target.value)}>
                    <option value={characterObject?.savingThrows?.results[0].index}>{characterObject?.savingThrows?.results[0].name}</option>
                    <option value={characterObject?.savingThrows?.results[1].index}>{characterObject?.savingThrows?.results[1].name}</option>
                    <option value={characterObject?.savingThrows?.results[2].index}>{characterObject?.savingThrows?.results[2].name}</option>
                    <option value={characterObject?.savingThrows?.results[3].index}>{characterObject?.savingThrows?.results[3].name}</option>
                    <option value={characterObject?.savingThrows?.results[4].index}>{characterObject?.savingThrows?.results[4].name}</option>
                    <option value={characterObject?.savingThrows?.results[5].index}>{characterObject?.savingThrows?.results[5].name}</option>
                </select>
                <label>Skill one:</label>
                <select onChange={(e) => setSkillOne(e.target.value)}>
                    <option value={characterObject?.skills?.results[0].index}>{characterObject?.skills?.results[0].name}</option>
                    <option value={characterObject?.skills?.results[1].index}>{characterObject?.skills?.results[1].name}</option>
                    <option value={characterObject?.skills?.results[2].index}>{characterObject?.skills?.results[2].name}</option>
                    <option value={characterObject?.skills?.results[3].index}>{characterObject?.skills?.results[3].name}</option>
                    <option value={characterObject?.skills?.results[4].index}>{characterObject?.skills?.results[4].name}</option>
                    <option value={characterObject?.skills?.results[5].index}>{characterObject?.skills?.results[5].name}</option>
                    <option value={characterObject?.skills?.results[6].index}>{characterObject?.skills?.results[6].name}</option>
                    <option value={characterObject?.skills?.results[7].index}>{characterObject?.skills?.results[7].name}</option>
                    <option value={characterObject?.skills?.results[8].index}>{characterObject?.skills?.results[8].name}</option>
                    <option value={characterObject?.skills?.results[9].index}>{characterObject?.skills?.results[9].name}</option>
                    <option value={characterObject?.skills?.results[10].index}>{characterObject?.skills?.results[10].name}</option>
                    <option value={characterObject?.skills?.results[11].index}>{characterObject?.skills?.results[11].name}</option>
                    <option value={characterObject?.skills?.results[12].index}>{characterObject?.skills?.results[12].name}</option>
                    <option value={characterObject?.skills?.results[13].index}>{characterObject?.skills?.results[13].name}</option>
                    <option value={characterObject?.skills?.results[14].index}>{characterObject?.skills?.results[14].name}</option>
                    <option value={characterObject?.skills?.results[15].index}>{characterObject?.skills?.results[15].name}</option>
                    <option value={characterObject?.skills?.results[16].index}>{characterObject?.skills?.results[16].name}</option>
                    <option value={characterObject?.skills?.results[17].index}>{characterObject?.skills?.results[17].name}</option>
                </select>
                <label>Skill two:</label>
                <select onChange={(e) => setSkillTwo(e.target.value)}>
                    <option value={characterObject?.skills?.results[0].index}>{characterObject?.skills?.results[0].name}</option>
                    <option value={characterObject?.skills?.results[1].index}>{characterObject?.skills?.results[1].name}</option>
                    <option value={characterObject?.skills?.results[2].index}>{characterObject?.skills?.results[2].name}</option>
                    <option value={characterObject?.skills?.results[3].index}>{characterObject?.skills?.results[3].name}</option>
                    <option value={characterObject?.skills?.results[4].index}>{characterObject?.skills?.results[4].name}</option>
                    <option value={characterObject?.skills?.results[5].index}>{characterObject?.skills?.results[5].name}</option>
                    <option value={characterObject?.skills?.results[6].index}>{characterObject?.skills?.results[6].name}</option>
                    <option value={characterObject?.skills?.results[7].index}>{characterObject?.skills?.results[7].name}</option>
                    <option value={characterObject?.skills?.results[8].index}>{characterObject?.skills?.results[8].name}</option>
                    <option value={characterObject?.skills?.results[9].index}>{characterObject?.skills?.results[9].name}</option>
                    <option value={characterObject?.skills?.results[10].index}>{characterObject?.skills?.results[10].name}</option>
                    <option value={characterObject?.skills?.results[11].index}>{characterObject?.skills?.results[11].name}</option>
                    <option value={characterObject?.skills?.results[12].index}>{characterObject?.skills?.results[12].name}</option>
                    <option value={characterObject?.skills?.results[13].index}>{characterObject?.skills?.results[13].name}</option>
                    <option value={characterObject?.skills?.results[14].index}>{characterObject?.skills?.results[14].name}</option>
                    <option value={characterObject?.skills?.results[15].index}>{characterObject?.skills?.results[15].name}</option>
                    <option value={characterObject?.skills?.results[16].index}>{characterObject?.skills?.results[16].name}</option>
                    <option value={characterObject?.skills?.results[17].index}>{characterObject?.skills?.results[17].name}</option>
                </select>
                <label>Skill three:</label>
                <select onChange={(e) => setSkillThree(e.target.value)}>
                    <option value={characterObject?.skills?.results[0].index}>{characterObject?.skills?.results[0].name}</option>
                    <option value={characterObject?.skills?.results[1].index}>{characterObject?.skills?.results[1].name}</option>
                    <option value={characterObject?.skills?.results[2].index}>{characterObject?.skills?.results[2].name}</option>
                    <option value={characterObject?.skills?.results[3].index}>{characterObject?.skills?.results[3].name}</option>
                    <option value={characterObject?.skills?.results[4].index}>{characterObject?.skills?.results[4].name}</option>
                    <option value={characterObject?.skills?.results[5].index}>{characterObject?.skills?.results[5].name}</option>
                    <option value={characterObject?.skills?.results[6].index}>{characterObject?.skills?.results[6].name}</option>
                    <option value={characterObject?.skills?.results[7].index}>{characterObject?.skills?.results[7].name}</option>
                    <option value={characterObject?.skills?.results[8].index}>{characterObject?.skills?.results[8].name}</option>
                    <option value={characterObject?.skills?.results[9].index}>{characterObject?.skills?.results[9].name}</option>
                    <option value={characterObject?.skills?.results[10].index}>{characterObject?.skills?.results[10].name}</option>
                    <option value={characterObject?.skills?.results[11].index}>{characterObject?.skills?.results[11].name}</option>
                    <option value={characterObject?.skills?.results[12].index}>{characterObject?.skills?.results[12].name}</option>
                    <option value={characterObject?.skills?.results[13].index}>{characterObject?.skills?.results[13].name}</option>
                    <option value={characterObject?.skills?.results[14].index}>{characterObject?.skills?.results[14].name}</option>
                    <option value={characterObject?.skills?.results[15].index}>{characterObject?.skills?.results[15].name}</option>
                    <option value={characterObject?.skills?.results[16].index}>{characterObject?.skills?.results[16].name}</option>
                    <option value={characterObject?.skills?.results[17].index}>{characterObject?.skills?.results[17].name}</option>
                </select>
                <label>Skill four:</label>
                <select onChange={(e) => setSkillFour(e.target.value)}>
                    <option value={characterObject?.skills?.results[0].index}>{characterObject?.skills?.results[0].name}</option>
                    <option value={characterObject?.skills?.results[1].index}>{characterObject?.skills?.results[1].name}</option>
                    <option value={characterObject?.skills?.results[2].index}>{characterObject?.skills?.results[2].name}</option>
                    <option value={characterObject?.skills?.results[3].index}>{characterObject?.skills?.results[3].name}</option>
                    <option value={characterObject?.skills?.results[4].index}>{characterObject?.skills?.results[4].name}</option>
                    <option value={characterObject?.skills?.results[5].index}>{characterObject?.skills?.results[5].name}</option>
                    <option value={characterObject?.skills?.results[6].index}>{characterObject?.skills?.results[6].name}</option>
                    <option value={characterObject?.skills?.results[7].index}>{characterObject?.skills?.results[7].name}</option>
                    <option value={characterObject?.skills?.results[8].index}>{characterObject?.skills?.results[8].name}</option>
                    <option value={characterObject?.skills?.results[9].index}>{characterObject?.skills?.results[9].name}</option>
                    <option value={characterObject?.skills?.results[10].index}>{characterObject?.skills?.results[10].name}</option>
                    <option value={characterObject?.skills?.results[11].index}>{characterObject?.skills?.results[11].name}</option>
                    <option value={characterObject?.skills?.results[12].index}>{characterObject?.skills?.results[12].name}</option>
                    <option value={characterObject?.skills?.results[13].index}>{characterObject?.skills?.results[13].name}</option>
                    <option value={characterObject?.skills?.results[14].index}>{characterObject?.skills?.results[14].name}</option>
                    <option value={characterObject?.skills?.results[15].index}>{characterObject?.skills?.results[15].name}</option>
                    <option value={characterObject?.skills?.results[16].index}>{characterObject?.skills?.results[16].name}</option>
                    <option value={characterObject?.skills?.results[17].index}>{characterObject?.skills?.results[17].name}</option>
                </select>
                <button type="submit">Create character</button>
            </form>
        </div>
    )
}

export default CharacterCreation