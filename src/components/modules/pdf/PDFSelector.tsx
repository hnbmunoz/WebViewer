import { useState, useCallback, useEffect } from "react";
import PDFViewer from "./PDFViewer";
import ClearButton from "../../button/ClearButton";
import { useDropzone } from "react-dropzone";
import { DocumentInterface } from "../../interface/DocumentInterface";
import { PushToSessionStorage } from "../../../utils/helpers";

interface PDFSelectorProps {
  handleUpsertDocumentList: (document: DocumentInterface) => void;
}

const PDFSelector = ({
  handleUpsertDocumentList,
}: PDFSelectorProps) => {
  const [sourceFile, setSourceFile] = useState<string | null>();


  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles) return;
    const file = acceptedFiles[0];
    if (file && file.type === "application/pdf") {
      let data = URL.createObjectURL(file);
      handleUpsertDocumentList({
        documentName: file.name ?? "",
        documentBlob: data ?? "",
      });
      PushToSessionStorage({
        documentName: file.name ?? "",
        documentBlob: data ?? "",
      });
      setSourceFile(data);
    } else {
      alert("Please upload a valid PDF file");
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleClearButton = () => {
    setSourceFile(null);   
  };
  return (
    <div className="pdf-viewer">
      <div className="pdf-viewer--container">
        {!sourceFile && (
          <div
            className="flex-column"
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
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
        {sourceFile && <ClearButton onClickClear={handleClearButton} />}
      </div>
    </div>
  );
};

export default PDFSelector;
