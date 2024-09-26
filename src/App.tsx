import "./App.scss";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  { Suspense, lazy } from "react";

// Lazy loading components
const PDFSelector = lazy(() => import("./components/modules/pdf/PDFSelector"));

function App() {
 
  return (
    <div className="app">
      <Header />
      <Router>
          {/* Suspense to handle the loading state */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
            <Route path="/" element={<Dashboard />} />
              <Route path="/pdf-viewer" element={<PDFSelector />} />
            </Routes>
          </Suspense>
      </Router>
    </div>
  );
}

export default App;
