import { PaymentMethod } from '../types';
import { PaymentOption } from './PaymentOption';

interface PaymentGridProps {
  methods: PaymentMethod[];
  type: 'upi' | 'crypto' | 'exchange';
}

export const PaymentGrid = ({ methods, type }: PaymentGridProps) => {
  const filteredMethods = methods.filter(method => method.type === type);

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 capitalize">
        {type === 'upi' ? 'UPI Apps' : type === 'crypto' ? 'Cryptocurrencies' : 'Exchanges'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredMethods.map(method => (
          <PaymentOption key={method.id} method={method} />
        ))}
      </div>
    </div>
  );
};
