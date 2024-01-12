import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ExchangeRates {
  [currency: string]: number;
}

const ExchangeRatesComponent: React.FC = () => {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates | null>(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        // Make a GET request to the API
        const response = await axios.get('https://open.er-api.com/v6/latest');

        // Check if the request was successful
        if (response.status === 200) {
          const rates = response.data.rates;
          setExchangeRates(rates);
        } else {
          console.error('Failed to fetch exchange rates:', response.statusText);
        }
      } catch (error) {
        console.error('Error during API request:', error);
      }
    };

    // Call the function to fetch exchange rates
    fetchExchangeRates();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div style={{marginLeft:"30px"}}>
      <h1>Exchange Rates</h1>
      {exchangeRates && (
        <ul>
          {Object.entries(exchangeRates).map(([currency, rate]) => (
            <li key={currency}>{`${currency}: ${rate}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExchangeRatesComponent;
