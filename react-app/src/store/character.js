const FETCH_CLASSES = "classes/query"
const FETCH_RACES = "races/query"
const FETCH_ALIGNMENTS = "alignments/query"
const FETCH_LANGUAGES = "languages/query"
const FETCH_SAVINGTHROWS = "savingthrows/query"
const FETCH_SKILLS = "skills/query"
const CREATE_CHARACTER = "character/create"

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

export const createOneCharacter = () => {
    return {
        type: CREATE_CHARACTER,
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

export const createCharacter = (name, 
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
                "Content-type": "application",
            },
            body: {name: name, 
                level: level, 
                class: characterClass, 
                race: race, 
                alignment: alignment, 
                proficiencies: proficiencies, 
                personalityTraits: personalityTraits, 
                ideals: ideals, 
                bonds: bonds,
                flaws: flaws,
                strength: strength,
                dex: dex,
                constitution: constitution,
                intelligence: intelligence,
                wisdom: wisdom,
                charisma: charisma,
                savingThrowOne: savingThrowOne,
                savingThrowTwo: savingThrowTwo,
                skillOne: skillOne,
                skillTwo: skillTwo,
                skillThree: skillThree,
                skillFour: skillFour  
                }
        })
        const data = await res.json()
        dispatch(createOneCharacter(data))
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
        default:
            return state
    }
}

export default characterReducer