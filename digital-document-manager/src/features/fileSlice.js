import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../firebase/firebaseConfig"
import { ref, push, onValue, remove, update } from "firebase/database"

const initialState = {
  files: []
}

export const uploadFile = createAsyncThunk(
  "files/uploadFile",
  async (fileData) => {

    await push(ref(db, "files"), {
      ...fileData,
      date: new Date().toLocaleString()
    })

  }
)

export const fetchFiles = createAsyncThunk(
  "files/fetchFiles",
  async (_, { dispatch }) => {

    const filesRef = ref(db, "files")

    onValue(filesRef, (snapshot) => {

      const data = snapshot.val()

      const list = data
        ? Object.entries(data).map(([id, value]) => ({
            id,
            ...value
          }))
        : []

      dispatch(setFiles(list))
    })
  }
)

export const deleteFile = createAsyncThunk(
  "files/deleteFile",
  async ({ id }) => {

    await remove(ref(db, `files/${id}`))

    return id
  }
)

export const updateFileMetadata = createAsyncThunk(
  "files/updateFileMetadata",
  async ({ id, newData }) => {

    await update(ref(db, `files/${id}`), newData)

    return { id, newData }
  }
)

const fileSlice = createSlice({
  name: "files",
  initialState,

  reducers: {

    setFiles: (state, action) => {
      state.files = action.payload
    }

  },

  extraReducers: (builder) => {

    builder

      .addCase(deleteFile.fulfilled, (state, action) => {

        state.files = state.files.filter(
          (file) => file.id !== action.payload
        )

      })

      .addCase(updateFileMetadata.fulfilled, (state, action) => {

        const file = state.files.find(
          (f) => f.id === action.payload.id
        )

        if (file) {
          Object.assign(file, action.payload.newData)
        }

      })
  }
})

export const { setFiles } = fileSlice.actions

export default fileSlice.reducer