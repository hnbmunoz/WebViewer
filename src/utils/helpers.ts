import { DocumentInterface } from "../components/interface/DocumentInterface"

export const PullFromSessionStorage = (): DocumentInterface[] => {
  const documents = JSON.parse(sessionStorage.getItem('viewedDocuments') ?? '[]');
  return documents || []; // Return an empty array if null
}

export const PushToSessionStorage = (document: DocumentInterface) => {
  const currentData = PullFromSessionStorage()
  const isExisting = currentData.find((data) => data.documentName.toLowerCase() === document.documentName.toLowerCase())

  if(isExisting) return
  const updatedData = [...currentData, document]

  sessionStorage.setItem('viewedDocuments', JSON.stringify(updatedData));
}