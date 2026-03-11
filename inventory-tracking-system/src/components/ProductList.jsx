import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, deleteProduct } from "../features/product/productSlice"

export default function ProductList({ setEditingProduct }) {

  const dispatch = useDispatch()

  const { products } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (

    <div className="bg-white shadow-md rounded">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Stock</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Actions</th>

          </tr>

        </thead>

        <tbody>

          {products.length === 0 ? (

            <tr>
              <td colSpan="6" className="text-center p-4">
                No products added
              </td>
            </tr>

          ) : (

            products.map((p) => (

              <tr key={p.id} className="border-t hover:bg-gray-50">

                <td className="p-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-20 h-20 object-contain rounded shadow"
                  />
                </td>

                <td className="p-3">{p.name}</td>

                <td className="p-3">{p.category}</td>

                <td className={`p-3 ${p.stock < 5 ? "text-red-600 font-bold" : ""}`}>
                  {p.stock}
                </td>

                <td className="p-3">₹{p.price}</td>

                <td className="p-3 space-x-2">

                  <button
                    onClick={() => setEditingProduct(p)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => dispatch(deleteProduct(p.id))}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  )
}