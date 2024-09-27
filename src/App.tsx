import "./App.scss";
import SidePanel from "./components/SidePanel";
import PDFSelector from "./components/modules/pdf/PDFSelector";
import { useState } from "react";
import { DocumentInterface } from "./components/interface/DocumentInterface";

function App() {
  const [documentList, setDocumentList] = useState<DocumentInterface[]>([])

  const handleUpsertDocumentList = (document: DocumentInterface) => {
    if(!documentList) return
    const isExisting = documentList.find((data) => data.documentName === document.documentName)
    if (isExisting) return
    const updatedList = [...documentList, document]
    setDocumentList(updatedList)
  }

 
  return (
    <div className="app">
      <SidePanel documentList={documentList} />
      <PDFSelector handleUpsertDocumentList={handleUpsertDocumentList}/>
    </div>
  );
}

export default App;
