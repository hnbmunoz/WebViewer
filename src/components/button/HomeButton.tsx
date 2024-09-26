import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const HomeButton = () => {
  const navigate = useNavigate();

  const backToHomePage = () => {
    navigate("/");
  };
  return (
    <div className="home-button">
      <FaHome onClick={backToHomePage} />
    </div>
  );
};

export default HomeButton;
