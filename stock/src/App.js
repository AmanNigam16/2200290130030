import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StockPage from './pages/stockPage';
import CorrelationPage from './pages/CorrelationPage';
import Header from './components/Header';
import StockList from './components/StockList';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<StockPage />} />
        <Route path="/correlation" element={<CorrelationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
