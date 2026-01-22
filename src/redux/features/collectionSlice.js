import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}
export const collectionSlice = createSlice({
    name: "colleciton",
    initialState,
    reducers: {
        addcollection: (state, action) => {
            let exist = state.items.find(item => item.id == action.payload.id)
            if (!exist) {
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))

            }
        },
        clearCollection: (state, action) => {
            state.items=[]
            localStorage.removeItem('collection')

        },
    }
})
export const { addcollection, clearCollection } = collectionSlice.actions
export default collectionSlice.reducer