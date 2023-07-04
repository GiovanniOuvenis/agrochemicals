import React , {useEffect, useState} from 'react'
import { useAppSelector } from './reduxTypedHooks'
import { chemicalDocument } from '@/types/mongodb'


function filterDocuments (docs : chemicalDocument[], criteria : Partial<chemicalDocument> ) {
    const keyName = Object.keys(criteria)[0];    
    const filteredResult = docs.filter((currentDoc)=>{
      if(currentDoc[keyName as keyof chemicalDocument] === criteria[keyName as keyof chemicalDocument] || currentDoc[keyName as keyof chemicalDocument].includes(criteria[keyName as keyof chemicalDocument]) ) {
return currentDoc
      }      
    })    
return filteredResult
}

function filterAllCriteria( docsArray : chemicalDocument[], currentFilter : Partial<chemicalDocument>) : chemicalDocument[]  {
   let nexStage = filterDocuments(docsArray, currentFilter)
   return nexStage  
}


const useFilter = (firstArgument : chemicalDocument[]) => {
    const [filtered, setFiltered] = useState<chemicalDocument[]>([])
    const { filters, added, removed }  = useAppSelector((store)=> store.selectedReducer)
    const lastFilter = filters[filters.length - 1]

    useEffect(()=>{
        let result = []
        if(filtered.length === 0) {    
        setFiltered(firstArgument)
        } else {            
        result = filterDocuments(filtered,lastFilter )
        setFiltered(result)
        } 
    }, [added])

    useEffect(()=>{
      let result : chemicalDocument[] = firstArgument;
        if (filters.length === 0 ) {
            setFiltered(firstArgument)
        } 
    
    for (let filter of filters) {
     result = filterAllCriteria(result, filter)
     if (result.length === 0) {
        return
     }
    }
    setFiltered(result)
     }, [removed])
  
    return filtered
}

export default useFilter