import React, { ChangeEvent, useState } from 'react';

const FileUploader: React.FC = () => {
  const [fileContent, setFileContent] = useState('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const content = reader.result as string;
        setFileContent(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" className="fileInput" onChange={handleFileChange} />
      {/* <div>{fileContent}</div> */}
    </div>
  );
};

export default FileUploader;