import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { openSearchIndex } from "../../store/modal"
import * as searchActions from "../../store/search"

import "./SearchPage.css"





const Search = ({loaded, setLoaded}) =>{
    const dispatch = useDispatch()
    const searchArray = useSelector((state) => state.search.results)
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const handleOpenModal = (searchUrl) => {
        console.log(searchUrl)
        dispatch(searchActions.returnOneSearch(searchUrl))
        dispatch(openSearchIndex())
    }

    useEffect(() => {
        if(searchArray !== undefined){
            setLoaded(true)
        } else {
            setLoaded(false)
        }
    }, [searchArray])

    return (
        <div>
            {!loaded && (
                <p>loading</p>
            )}
            
            {loaded && (Object.keys(searchArray).sort().map((queryResult) => {
                const categoryIndex = searchArray[queryResult].url.split('/')[2]
                const categoryStringArray = categoryIndex.split('-')
                categoryStringArray[0] = capitalize(categoryStringArray[0])
                const category = categoryStringArray.join(' ')
                    return (
                        <div onClick={() => handleOpenModal(searchArray[queryResult].url)} className="searchresult__container">
                        <p>name: {searchArray[queryResult].name}</p>
                        <p>category: {category}</p>
                        </div>
                    )
            }))}
        </div>
    )
}


export default Search