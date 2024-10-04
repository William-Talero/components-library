import React, { useState, useRef } from "react";
import { FileUploaderProps } from "./IFileUploader";
import "./FileUploader.styles.scss";
import Icon from "../Icon/Icons";

const FileUploader: React.FC<FileUploaderProps> = ({
  maxFileSize = 2,
  maxFileNameLength = 50,
  allowedExtensions = [
    ".doc",
    ".pdf",
    ".jpg",
    ".gif",
    ".bmp",
    ".jpeg",
    ".docx",
    ".png",
  ],
  maxFiles = 5,
  onFilesChange,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []);
    const validFiles = newFiles.filter((file) => {
      const extension = "." + file.name.split(".").pop()?.toLowerCase();
      return (
        allowedExtensions.includes(extension) &&
        file.size <= maxFileSize * 1024 * 1024 &&
        file.name.length <= maxFileNameLength
      );
    });

    if (validFiles.length + files.length > maxFiles) {
      alert(`You can only upload a maximum of ${maxFiles} files.`);
      return;
    }

    setFiles((prevFiles) => [...prevFiles, ...validFiles]);
    if (onFilesChange) {
      onFilesChange([...files, ...validFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    if (onFilesChange) {
      onFilesChange(files.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="file-uploader">
      {files.length === 0 ? (
        <div
          className="file-uploader__empty"
          onClick={() => fileInputRef.current?.click()}
        >
          <Icon $name="plus" $w="20px" />
          <span>Adjuntar archivo</span>
          <p>
            Puede cargar un archivo con extensión {allowedExtensions.join(", ")}{" "}
            , de un tamaño máximo de {maxFileSize} MB y que su nombre tenga
            máximo {maxFileNameLength} caracteres
          </p>
        </div>
      ) : (
        <div className="file-uploader__files">
          <div className="file-uploader__files-header">
            <Icon $name="plus" $w="20px" />
            <span>
              {files.length}{" "}
              {files.length === 1 ? "archivo adjunto" : "archivos adjuntos"}
            </span>
          </div>
          <p>
            Puede cargar un archivo con extensión {allowedExtensions.join(", ")}{" "}
            , de un tamaño máximo de {maxFileSize} MB y que su nombre tenga
            máximo {maxFileNameLength} caracteres
          </p>
          {files.map((file, index) => (
            <div key={index} className="file-uploader__file">
              <span>{file.name}</span>
              <button onClick={() => removeFile(index)}>X</button>
            </div>
          ))}
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        multiple
        accept={allowedExtensions.join(",")}
      />
    </div>
  );
};

export {FileUploader};
