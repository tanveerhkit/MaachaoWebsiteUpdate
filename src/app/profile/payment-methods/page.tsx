import Link from 'next/link';

// This would typically come from an API or database
const paymentMethods = [
  {
    id: 1,
    type: 'credit_card',
    name: 'Visa ending in 1234',
    expiry: '12/25',
    isDefault: true,
  },
  {
    id: 2,
    type: 'upi',
    name: 'UPI ID: john@upi',
    isDefault: false,
  },
  {
    id: 3,
    type: 'net_banking',
    name: 'HDFC Bank',
    accountNumber: 'XXXX5678',
    isDefault: false,
  },
];

export default function PaymentMethodsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Payment Methods</h1>
        <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700">
          Add New Payment Method
        </button>
      </div>

      <div className="space-y-6">
        {paymentMethods.map((method) => (
          <div key={method.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-4">
                {/* Payment Method Icon */}
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  {method.type === 'credit_card' && (
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v2h16V6H4zm0 4v8h16v-8H4z" />
                    </svg>
                  )}
                  {method.type === 'upi' && (
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                    </svg>
                  )}
                  {method.type === 'net_banking' && (
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h12v2H6zm0-4h12v2H6z" />
                    </svg>
                  )}
                </div>

                <div>
                  <h3 className="font-medium">{method.name}</h3>
                  {method.type === 'credit_card' && (
                    <p className="text-sm text-gray-500">Expires {method.expiry}</p>
                  )}
                  {method.type === 'net_banking' && (
                    <p className="text-sm text-gray-500">Account: {method.accountNumber}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {method.isDefault ? (
                  <span className="inline-block bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm">
                    Default
                  </span>
                ) : (
                  <button className="text-pink-600 hover:text-pink-700 text-sm font-medium">
                    Set as Default
                  </button>
                )}
                <button className="text-gray-600 hover:text-red-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Payment Method Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center min-h-[100px]">
          <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <button className="text-pink-600 hover:text-pink-700 font-medium">
            Add New Payment Method
          </button>
        </div>
      </div>

      {/* Add Payment Method Modal (Hidden by default) */}
      <div className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 max-w-md w-full">
          <h2 className="text-xl font-semibold mb-6">Add Payment Method</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Payment Type</label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500">
                <option value="credit_card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
                <option value="net_banking">Net Banking</option>
              </select>
            </div>

            {/* Credit Card Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Name on Card</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="default-payment"
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
              <label htmlFor="default-payment" className="ml-2 block text-sm text-gray-900">
                Set as default payment method
              </label>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
              >
                Save Payment Method
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 