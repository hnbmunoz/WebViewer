import { DocumentInterface } from "./interface/DocumentInterface";
import { useState } from "react";

interface SidePanelProps {
  documentList?: DocumentInterface[];
}

const SidePanel = ({ documentList }: SidePanelProps) => {
  const [filter, setFilter] = useState<string>();

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };
  return (
    <div className="side-panel">
      <div className="side-panel--title">PDF WebViewer</div>
      <input
        className="side-panel--textbox"
        onChange={handleChangeFilter}
        value={filter}
      />
      <div className="side-panel--selection-box">
        {documentList?.map((document: DocumentInterface, idx: number)=> {
          return (
            <div className="side-panel--selection-list" key={idx}>{document.documentName}</div>
          )
        })}
      </div>
    </div>
  );
};

export default SidePanel;
