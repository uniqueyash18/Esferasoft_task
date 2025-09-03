import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UploadState {
    progress: number;
    status: 'idle' | 'uploading' | 'success' | 'failed';
    error: string | null;
}

const initialState: UploadState = {
    progress: 0,
    status: 'idle',
    error: null
}


const uploadSlice = createSlice({
  name: 'upload',
  initialState: initialState,
  reducers: {
    setProgress(state, action: PayloadAction<number>) {
      state.progress = action.payload
    },
    setStatus(state, action: PayloadAction<'idle' | 'uploading' | 'success' | 'failed'>) {
      state.status = action.payload
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    }
  }
})

export const { setProgress, setStatus, setError } = uploadSlice.actions
export default uploadSlice.reducer