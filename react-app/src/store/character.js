const FETCH_CLASSES = "classes/query"
const FETCH_RACES = "races/query"
const FETCH_ALIGNMENTS = "alignments/query"
const FETCH_LANGUAGES = "languages/query"
const FETCH_SAVINGTHROWS = "savingthrows/query"
const FETCH_SKILLS = "skills/query"
const CREATE_CHARACTER = "character/create"
const GET_USER_CHARACTERS = "character/get"
const GET_ONE_CHARACTER = "character/getone"

export const fetchAllClasses = (listArr) => {
    return {
        payload: listArr,
        type: FETCH_CLASSES,
    }
}
export const fetchAllRaces = (listArr) => {
    return {
        payload: listArr,
        type: FETCH_RACES,
    }
}
export const fetchAllAlignments = (listArr) => {
    return {
        payload: listArr,
        type: FETCH_ALIGNMENTS,
    }
}
export const fetchAllLanguages = (listArr) => {
    return {
        payload: listArr,
        type: FETCH_LANGUAGES,
    }
}
export const fetchAllSavingThrows = (listArr) => {
    return {
        payload: listArr,
        type: FETCH_SAVINGTHROWS,
    }
}
export const fetchAllSkills = (listArr) => {
    return {
        payload: listArr,
        type: FETCH_SKILLS,
    }
}

export const createOneCharacter = (data) => {
    return {
        type: CREATE_CHARACTER,
        data,
    }
}

export const getUserCharacters = (characters) => {
    return {
        type: GET_USER_CHARACTERS,
        payload: characters
    }
}

export const getOneCharacter = (character) => {
    return {
        type: GET_ONE_CHARACTER,
        payload: character
    }
}


export const fetchAll = () => async (dispatch) => {
    const classesRes = await fetch('https://www.dnd5eapi.co/api/classes', {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const racesRes = await fetch('https://www.dnd5eapi.co/api/races', {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const alignmentsRes = await fetch('https://www.dnd5eapi.co/api/alignments', {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const languagesRes = await fetch('https://www.dnd5eapi.co/api/languages', {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const abilityScoresRes = await fetch('https://www.dnd5eapi.co/api/ability-scores', {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const skillsRes = await fetch('https://www.dnd5eapi.co/api/skills', {
        headers: {
            "Content-Type": "application/json",
        },
    })
    
    const classesData = await classesRes.json()
    dispatch(fetchAllClasses(classesData))
    const racesData = await racesRes.json()
    dispatch(fetchAllRaces(racesData))
    const alignmentsData = await alignmentsRes.json()
    dispatch(fetchAllAlignments(alignmentsData))
    const languagesData = await languagesRes.json()
    dispatch(fetchAllLanguages(languagesData))
    const abilityScoresData = await abilityScoresRes.json()
    dispatch(fetchAllSavingThrows(abilityScoresData))
    const skillsData = await skillsRes.json()
    dispatch(fetchAllSkills(skillsData))
}

export const createCharacter = (userId, 
    name, 
    level, 
    characterClass, 
    race, 
    alignment, 
    proficiencies, 
    personalityTraits, 
    ideals, 
    bonds, 
    flaws, 
    strength, 
    dex, 
    constitution,
    intelligence,
    wisdom,
    charisma,
    savingThrowOne,
    savingThrowTwo,
    skillOne,
    skillTwo,
    skillThree,
    skillFour) => async (dispatch) => {
        const res = await fetch('/api/character/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
                name, 
                level, 
                characterClass, 
                race, 
                alignment, 
                proficiencies, 
                personalityTraits, 
                ideals, 
                bonds,
                flaws,
                strength,
                dex,
                constitution,
                intelligence,
                wisdom,
                charisma,
                savingThrowOne,
                savingThrowTwo,
                skillOne,
                skillTwo,
                skillThree,
                skillFour  
                })
        })
        return await res.json()
}

export const getCharacters = (userId) => async (dispatch) => {
    const res = await fetch('/api/character/get', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: userId,
    })
    const data = await res.json()
    dispatch(getUserCharacters(data))
}

export const getCharacter = (characterId) => async (dispatch) => {
    const res = await fetch('/api/character/getone', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: characterId,
    })
    const data = await res.json()
    dispatch(getOneCharacter(data))
}

const initialState = {}

const characterReducer = (state = initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case FETCH_CLASSES:
            newState = {...state, classes: action.payload}
            return newState
        case FETCH_RACES:
            newState = {...state, races: action.payload}
            return newState
        case FETCH_ALIGNMENTS:
            newState = {...state, alignments: action.payload}
            return newState
        case FETCH_LANGUAGES:
            newState = {...state, languages: action.payload}
            return newState
        case FETCH_SAVINGTHROWS:
            newState = {...state, savingThrows: action.payload}
            return newState
        case FETCH_SKILLS:
            newState = {...state, skills: action.payload}
            return newState
        case GET_USER_CHARACTERS:
            newState = {...state, characters: action.payload}
            return newState
        case GET_ONE_CHARACTER:
            newState = {...state, character: action.payload}
            return newState
        default:
            return state
    }
}

export default characterReducer