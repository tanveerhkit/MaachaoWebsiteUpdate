import Link from 'next/link';

// This would typically come from an API or database
const orders = [
  {
    id: 'ORD001',
    date: '2024-03-15',
    total: 2999,
    status: 'Delivered',
    items: [
      { name: 'Red Rose Bouquet', quantity: 1, price: 1999 },
      { name: 'Chocolate Truffle Cake', quantity: 1, price: 999 },
    ],
    deliveryAddress: '123 Main Street, Mumbai, Maharashtra - 400001',
    paymentMethod: 'Credit Card (**** 1234)',
  },
  {
    id: 'ORD002',
    date: '2024-03-10',
    total: 1499,
    status: 'Processing',
    items: [
      { name: 'Mixed Flower Bouquet', quantity: 1, price: 1499 },
    ],
    deliveryAddress: '123 Main Street, Mumbai, Maharashtra - 400001',
    paymentMethod: 'UPI',
  },
  {
    id: 'ORD003',
    date: '2024-03-05',
    total: 3999,
    status: 'Delivered',
    items: [
      { name: 'Premium Rose Box', quantity: 1, price: 2999 },
      { name: 'Birthday Cake', quantity: 1, price: 999 },
    ],
    deliveryAddress: '456 Park Avenue, Mumbai, Maharashtra - 400002',
    paymentMethod: 'Net Banking',
  },
];

export default function OrdersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Order History</h1>
        <div className="flex gap-4">
          <select className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
            <option value="">All Orders</option>
            <option value="delivered">Delivered</option>
            <option value="processing">Processing</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <select className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="highest">Highest Amount</option>
            <option value="lowest">Lowest Amount</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-lg font-semibold">Order #{order.id}</h2>
                <p className="text-sm text-gray-500">Placed on {order.date}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">₹{order.total}</p>
                <p className={`text-sm ${
                  order.status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {order.status}
                </p>
              </div>
            </div>

            <div className="border-t border-b py-4 my-4">
              <div className="space-y-2">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>₹{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-medium text-gray-700 mb-1">Delivery Address</h3>
                <p className="text-gray-600">{order.deliveryAddress}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-1">Payment Method</h3>
                <p className="text-gray-600">{order.paymentMethod}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button className="text-pink-600 hover:text-pink-700 text-sm font-medium">
                Download Invoice
              </button>
              <Link
                href={`/profile/orders/${order.id}`}
                className="text-pink-600 hover:text-pink-700 text-sm font-medium"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border rounded-md bg-pink-600 text-white">
            1
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
} 