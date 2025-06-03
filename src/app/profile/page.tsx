import Link from 'next/link';

// This would typically come from an API or database
const user = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+91 98765 43210',
  address: '123 Main Street, Mumbai, Maharashtra - 400001',
  orders: [
    {
      id: 'ORD001',
      date: '2024-03-15',
      total: 2999,
      status: 'Delivered',
      items: [
        { name: 'Red Rose Bouquet', quantity: 1, price: 1999 },
        { name: 'Chocolate Truffle Cake', quantity: 1, price: 999 },
      ],
    },
    {
      id: 'ORD002',
      date: '2024-03-10',
      total: 1499,
      status: 'Processing',
      items: [
        { name: 'Mixed Flower Bouquet', quantity: 1, price: 1499 },
      ],
    },
  ],
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <nav className="space-y-4">
              <Link
                href="/profile"
                className="block px-4 py-2 text-pink-600 bg-pink-50 rounded-md font-medium"
              >
                Profile Information
              </Link>
              <Link
                href="/profile/orders"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md font-medium"
              >
                Order History
              </Link>
              <Link
                href="/profile/addresses"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md font-medium"
              >
                Addresses
              </Link>
              <Link
                href="/profile/payment-methods"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md font-medium"
              >
                Payment Methods
              </Link>
              <Link
                href="/profile/settings"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md font-medium"
              >
                Account Settings
              </Link>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Profile Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  defaultValue={user.name}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  defaultValue={user.email}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  defaultValue={user.phone}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  defaultValue={user.address}
                  rows={3}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div className="flex justify-end">
                <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Recent Orders</h2>
            <div className="space-y-6">
              {user.orders.map((order) => (
                <div key={order.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-medium">Order #{order.id}</p>
                      <p className="text-sm text-gray-500">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹{order.total}</p>
                      <p className="text-sm text-green-600">{order.status}</p>
                    </div>
                  </div>
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
                  <div className="mt-4 flex justify-end">
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
            <div className="mt-6 text-center">
              <Link
                href="/profile/orders"
                className="text-pink-600 hover:text-pink-700 font-medium"
              >
                View All Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 