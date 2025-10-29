import React, { useState } from "react";
import { Storage } from "aws-amplify";

export default function UploadReceipt() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return;
    const key = `receipts/${Date.now()}_${file.name}`;
    await Storage.put(key, file);
    alert("Receipt uploaded! Lambda will process it automatically.");
    setFile(null);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
        Upload & Analyze
      </button>
    </div>
  );
}
