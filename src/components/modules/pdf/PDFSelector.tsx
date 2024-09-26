import { useState, useCallback } from "react";
import PDFViewer from "./PDFViewer";
import { useDropzone } from "react-dropzone";
import HomeButton from "../../button/HomeButton";

const PDFSelector = () => {
  const [sourceFile, setSourceFile] = useState<any>();
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles) return;
    const file = acceptedFiles[0];
    if (file && file.type === "application/pdf") {
      let data = URL.createObjectURL(file);
      setSourceFile(data);
    } else {
      alert("Please upload a valid PDF file");
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="pdf-viewer">
      <div className="pdf-viewer--container">
        {!sourceFile && (
          <div
            className="flex-column"
            style={{ alignItems: "center", justifyContent: "center", width: '100%' }}
          >
            <h3 className="label" style={{ margin: "1.5rem" }}>
              Drag and drop some files here, or click to select files
            </h3>
            <div {...getRootProps()} className="pdf-viewer--dropzone">
              <input {...getInputProps()} />
              {<p></p>}
            </div>
          </div>
        )}
        {sourceFile && <PDFViewer source={sourceFile} />}
        <HomeButton />
      </div>
    </div>
  );
};

export default PDFSelector;
