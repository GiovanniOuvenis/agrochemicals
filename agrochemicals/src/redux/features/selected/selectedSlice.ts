import { chemicalDocument } from "@/types/mongodb";
import { createSlice , PayloadAction} from "@reduxjs/toolkit";

type filterObject = Partial<chemicalDocument>
const filters : filterObject[] = []
const added : boolean = false
const removed : boolean = false

const initialState = {  
  filters,
  added,
  removed
} 

export const selectedSlice = createSlice({
    name: "selected",
    initialState,
    reducers : {
        addFilter : (state, action : PayloadAction<filterObject>) => {  
          state.filters.push(action.payload)
        },        
        removeFilter : (state, action : PayloadAction<filterObject>) => {  
           state.filters =  state.filters.filter((cf)=> {
            const keyName = Object.keys(cf)[0]   
            return cf[keyName as keyof chemicalDocument] !== action.payload[keyName as keyof chemicalDocument]
            })
         
          },
          remove : (state, action: PayloadAction<string>) =>{
            state.removed = !state.removed
          },
          add : (state, action: PayloadAction<string>) =>{
            state.added = !state.added
          }
        
    }
 
})

export const { addFilter , removeFilter, remove, add} = selectedSlice.actions

const selectedReducer = selectedSlice.reducer;

export default selectedReducer