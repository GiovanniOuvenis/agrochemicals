import { createSlice , PayloadAction} from "@reduxjs/toolkit";


type selected = {
    crop : string,
    target : string,
    chemical: string
};

const initialState = {
    crop : "all",
    target: "none",
    chemical: "none"
} as selected

export const selectedSlice = createSlice({
    name: "selected",
    initialState,
    reducers : {
        setCrop : (state, action : PayloadAction<string>) => {
          state.crop = action.payload
        },
        setTarget : (state, action : PayloadAction<string>) => {
            state.target = action.payload
        },
        setChemical : (state, action: PayloadAction<string>) => {
            state.chemical = action.payload
        }
    }
 
})

export const { setCrop, setTarget, setChemical } = selectedSlice.actions

const selectedReducer = selectedSlice.reducer;

export default selectedReducer