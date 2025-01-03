import { PaymentMethod } from '../types';

interface PaymentOptionProps {
  method: PaymentMethod;
}

export const PaymentOption = ({ method }: PaymentOptionProps) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100">
      <img 
        src={method.icon} 
        alt={`${method.name} logo`} 
        className="w-8 h-8 object-contain mr-3"
      />
      <span className="text-gray-700 font-medium">{method.name}</span>
    </div>
  );
};
