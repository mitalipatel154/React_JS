import UploadFile from "../components/UploadFile"
import FileList from "../components/FileList"

function Dashboard() {

  return (

    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-5xl mx-auto bg-white p-8 rounded shadow">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Digital Document Manager
        </h1>

        <UploadFile />

        <FileList />

      </div>

    </div>

  )
}

export default Dashboard