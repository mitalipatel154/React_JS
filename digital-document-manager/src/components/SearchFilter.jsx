import { useState } from "react"

function SearchFilter({ files, setFiltered }) {

  const [search, setSearch] = useState("")

  const handleSearch = (e) => {

    const value = e.target.value

    setSearch(value)

    const filtered = files.filter((file) =>
      file.name.toLowerCase().includes(value.toLowerCase())
    )

    setFiltered(filtered)
  }

  return (

    <input
      className="border p-2 mb-4 w-full"
      placeholder="Search documents..."
      value={search}
      onChange={handleSearch}
    />

  )
}

export default SearchFilter