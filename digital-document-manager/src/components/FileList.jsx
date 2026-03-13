import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchFiles } from "../features/fileSlice"
import FileCard from "./FileCard"

function FileList() {

  const dispatch = useDispatch()

  const files = useSelector(
    (state) => state.files.files
  )

  useEffect(() => {

    dispatch(fetchFiles())

  }, [])

  return (

    <div className="grid grid-cols-3 gap-4">

      {files.map((file) => (

        <FileCard
          key={file.id}
          file={file}
        />

      ))}

    </div>
  )
}

export default FileList