import { useDispatch } from "react-redux"
import { deleteFile, updateFileMetadata } from "../features/fileSlice"

function FileCard({ file }) {

  const dispatch = useDispatch()

  const rename = () => {

    const title = prompt("Enter new name")

    if (!title) return

    dispatch(
      updateFileMetadata({
        id: file.id,
        newData: { name: title }
      })
    )
  }

  return (

    <div className="border p-4 rounded bg-white shadow overflow-hidden">

      <h3 className="font-bold mb-2">
        {file.name}
      </h3>

      {file.type?.startsWith("image") && (
        <img
          src={file.data}
          className="w-full h-40 object-contain rounded mb-2"
        />
      )}
      
      {file.type === "application/pdf" && (
        <iframe
          src={file.data}
          className="w-full h-40 border rounded mb-2"
        ></iframe>
      )}

      <p className="text-sm text-gray-500 mb-2">
        {file.date}
      </p>

      <a
        href={file.data}
        download
        className="text-blue-500 block mb-3"
      >
        Download
      </a>

      <div className="flex gap-2">

        <button
          onClick={rename}
          className="bg-yellow-400 px-3 py-1 rounded"
        >
          Rename
        </button>

        <button
          onClick={() =>
            dispatch(deleteFile({ id: file.id }))
          }
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>

      </div>

    </div>

  )
}

export default FileCard