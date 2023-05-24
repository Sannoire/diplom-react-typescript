import React, { ChangeEvent, useState, useEffect } from 'react';
import loadFile from "./csvDownload.svg"
import styles from "./header.module.css"
import {readTextFile} from "../../helpers/handleFile"

export function setFileContent(content: string) {
  // fileContent = content;
}

export function Header() {
  const [fileContent, setFileContent] = useState<string>();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      
    const files = event.target.files;

    if (files && files.length > 0) {
        const file = files[0];
        readTextFile(file, setFileContent)
    }
  };

  useEffect(()=>{
      console.log("FILE: ", fileContent);
  },[fileContent])

  return (
  <div className={styles.header}>
    <div className={styles.loadFileBtn}>
    <label  htmlFor="fileInput" id="fileLabel">
      <img className="loadFile" src={loadFile} height={"100%"}/>
    </label>
    <input type="file" id="fileInput" className="fileInput" onChange={handleFileChange} />
    </div>
  </div>

  );
}

