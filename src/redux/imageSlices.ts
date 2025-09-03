import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageState {
  selectedImages: string[];
}

const initialState: ImageState = {
  selectedImages: [],
}

const imageSlice = createSlice({
  name: 'images',
  initialState: initialState,
  reducers: {
    setSelectedImages(state, action: PayloadAction<string[]>) {
      state.selectedImages = action.payload
    },
    resetSelectedImages(state) {
      state.selectedImages = []
    }
  }
})

export const { setSelectedImages, resetSelectedImages } = imageSlice.actions
export default imageSlice.reducer