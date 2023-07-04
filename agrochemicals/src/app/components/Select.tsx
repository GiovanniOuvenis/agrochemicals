'use client'

import React, { useEffect, useState, ChangeEvent} from 'react'
import { chemicalDocument } from '@/types/mongodb';
import { useAppDispatch, useAppSelector } from '../hooks/reduxTypedHooks';
import useFilter  from '../hooks/useFilter';
import { add, addFilter, remove, removeFilter} from '@/redux/features/selected/selectedSlice'; 

type Props = {
    options: Array<chemicalDocument>    
}
type stringArr = string[]
type effectArgument = Array<chemicalDocument>


export const Select = (props: Props) => {
    const [categories, setCategories ] = useState<stringArr>([])
    const [crops, setCrops] = useState<stringArr>([])
    const [activeSubs, setActiveSubs] = useState<stringArr>([])
    const [targets, setTargets] = useState<stringArr>([])
    const { filters}  = useAppSelector((store)=> store.selectedReducer)
    const dispatch = useAppDispatch(); 
    const filtered = useFilter(props.options)
    
    const ctgrs : stringArr = []
    const crps : stringArr = []
    const ctvsb : stringArr = []
    const trgts : stringArr = []

useEffect(()=>{
  props.options.map((currentDocument)=>{
    if (!ctgrs.includes(currentDocument.cides)) {
      ctgrs.push(currentDocument.cides)  
      }
  
      if (!ctvsb.includes(currentDocument.activeSubstance)) {
        ctvsb.push(currentDocument.activeSubstance)  
        }
  
     currentDocument.crops.map((crop : string)=>{
      if (!crps.includes(crop)) {
         crps.push(crop)
      }
      })
     currentDocument.targets.map((target: string)=>{
      if (!trgts.includes(target)) {
        trgts.push(target)
      }
   })
   })
  setCategories(ctgrs)
  setActiveSubs(ctvsb)
  setCrops(crps)
  setTargets(trgts)
},[])

  
 


const selectHandler = (e : ChangeEvent<HTMLSelectElement>) => {
  e.preventDefault()
dispatch(addFilter({[e.target.name] : e.target.value }))
dispatch(add(""))
} 

const deleteHandler = ( e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
     e.preventDefault()     
  dispatch(removeFilter({[e.currentTarget.title] : e.currentTarget.name}))
  dispatch(remove(""))
}

 

  return (
    <>
     {filters.length > 0  && (
    filters.map((filter, index)=> {
      const keyName = Object.keys(filter)[0]      
return (
  <div key={index}>
    <h1>{filter[keyName as keyof chemicalDocument]}</h1>
    <button title={keyName} name={filter[keyName as keyof chemicalDocument]} onClick={(e)=>{deleteHandler(e)}}>x</button>
    </div>
)
    })
    ) }   
    <form >
  <label >Select Crop</label>
  <select name="crops" id="crops" onChange={(e)=> {selectHandler(e)}}>
    <option key={-1} value="please select crop">Please select crop</option>
      {crops.map((currCrop, index)=>{
    return <option key={index} value={currCrop} >{currCrop}</option>
      })}
  </select> 
  <label >Select Crop</label>
  <select name="targets" id="target" onChange={(e)=> {selectHandler(e)}}>
  <option key={-1} value="please select target">Please select target</option>
      {targets.map((currTarget, index)=>{
    return <option key={index} value={currTarget}>{currTarget}</option>
      })}
  </select>
  <label >Select Category</label>
  <select name="cides" id="categories" onChange={(e)=> {selectHandler(e)}}>
  <option key={-1} value="please select category">Please select category</option>
      {categories.map((c, index)=>{
        return <option key={index} value={c}>{c}</option>
      })}
  </select>  
  <label >Select active substance</label>
  <select name="activeSubstance" id="active substance" onChange={(e)=> {selectHandler(e)}}>
  <option key={-1} value="please select active substnce">Please select active substance</option>
      {activeSubs.map((as, index)=>{
        return <option key={index} value={as}>{as}</option>
      })}
  </select>    
</form>
</>

  )
}