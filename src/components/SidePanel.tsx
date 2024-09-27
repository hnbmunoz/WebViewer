import { PullFromSessionStorage } from "../utils/helpers";
import { DocumentInterface } from "./interface/DocumentInterface";
import { useState, useEffect } from "react";

interface SidePanelProps {
  documentList?: DocumentInterface[];
}

const SidePanel = ({ documentList }: SidePanelProps) => {
  const [filter, setFilter] = useState<string>();
  const [list, setList] = useState<DocumentInterface[]>([]);
  const data = PullFromSessionStorage();
  useEffect(() => {
    setList(data);
    return () => {};
  }, [documentList]);

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
    const filteredDocuments = data?.filter((document) =>
      document.documentName
        .toLowerCase()
        .includes(e.currentTarget.value.toLowerCase())
    );

    setList(filteredDocuments);
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
        {list?.map((document: DocumentInterface, idx: number) => {
          return (
            <div className="side-panel--selection-list" key={idx}>
              {document.documentName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidePanel;
