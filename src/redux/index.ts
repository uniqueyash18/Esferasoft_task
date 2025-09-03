import { configureStore } from '@reduxjs/toolkit'
import imageReducer from './imageSlices'
import uploadReducer from './uploadSlice'

export const store = configureStore({
  reducer: {
    images: imageReducer,
    upload: uploadReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch