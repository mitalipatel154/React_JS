import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateProduct } from "../features/product/productSlice"

export default function EditProduct({ product, close }) {

  const dispatch = useDispatch()

  const [form, setForm] = useState(product)

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e) => {

    e.preventDefault()

    dispatch(updateProduct({
      id: product.id,
      data: form
    }))

    close()

  }

  return (

    <form onSubmit={handleSubmit} className="p-4 bg-gray-200 mt-4">

      <input name="name" value={form.name} onChange={handleChange} className="border p-2 mr-2"/>

      <input name="category" value={form.category} onChange={handleChange} className="border p-2 mr-2"/>

      <input name="stock" value={form.stock} onChange={handleChange} className="border p-2 mr-2"/>

      <input name="price" value={form.price} onChange={handleChange} className="border p-2 mr-2"/>

      <button className="bg-green-500 text-white px-3 py-1 mr-2">
        Update
      </button>

      <button
        type="button"
        onClick={close}
        className="bg-gray-500 text-white px-3 py-1"
      >
        Cancel
      </button>

    </form>

  )
}