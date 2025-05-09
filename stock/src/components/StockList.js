

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StockList = () => {
    const [stocks, setStocks] = useState({});

    useEffect(() => {
        
        axios.get('http://20.244.56.144/evaluation-service/stocks')
            .then((response) => {
                setStocks(response.data.stocks);  
            })
            .catch((error) => {
                console.error('Error fetching stocks:', error);
            });
    }, []);

    return (
        <div>
            <h1>Stock List</h1>
            <ul>
                {Object.entries(stocks).map(([name, ticker]) => (
                    <li key={ticker}>
                        {name}: {ticker}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StockList;
