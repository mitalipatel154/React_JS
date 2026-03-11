import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addProduct, updateProduct } from "../features/product/productSlice"

export default function AddProduct({ editingProduct, setEditingProduct }) {

  const dispatch = useDispatch()

  const [product, setProduct] = useState({
    name: "",
    category: "",
    stock: "",
    price: "",
    image: ""
  })

  useEffect(() => {
    if (editingProduct) {
      setProduct(editingProduct)
    }
  }, [editingProduct])

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!product.name || !product.category || !product.stock || !product.price) {
      alert("Fill all fields")
      return
    }

    if (editingProduct) {

      dispatch(updateProduct({
        id: editingProduct.id,
        data: product
      }))

      setEditingProduct(null)

    } else {

      dispatch(addProduct(product))

    }

    setProduct({
      name: "",
      category: "",
      stock: "",
      price: "",
      image: ""
    })
  }

  return (

    <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded p-4 mb-6">

      <div className="grid grid-cols-5 gap-3">

        <input
          className="border p-2 rounded"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />

        <input
          className="border p-2 rounded"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />

        <input
          className="border p-2 rounded"
          name="stock"
          placeholder="Stock"
          value={product.stock}
          onChange={handleChange}
        />

        <input
          className="border p-2 rounded"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />

        <input
          className="border p-2 rounded"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
        />

      </div>

      <div className="mt-3 flex justify-center gap-3">

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {editingProduct ? "Update Product" : "Add Product"}
        </button>

        {editingProduct && (
          <button
            type="button"
            onClick={() => {
              setEditingProduct(null)
              setProduct({
                name: "",
                category: "",
                stock: "",
                price: "",
                image: ""
              })
            }}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        )}

      </div>

    </form>
  )
}