import React from 'react'
import { chemicalDocument } from '@/types/mongodb';
import {ChemicalsPresenter} from "../components/ChemicalsPresenter"
import { Select } from '../components/Select';


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
    
 
  return (
    <>
    <div>Agrochemicals page</div>
    <Select options={dta}/>
    <ChemicalsPresenter info={dta}/>    
    </>
  )
}