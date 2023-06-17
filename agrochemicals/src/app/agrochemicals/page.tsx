"use client"
import React, {useState, useEffect} from 'react'

type Props = {}



export default async function SelectedAgrochemicals  (props: Props)  {
 const [crops, setCrops] = useState<string[]>([])
  
  useEffect( ()   => {
    (async () => {
      const getDocuments = async () => {
        const result = await fetch("http://localhost:3000/api/agrochemicals", {method: "GET",
mode: "cors",
headers: {
  'Content-Type': 'application/json',
  "Access-control-allow-origin": "*"
},}) 
const rslt = await result.json()
return rslt
      } 
   const finalRslt = await getDocuments();
   setCrops(finalRslt.crops)
    
    })();
  
  }, [])
  

  return (
    <>
    <div>Agrochemicals page</div>
    
    {/* {<section>
      {criteria.map((cr, index) => {
        return <h1 key={index}>{cr}</h1>
      })}
    </section>} */}
     <form >
  <label >Select Crop</label>
  <select name="crops" id="crops" >
  {crops.map((crop, index) => {
      return <option key={index} value={crop}>{crop}</option>
    })}    
  </select> 
  {/* <label >Select Category</label>
  <select name="categories" id="categories" >
  {categories.map((category : Document) => {
      return <option value={category.cides} >{category.cides}</option>
    })}    
  </select>
  <label >Select target</label>
  <select name="insect" id="insect" >
  {enemies.map((trgt : Document) => {
      return <option value={trgt.name} >{trgt.name}</option>
    })}    
  </select> 
  */}
  
   <input type="submit" value="Submit"/> 
</form> 
    </>
  )
}