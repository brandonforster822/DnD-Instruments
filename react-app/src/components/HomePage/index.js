import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import { authenticate } from "../../services/auth.js";
import { openSignup, openCharacter, openComingSoon } from "../../store/modal.js";
import * as characterActions from "../../store/character"

import "./HomePage.css"


const HomePage = ({authenticated, cheat}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [characterLoaded, setCharacterLoaded] = useState(false)
    const characterArray = useSelector((state) => state.character.characters?.userCharacters)
    const sessionId = useSelector((state) => state.session.id)
    
    const handleOpenCharacter = (id) => {
        dispatch(characterActions.getCharacter(id))
        dispatch(openCharacter())
    }
    
    useEffect(() => {
        dispatch(characterActions.getCharacters(sessionId))
    }, [sessionId])

    useEffect(() => {
        if(characterArray !== undefined){
            setCharacterLoaded(true)
            console.log(characterArray)
        } else {
            setCharacterLoaded(false)
        }
    }, [characterArray])

    return (
        <div>
            {!authenticated && (
            <div className="preview__container">
                <div className="noauthdiv characterpreview__container">
                    <img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/359/420/618/636272697874197438.png"/>
                    <button onClick={() => dispatch(openSignup())}>Create a character</button>
                </div>
                <div className="logo__container">
                    <img src="https://i.pinimg.com/originals/48/cb/53/48cb5349f515f6e59edc2a4de294f439.png"/>
                </div>
                <div className="noauthdiv mappreview__container">
                    <img src="https://i.pinimg.com/736x/ee/85/5d/ee855d7efa22f163fcd6f24560ce7128.jpg"/>
                    <button onClick={() => dispatch(openComingSoon())}>Upload a map</button>
                </div>
            </div>
            )}
            {authenticated && (
            <div className="preview__container">
                <div className="noauthdiv characterpreview__container">
                    <img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/359/420/618/636272697874197438.png"/>
                    <button onClick={() => history.push("/createcharacter")}>Create a character</button>
                </div>
                <div className="logo__container">
                    <img src="https://i.pinimg.com/originals/48/cb/53/48cb5349f515f6e59edc2a4de294f439.png"/>
                </div>
                <div className="character__container">
                    {characterLoaded && (Object.keys(characterArray).sort().map((character) =>{
                        console.log(character)
                        return (
                            
                            <button onClick={() => handleOpenCharacter(characterArray[character].id)} className='frodobutton'>{characterArray[character].name}</button>
                            
                        )
                    }))}
                </div>
            </div>
            )}
        </div>
        
    )
}


export default HomePage