import { useState } from "react"
import AddProduct from "./components/AddProduct"
import ProductList from "./components/ProductList"

function App() {

  const [editingProduct, setEditingProduct] = useState(null)

  return (

    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Inventory Tracking System
      </h1>

      <AddProduct
        editingProduct={editingProduct}
        setEditingProduct={setEditingProduct}
      />

      <ProductList setEditingProduct={setEditingProduct} />

    </div>

  )
}

export default App