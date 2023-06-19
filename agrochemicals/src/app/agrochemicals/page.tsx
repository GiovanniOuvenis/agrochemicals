import React from 'react'
import { chemicalDocument } from '@/types/mongodb';


const getDocuments = async () : Promise<Array<chemicalDocument>> => {
  const result = await fetch("http://localhost:3000/api/agrochemicals", 
  {method: "GET",
  next: {revalidate: 10}
})
.then((fetchedData) => {    
const toJSON = fetchedData.json(); 
return toJSON 
})
return result;
}



export default async function SelectedAgrochemicals  ()  {
    const dta = await getDocuments()
    console.log(dta)
 
  return (
    <>
    <div>Agrochemicals page</div>
    <div>{dta[0].cides}</div>
    
    
    {/* {<section>
      {criteria.map((cr, index) => {
        return <h1 key={index}>{cr}</h1>
      })}
    </section>} */}
     {/* <form >
  <label >Select Crop</label>
  <select name="crops" id="crops" >
  {crops.map((crop, index) => {
      return <option key={index} value={crop}>{crop}</option>
    })}    
  </select> 
  {/* <label >Select Category</label> */}
  {/* <select name="categories" id="categories" >
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
   {/* */}
   {/* <input type="submit" value="Submit"/> 
</form>  */}
    </>
  )
}