"use client"
import React, {useState, useEffect, EffectCallback} from 'react'
import { NextResponse } from 'next/server'
import { WithId, Document } from 'mongodb'


type Props = {}
type collection = WithId<Document>[]

// async function getDocuments () : Promise<any>  {
//   const result = await fetch("http://localhost:3000/api/agrochemicals", {method: "GET",
// mode: "cors",
// headers: {
//   'Content-Type': 'application/json',
//   "Access-control-allow-origin": "*"
// },})

//   return NextResponse.json(result)
  
//  }


export default async function SelectedAgrochemicals  (props: Props)  {
  
  // const crops:  collection = chems.crops;
  // const enemies : collection = chems.enemies;
  // const categories : collection = chems.categories;
 
  useEffect( ()   => {
      const getDocuments = async () => {
        const result = await fetch("http://localhost:3000/api/agrochemicals", {method: "GET",
mode: "cors",
headers: {
  'Content-Type': 'application/json',
  "Access-control-allow-origin": "*"
},}).then((res) =>{
console.log(res.body)

})

  
      } 
     getDocuments();
      

  }, [])
  
  

  return (
    <>
    <div>Agrochemicals page</div>
    {/* {<section>
      {criteria.map((cr, index) => {
        return <h1 key={index}>{cr}</h1>
      })}
    </section>} */}
    {/* <form >
  <label >Select Crop</label>
  <select name="crops" id="crops" >
  {crops.map((crop) => {
      return <option value={crop.name}>{crop.name}</option>
    })}    
  </select> 
  <label >Select Category</label>
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
 
  
   <input type="submit" value="Submit"/> 
</form> */}
    </>
  )
}