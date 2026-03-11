import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../firebase/firebaseConfig"
import { ref, push, remove, update, get } from "firebase/database"

const initialState = {
  products: [],
  loading: false
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {

    const snapshot = await get(ref(db, "products"))

    if (!snapshot.exists()) return []

    const data = snapshot.val()

    return Object.keys(data).map((key) => ({
      id: key,
      ...data[key]
    }))
  }
)

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product, { dispatch }) => {

    await push(ref(db, "products"), product)

    dispatch(fetchProducts())
  }
)

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { dispatch }) => {

    await remove(ref(db, `products/${id}`))

    dispatch(fetchProducts())
  }
)

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, data }, { dispatch }) => {

    await update(ref(db, `products/${id}`), data)

    dispatch(fetchProducts())
  }
)

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload
      state.loading = false
    })

  }
})

export default productSlice.reducer