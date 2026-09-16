import React, { createContext, useContext, useState, useEffect } from 'react';
import { StoreProduct, CartItem } from '../types';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  currency: 'EUR' | 'USD';
  currencySymbol: string;
  totalItems: number;
  totalPrice: number;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  setCurrency: (currency: 'EUR' | 'USD') => void;
  toggleCurrency: () => void;
  addToCart: (product: StoreProduct, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  formatPrice: (amountEur: number, amountUsd: number) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('sheba_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const [currency, setCurrencyState] = useState<'EUR' | 'USD'>('EUR');

  useEffect(() => {
    try {
      localStorage.setItem('sheba_cart', JSON.stringify(items));
    } catch {
      // ignore storage errors
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen(prev => !prev);
  const toggleCurrency = () => setCurrencyState(prev => (prev === 'EUR' ? 'USD' : 'EUR'));
  const setCurrency = (curr: 'EUR' | 'USD') => setCurrencyState(curr);

  const addToCart = (product: StoreProduct, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = items.reduce((sum, item) => {
    const unitPrice = currency === 'EUR' ? item.product.priceEur : item.product.priceUsd;
    return sum + unitPrice * item.quantity;
  }, 0);

  const currencySymbol = currency === 'EUR' ? '€' : '$';

  const formatPrice = (amountEur: number, amountUsd: number) => {
    if (currency === 'EUR') {
      return `€${amountEur.toFixed(2)}`;
    }
    return `$${amountUsd.toFixed(2)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        currency,
        currencySymbol,
        totalItems,
        totalPrice,
        openCart,
        closeCart,
        toggleCart,
        setCurrency,
        toggleCurrency,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        formatPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
