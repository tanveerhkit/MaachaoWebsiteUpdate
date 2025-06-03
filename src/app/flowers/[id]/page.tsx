import Image from 'next/image';
import Link from 'next/link';

// This would typically come from an API or database
const flower = {
  id: 1,
  name: 'Red Rose Bouquet',
  price: 1999,
  image: '/flowers/red-roses.jpg',
  description: 'A beautiful bouquet of 12 red roses',
  details: [
    '12 Premium Red Roses',
    'Arranged in a beautiful bouquet',
    'Comes with a greeting card',
    'Free delivery',
  ],
  care: [
    'Keep in a cool place',
    'Change water daily',
    'Trim stems every 2-3 days',
    'Avoid direct sunlight',
  ],
};

export default function FlowerDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image
            src={flower.image}
            alt={flower.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{flower.name}</h1>
          <p className="text-2xl font-bold text-pink-600 mb-6">₹{flower.price}</p>
          <p className="text-gray-600 mb-8">{flower.description}</p>

          {/* Quantity Selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center space-x-4">
              <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100">
                -
              </button>
              <span className="text-lg">1</span>
              <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100">
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-pink-600 text-white py-3 rounded-full hover:bg-pink-700 mb-8">
            Add to Cart
          </button>

          {/* Product Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Product Details</h2>
            <ul className="space-y-2">
              {flower.details.map((detail, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-pink-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Care Instructions */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Care Instructions</h2>
            <ul className="space-y-2">
              {flower.care.map((instruction, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-pink-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 