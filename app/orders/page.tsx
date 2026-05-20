'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: '1',
    name: '10.5 MW MWM Gas Power Plant',
    description: 'With full ancillaries available for immediate installation.',
    price: 85.00,
    image: '/images/gaspowerplant1.jpg',
  },
  {
    id: '2',
    name: 'Solar Solution 24x7 No Gen',
    description: 'No hassel of NEPA',
    price: 100.00,
    image: '/images/nonepasolar2.jpg',
  },
  {
    id: '3',
    name: 'MTU Brand New Gas Generator',
    description: 'Available in Lagos',
    price: 800.00,
    image: '/images/mtunewgasgen3.jpg',
  },
  {
    id: '4',
    name: 'Brand New MWM Containerized Gas Generator',
    description: 'Available in Lagos',
    price: 500.00,
    image: '/images/containerizedgasgen4.jpg',
  },
];

export default function OrdersPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
    setStatusMessage(`${product.name} added to cart.`);
  };

  const removeFromCart = (id: string) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrderNow = async () => {
    if (cart.length === 0) {
      setStatusMessage('Add at least one item to your cart first.');
      return;
    }

    setSubmitting(true);
    setStatusMessage('Placing your order...');

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: customerName.trim() || 'Guest Customer',
          total,
          items: cart,
          status: 'pending',
          date: new Date().toISOString().slice(0, 10),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to place order');
      }

      setCart([]);
      setCustomerName('');
      alert("Order placed successfully!");
      setStatusMessage('Order placed successfully! It will appear in the admin order panel.');
    } catch (error) {
      setStatusMessage('Unable to place order right now. Please try again.');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-28 px-6 pb-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mt-4">Orders</h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Browse items from our catalogue and add them to your cart. Use the Order Now button to submit the order.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <section className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {products.map((product) => (
                <article key={product.id} className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                  <div className="relative h-52 w-full">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
                    <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">NGN {product.price}</span>
                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="space-y-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Cart</h2>
              <p className="mt-2 text-sm text-gray-600">Review items and place your order.</p>
            </div>

            <div className="space-y-4">
              {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-gray-200 p-4">
                    <div className="flex items-start gap-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        <p className="text-sm text-gray-600">Price: NGN {item.price}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm font-medium text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="rounded-3xl border border-gray-200 bg-slate-50 p-5">
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your name"
                className="mt-2 w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div className="space-y-3 rounded-3xl border border-gray-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between text-gray-700">
                <span className="font-medium">Subtotal</span>
                <span className="font-semibold text-gray-900">NGN {total}</span>
              </div>
              <button
                type="button"
                onClick={handleOrderNow}
                disabled={submitting}
                className="w-full rounded-full bg-green-600 px-6 py-3 text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-300"
              >
                Order Now
              </button>
              {statusMessage && <p className="text-sm text-gray-700">{statusMessage}</p>}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
