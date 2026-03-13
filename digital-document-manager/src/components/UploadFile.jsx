import { useDispatch } from "react-redux"
import { uploadFile } from "../features/fileSlice"
import { useState } from "react"

function UploadFile() {

  const dispatch = useDispatch()

  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [progress, setProgress] = useState(0)

  const handleFileChange = (e) => {

    const selected = e.target.files[0]

    if (!selected) return

    setFile(selected)

    const reader = new FileReader()

    reader.readAsDataURL(selected)

    reader.onload = () => {
      setPreview(reader.result)
    }
  }

  const handleDrop = (e) => {

    e.preventDefault()

    const droppedFile = e.dataTransfer.files[0]

    if (!droppedFile) return

    setFile(droppedFile)

    const reader = new FileReader()

    reader.readAsDataURL(droppedFile)

    reader.onload = () => {
      setPreview(reader.result)
    }

  }

  const handleUpload = () => {

    if (!file) {
      alert("Select file first")
      return
    }

    let p = 0

    const interval = setInterval(() => {

      p += 20
      setProgress(p)

      if (p >= 100) {

        clearInterval(interval)

        dispatch(
          uploadFile({
            name: file.name,
            type: file.type,
            data: preview
          })
        )

        setFile(null)
        setPreview(null)
        setProgress(0)

        document.getElementById("fileInput").value = ""

      }

    }, 200)

  }

  return (

    <div className="p-6 bg-white shadow rounded mb-6">

      <h2 className="text-xl font-bold mb-4">
        Upload Document
      </h2>

      <div
        onDragOver={(e)=>e.preventDefault()}
        onDrop={handleDrop}
        className="border-dashed border-2 p-8 text-center mb-4 bg-gray-100"
      >
        Drag & Drop File Here
      </div>


      <input
        id="fileInput"
        type="file"
        onChange={handleFileChange}
        className="file:bg-gray-200 file:text-black file:px-4 file:py-2 file:border-0 file:rounded mb-4"
      />


      {preview && file?.type?.startsWith("image") && (
        <img
          src={preview}
          className="w-40 mb-4"
        />
      )}

      {preview && file?.type === "application/pdf" && (
        <iframe
          src={preview}
          className="w-full h-40 mb-4 border"
        ></iframe>
      )}


      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload
      </button>

      {progress > 0 && (
        <div className="mt-4">

          <progress
            value={progress}
            max="100"
            className="w-full"
          ></progress>

          <p className="text-sm">
            Uploading {progress}%
          </p>

        </div>
      )}

    </div>

  )
}

export default UploadFile