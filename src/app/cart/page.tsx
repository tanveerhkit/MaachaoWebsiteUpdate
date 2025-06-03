import Image from 'next/image';
import Link from 'next/link';

// This would typically come from a cart state management system
const cartItems = [
  {
    id: 1,
    name: 'Red Rose Bouquet',
    price: 1999,
    image: '/flowers/red-roses.jpg',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Chocolate Truffle Cake',
    price: 999,
    image: '/cakes/chocolate-truffle.jpg',
    quantity: 1,
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = 99;
  const total = subtotal + deliveryFee;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 py-4 border-b">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100">
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100">
                    +
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">₹{item.price * item.quantity}</p>
                <button className="text-pink-600 text-sm mt-2 hover:text-pink-700">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-pink-600 text-white py-3 rounded-full hover:bg-pink-700 mt-6">
              Proceed to Checkout
            </button>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Delivery Information</h3>
              <p className="text-sm text-gray-600">
                Free delivery for orders above ₹999. Standard delivery within 2-3 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 