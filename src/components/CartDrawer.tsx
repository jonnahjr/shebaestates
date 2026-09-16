import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, CheckCircle2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { COMPANY_INFO } from '../data/company';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    currency,
    currencySymbol,
    totalPrice,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  const { showToast } = useToast();
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderSubmitting, setOrderSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    destinationCountry: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitting(true);

    // Simulate luxury order / export inquiry transmission
    setTimeout(() => {
      setOrderSubmitting(false);
      setOrderComplete(true);
      showToast('Your reserve order request has been received by our estate desk.');
      clearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Dimmed Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-estate-sand text-estate-charcoal shadow-2xl flex flex-col justify-between border-l border-estate-gold/20 animate-slide-in">
          {/* Cart Header */}
          <div className="p-6 border-b border-estate-charcoal/10 flex items-center justify-between bg-estate-cream/50">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-estate-forest" />
              <div>
                <h3 className="font-serif text-xl font-medium text-estate-forest">
                  Estate Reserve Bag
                </h3>
                <p className="text-xs text-estate-muted font-light">
                  Direct harvest from Ethiopian highland micro-lots
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-1.5 text-estate-muted hover:text-estate-forest transition-colors rounded-full"
              aria-label="Close Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-estate-cream flex items-center justify-center text-estate-forest">
                  <ShoppingBag className="w-7 h-7 stroke-1" />
                </div>
                <h4 className="font-serif text-2xl text-estate-forest">Your bag is empty</h4>
                <p className="text-sm text-estate-muted max-w-xs font-light">
                  Explore our Four Botanical Diamonds or specialty reserve items to begin your direct harvest order.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-2 px-6 py-2.5 bg-estate-forest text-estate-sand text-xs uppercase tracking-widest hover:bg-estate-gold hover:text-estate-forest transition-colors rounded-full"
                >
                  Browse Botanical Diamonds
                </button>
              </div>
            ) : (
              items.map(item => {
                const unitPrice =
                  currency === 'EUR' ? item.product.priceEur : item.product.priceUsd;
                const itemTotal = unitPrice * item.quantity;

                return (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3.5 bg-white border border-estate-charcoal/5 shadow-sm"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover flex-shrink-0 bg-estate-cream"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h5 className="font-serif text-base text-estate-forest font-medium leading-snug">
                            {item.product.name}
                          </h5>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-estate-muted hover:text-red-600 transition-colors p-0.5"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs text-estate-muted font-light mt-0.5">
                          {item.product.weight} • {item.product.origin.split(',')[0]}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-estate-charcoal/20 rounded-full px-1 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-estate-cream text-estate-forest transition-colors rounded-full"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-mono font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-estate-cream text-estate-forest transition-colors rounded-full"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-sm font-serif font-semibold text-estate-forest">
                          {currencySymbol}{itemTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-estate-charcoal/10 bg-estate-cream/60 space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-estate-muted font-light">
                  <span>Subtotal</span>
                  <span className="font-mono">{currencySymbol}{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-estate-muted font-light text-xs">
                  <span>International Air Freight & Logistics</span>
                  <span className="text-estate-forest font-normal">Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-estate-forest font-serif text-lg font-medium pt-2 border-t border-estate-charcoal/10">
                  <span>Estimated Total</span>
                  <span>{currencySymbol}{totalPrice.toFixed(2)} {currency}</span>
                </div>
              </div>

              <button
                onClick={() => setCheckoutModalOpen(true)}
                className="w-full py-3.5 bg-estate-forest text-estate-sand text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-estate-gold hover:text-estate-forest transition-all shadow-md rounded-full"
              >
                <span>Proceed to Reserve Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-estate-muted font-light">
                Direct export packing from Queen of Sheba Highland Estate Co.
              </p>
            </div>
          )}

          {/* Reserve Order Modal */}
          {checkoutModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
              <div className="bg-estate-sand max-w-lg w-full p-6 sm:p-8 border border-estate-gold/40 shadow-2xl relative animate-scale-up">
                <button
                  onClick={() => {
                    setCheckoutModalOpen(false);
                    setOrderComplete(false);
                  }}
                  className="absolute top-4 right-4 text-estate-muted hover:text-estate-forest"
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {!orderComplete ? (
                  <div>
                    <div className="mb-6">
                      <span className="text-[10px] uppercase tracking-widest2 text-estate-gold font-sans font-semibold">
                        Direct Estate Dispatch
                      </span>
                      <h4 className="font-serif text-2xl text-estate-forest mt-1">
                        Complete Order Inquiry
                      </h4>
                      <p className="text-xs text-estate-muted mt-1 font-light">
                        Our trade desk will confirm batch reservation, harvest certificates, and shipping schedules with you.
                      </p>
                    </div>

                    <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs font-sans">
                      <div>
                        <label className="block text-estate-forest uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={customerInfo.name}
                          onChange={e => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-estate-charcoal/20 focus:border-estate-gold focus:outline-none"
                          placeholder="e.g. Eleanor Vance"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-estate-forest uppercase tracking-wider mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={customerInfo.email}
                            onChange={e => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                            className="w-full px-3 py-2 bg-white border border-estate-charcoal/20 focus:border-estate-gold focus:outline-none"
                            placeholder="eleanor@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-estate-forest uppercase tracking-wider mb-1">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            value={customerInfo.phone}
                            onChange={e => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                            className="w-full px-3 py-2 bg-white border border-estate-charcoal/20 focus:border-estate-gold focus:outline-none"
                            placeholder="+1 555 0192"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-estate-forest uppercase tracking-wider mb-1">
                          Destination Country & City *
                        </label>
                        <input
                          type="text"
                          required
                          value={customerInfo.destinationCountry}
                          onChange={e => setCustomerInfo({ ...customerInfo, destinationCountry: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-estate-charcoal/20 focus:border-estate-gold focus:outline-none"
                          placeholder="e.g. Dubai, United Arab Emirates / Zurich, Switzerland"
                        />
                      </div>

                      <div>
                        <label className="block text-estate-forest uppercase tracking-wider mb-1">
                          Special Handling / Notes
                        </label>
                        <textarea
                          rows={2}
                          value={customerInfo.notes}
                          onChange={e => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-estate-charcoal/20 focus:border-estate-gold focus:outline-none"
                          placeholder="Roast profile preference, gift packaging, or phytosanitary requirements..."
                        />
                      </div>

                      <div className="p-3 bg-estate-cream text-estate-forest border border-estate-charcoal/10 flex justify-between items-center text-xs">
                        <span>Items Total ({items.length} lots)</span>
                        <span className="font-serif font-bold text-sm">
                          {currencySymbol}{totalPrice.toFixed(2)} {currency}
                        </span>
                      </div>

                      <button
                        type="submit"
                        disabled={orderSubmitting}
                        className="w-full py-3.5 bg-estate-forest text-estate-sand text-xs uppercase tracking-widest font-semibold hover:bg-estate-gold hover:text-estate-forest transition-colors flex items-center justify-center gap-2 rounded-full shadow-md"
                      >
                        {orderSubmitting ? 'Transmitting Order...' : 'Confirm Reserve Order Request'}
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-6 space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-estate-gold mx-auto" />
                    <h4 className="font-serif text-2xl text-estate-forest">
                      Order Request Received
                    </h4>
                    <p className="text-xs text-estate-muted max-w-sm mx-auto leading-relaxed">
                      Thank you. Your reservation request for {COMPANY_INFO.name} has been routed to our international desk. We will reach out to {customerInfo.email} with shipping clearance details shortly.
                    </p>
                    <button
                      onClick={() => {
                        setCheckoutModalOpen(false);
                        closeCart();
                        setOrderComplete(false);
                      }}
                      className="px-6 py-2.5 bg-estate-forest text-estate-sand text-xs uppercase tracking-widest hover:bg-estate-gold hover:text-estate-forest transition-colors rounded-full"
                    >
                      Return to Estate
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
