import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SearchIndexModal from "."
import { closeSearchIndex } from "../../store/modal"
import "./searchIndex.css"


const SearchIndexForm = () => {
    const [resultLoaded, setResultLoaded] = useState(false)
    const searchResult = useSelector((state) => state.search.result)
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    useEffect(() => {
        if(searchResult !== undefined){
            setResultLoaded(true)
        } else {
            setResultLoaded(false)
        }
    }, [searchResult])

    return(
        <div className="search__index">
            {!resultLoaded && (
                <p>loading</p>
            )}
            {resultLoaded && (
                <h2>{searchResult.name}</h2>
            )}
            {resultLoaded && (Object.keys(searchResult).sort().map((searchInfo) => {
                if (searchInfo === "url" || searchInfo === "index" || searchInfo === "name"){
                    return
                }else if (typeof searchResult[searchInfo] === "object"){
                    const categoryStringArray = searchInfo.split('_')
                    categoryStringArray[0] = capitalize(categoryStringArray[0])
                    const category = categoryStringArray.join(' ')
                    console.log(category)
                    const categoryArray = []
                    console.log(searchResult)
                    Object.entries(searchResult[searchInfo]).map((categoryInfo) => {
                        if (categoryInfo[0] !== "index" && categoryInfo[0] !== "url" && typeof categoryInfo[1] !== "object") {
                            console.log(categoryInfo[0])
                            categoryArray.push(categoryInfo)
                            }
                        })
                    if (categoryArray.length === 1){
                        return (
                            <p>{category}: {categoryArray[0][1]}</p>
                        )
                    } else {
                        return
                    }
        
                } else {
                    const categoryStringArray = searchInfo.split('_')
                    categoryStringArray[0] = capitalize(categoryStringArray[0])
                    const category = categoryStringArray.join(' ')
                    return (
                        <p>{category}: {searchResult[searchInfo]}</p>
                    )
                }
            }))}
        </div>
    )
}

export default SearchIndexForm