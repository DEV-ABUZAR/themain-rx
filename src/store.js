import { configureStore } from '@reduxjs/toolkit'
import medSlice from './feature/medSlice'

export const store = configureStore({
  reducer: {
    meds : medSlice
  },
})