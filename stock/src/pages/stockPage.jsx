
import React from 'react';
import useStockData from '../hooks/useStockData';

const StockPage = () => {
  const { data, loading } = useStockData('NVDA');

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Stock Data for NVDA</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default StockPage;
