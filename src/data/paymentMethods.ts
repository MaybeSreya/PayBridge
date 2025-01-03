import { PaymentMethod } from '../types';

export const paymentMethods: PaymentMethod[] = [
  // UPI Apps
  {
    id: 'googlepay',
    name: 'Google Pay',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_pay_logo.svg/512px-Google_pay_logo.svg.png',
    type: 'upi'
  },
  {
    id: 'phonepe',
    name: 'PhonePe',
    icon: 'https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png',
    type: 'upi'
  },
  {
    id: 'paytm',
    name: 'Paytm',
    icon: 'https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png',
    type: 'upi'
  },
  // Crypto Exchanges
  {
    id: 'binance',
    name: 'Binance',
    icon: 'https://public.bnbstatic.com/static/images/common/favicon.ico',
    type: 'exchange'
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    icon: 'https://www.coinbase.com/favicon.ico',
    type: 'exchange'
  },
  {
    id: 'trustwallet',
    name: 'Trust Wallet',
    icon: 'https://trustwallet.com/favicon.ico',
    type: 'exchange'
  },
  // Cryptocurrencies
  {
    id: 'usdt',
    name: 'USDT',
    icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    type: 'crypto'
  },
  {
    id: 'btc',
    name: 'Bitcoin',
    icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    type: 'crypto'
  },
  {
    id: 'eth',
    name: 'Ethereum',
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    type: 'crypto'
  },
  {
    id: 'bnb',
    name: 'BNB',
    icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
    type: 'crypto'
  },
  {
    id: 'sol',
    name: 'Solana',
    icon: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    type: 'crypto'
  },
];
