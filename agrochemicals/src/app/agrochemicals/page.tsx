'use client'

import React, {useState, useEffect} from 'react'


export default async function SelectedAgrochemicals  ()  {
 const [crops, setCrops] = useState<string[]>([]) 
 
  useEffect( ()   => {    
      const getDocuments = async () => {
        const result = await fetch("http://localhost:3000/api/agrochemicals", 
        {method: "GET",
         mode: "cors",
        headers: {
        'Content-Type': 'application/json',
         "Access-control-allow-origin": "*"
},}).then((fetchedData) => {
  const toJSON = fetchedData.json(); 
  return toJSON 
}).then((data)=>{
  console.log(data)
  setCrops(data.crops[0].name)
})
   return result;
}
 
getDocuments()    
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