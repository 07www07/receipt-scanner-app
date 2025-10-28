import React, { useState } from 'react';
import { Storage, DataStore } from 'aws-amplify';

export default function UploadReceipt() {
  const [file, setFile] = useState(null);

  const handleFileChange = e => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return;
    const key = `receipts/${file.name}`;
    await Storage.put(key, file);
    alert('Receipt uploaded! Now process the data...');
    // Call a Lambda function or Textract integration to extract data here
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload & Analyze</button>
    </div>
  );
}
