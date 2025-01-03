export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  type: 'upi' | 'crypto' | 'exchange';
}
