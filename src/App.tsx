import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Estate } from './pages/Estate';
import { Sustainability } from './pages/Sustainability';
import { Journal } from './pages/Journal';
import { JournalDetail } from './pages/JournalDetail';
import { Shop } from './pages/Shop';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <CartProvider>
      <ToastProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/estate" element={<Estate />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:slug" element={<JournalDetail />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </CartProvider>
  );
}

export default App;
