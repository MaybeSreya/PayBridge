import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import queryString from 'query-string';
import { paymentMethods } from './data/paymentMethods';
import { PaymentGrid } from './components/PaymentGrid';

function App() {
  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<string>('USD');
  const [inrAmount, setInrAmount] = useState<number>(0);

  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    const amParam = parsed.am as string;
    
    if (amParam) {
      const [curr, amt] = amParam.split(':');
      setCurrency(curr);
      setAmount(Number(amt));
      
      // Simple conversion (you might want to use a real API for production)
      const rates: Record<string, number> = {
        USD: 82.5,
        EUR: 89.5,
        GBP: 104.5,
        INR: 1,
      };
      
      setInrAmount(Number(amt) * (rates[curr] || 1));
    }
  }, []);

  // Get the basename from the environment or default to the repository name for GitHub Pages
  const basename = import.meta.env.BASE_URL;

  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto p-6">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Payment Details
            </h1>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-xl text-gray-700">
                Amount: {amount} {currency}
              </p>
              <p className="text-lg text-gray-600 mt-2">
                ≈ {inrAmount.toFixed(2)} INR
              </p>
            </div>

            <div className="space-y-8">
              <PaymentGrid methods={paymentMethods} type="upi" />
              <PaymentGrid methods={paymentMethods} type="exchange" />
              <PaymentGrid methods={paymentMethods} type="crypto" />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
