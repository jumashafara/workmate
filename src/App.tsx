import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashbord from "./pages/FeatureImportance";
import FeatureImporances from "./pages/FeatureImportance";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<FeatureImporances />} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/settings" element={<h1>Settings</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
