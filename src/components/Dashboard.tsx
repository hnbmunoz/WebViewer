import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();

  const handlePDFViewer = () => {
    navigate('/pdf-viewer')
  }
  return (
    <div className="dashboard">
      <h1 className='label'>Select Webviewer</h1>

      <div className="flex-row">
        <button className="dashboard--tile" onClick={handlePDFViewer}>PDF Viewer</button>
        <button className="dashboard--tile">Image Gallery</button>
        <button className="dashboard--tile">Video Player</button>
      </div>
    </div>
  );
};

export default Dashboard;
