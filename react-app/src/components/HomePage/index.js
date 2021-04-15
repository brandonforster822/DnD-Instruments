import React from "react"
import {useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"
import { authenticate } from "../../services/auth.js";
import { openSignup, openCharacter, openComingSoon } from "../../store/modal.js";

import "./HomePage.css"


const HomePage = ({authenticated, cheat}) => {
    const dispatch = useDispatch()
    const history = useHistory()
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
                    <button className='frodobutton' onClick={() => dispatch(openCharacter())}>Frodo Baggins</button>
                    {cheat && (<button className='sambutton' onClick={() => dispatch(openCharacter())}>Samwise Gamgee</button>)}
                    
                </div>
            </div>
            )}
        </div>
        
    )
}


export default HomePage