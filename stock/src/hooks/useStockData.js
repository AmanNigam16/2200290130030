
import { useEffect, useState } from 'react';
import { fetchStockPrices } from '../api';

const useStockData = (symbol) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchStockPrices(symbol);
        setData(result);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [symbol]);

  return { data, loading };
};

export default useStockData;
