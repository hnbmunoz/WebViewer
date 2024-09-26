import { MdDelete } from "react-icons/md";

interface ClearButtonProps {
  onClickClear: () => void
}
const ClearButton = ({onClickClear}: ClearButtonProps) => {
  return (
    <div onClick={onClickClear} className="clear-button">
    <MdDelete  />
  </div>
  )
}

export default ClearButton