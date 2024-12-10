import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FeatureImporances from "./pages/FeatureImportance";
import ModelMetrics from "./pages/ModelMetrics";
import WhatIf from "./pages/WhatIf";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<FeatureImporances />} />
          <Route path="/model-metrics" element={<ModelMetrics />} />
          <Route path="/what-if" element={<WhatIf />} />
          <Route path="/settings" element={<h1>Settings</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
