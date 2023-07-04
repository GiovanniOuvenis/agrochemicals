'use client'
import React from 'react'
import { chemicalDocument } from '@/types/mongodb'
import  useFilter  from '../hooks/useFilter'


type Props = {
  info : Array<chemicalDocument>
}

export const ChemicalsPresenter = (props: Props) => {
  const  filtered  = useFilter(props.info)
  

  return (
    <>
    <h1>presenter</h1>
     {
      filtered.map((currentDoc, index)=> {
       return (
        <section key={index}>
        <h1>{currentDoc.commercialName}</h1>
        
        
        </section>
        
       )
      })
      }    
    </>
  )
}