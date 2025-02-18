import { configureStore } from '@reduxjs/toolkit'
import cardSlice from "../features/Cartslice"



export default configureStore({
  reducer: {
    allcard : cardSlice
  },
})