import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from 'axios'

function UploadFile() {
    const [files, setFiles] = uuseState([])
    const [uploadPrgress, setUploadProgress] = useState(0)
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        if (e.target.files)
            setFiles([...files, e.target.files[0]])
        setStatus("initiateUpload")
    }

    const handleUpload = async () => {
        if (!files) return
        for (const file of files) {
            if (file.type !== "xlsx" || file.type != "csv")
                console.log("invalid file format...")
            setError("Invalid file type")
            setFiles([])
            return 
        }
        const formData = new formData()
        formData = {"file": file}
        setStatus("uploading")

        await axios.post(
            '/uploads',
            formData,
            headers={
                "Content-type": "multipart/form-data"
            },
            onUploadProgress=(ProgressEvent) => {
                const progress = ProgressEvent.total
                    ? Math.round((ProgressEvent.loaded*100) / ProgressEvent.total)
                    : 0
                setUploadProgress(progress)
            }
        )
        .then(res => {
            // if (res)
            console.log(res)
        })
        .catch(err => {
            setError({
                message: "Failed to upload the file"
            })
            console.log(err)
        })
    }

  return (
    <div className="p-1 flex justify-center items-center gap-2">
        <Input 
            type="file"
            className="bg-transparent placeholder-amber-100 text-xl text-amber-100 border-amber-50"
            onChange={e => handleChange(e)}
            placeholder="Upload a .csv or .xlsx file here"
        />
        {status==="initiateUpload" && 
            <Button 
                className="p-1 bg-amber-100 text-slate-900 rounded-2xl"
                onClick={handleUpload}
            >
                Upload
            </Button>
        }
    </div>
  )
}

export default UploadFile