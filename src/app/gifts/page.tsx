import Image from 'next/image';
import Link from 'next/link';

const gifts = [
  {
    id: 1,
    name: 'Personalized Photo Frame',
    price: 1499,
    image: '/gifts/photo-frame.jpg',
    description: 'Custom photo frame with your favorite memory',
    category: 'Personalized',
  },
  {
    id: 2,
    name: 'Chocolate Hamper',
    price: 1999,
    image: '/gifts/chocolate-hamper.jpg',
    description: 'Luxury chocolate collection in a gift box',
    category: 'Hampers',
  },
  {
    id: 3,
    name: 'Teddy Bear',
    price: 799,
    image: '/gifts/teddy.jpg',
    description: 'Soft and cuddly teddy bear',
    category: 'Toys',
  },
  {
    id: 4,
    name: 'Perfume Set',
    price: 2499,
    image: '/gifts/perfume.jpg',
    description: 'Luxury perfume set for special occasions',
    category: 'Luxury',
  },
  {
    id: 5,
    name: 'Coffee Mug',
    price: 499,
    image: '/gifts/mug.jpg',
    description: 'Personalized coffee mug with message',
    category: 'Personalized',
  },
  {
    id: 6,
    name: 'Gift Basket',
    price: 2999,
    image: '/gifts/basket.jpg',
    description: 'Curated gift basket with premium items',
    category: 'Hampers',
  },
];

export default function GiftsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gifts</h1>
      
      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <button className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">
          All Gifts
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
          Personalized
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
          Hampers
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
          Luxury
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
          Toys
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gifts.map((gift) => (
          <div key={gift.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image
                src={gift.image}
                alt={gift.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{gift.name}</h3>
                <span className="text-sm text-gray-500">{gift.category}</span>
              </div>
              <p className="text-gray-600 mb-4">{gift.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">₹{gift.price}</span>
                <button className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 