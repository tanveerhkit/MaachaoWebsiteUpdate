import Image from 'next/image';
import Link from 'next/link';

const flowers = [
  {
    id: 1,
    name: 'Red Rose Bouquet',
    price: 1999,
    image: '/flowers/red-roses.jpg',
    description: 'A beautiful bouquet of 12 red roses',
  },
  {
    id: 2,
    name: 'Mixed Flower Arrangement',
    price: 2499,
    image: '/flowers/mixed-flowers.jpg',
    description: 'Colorful arrangement of seasonal flowers',
  },
  {
    id: 3,
    name: 'Lily Bouquet',
    price: 1799,
    image: '/flowers/lilies.jpg',
    description: 'Elegant bouquet of white lilies',
  },
  {
    id: 4,
    name: 'Orchid Plant',
    price: 1299,
    image: '/flowers/orchid.jpg',
    description: 'Beautiful orchid plant in a ceramic pot',
  },
  {
    id: 5,
    name: 'Sunflower Bouquet',
    price: 1599,
    image: '/flowers/sunflowers.jpg',
    description: 'Bright and cheerful sunflower bouquet',
  },
  {
    id: 6,
    name: 'Tulip Collection',
    price: 1899,
    image: '/flowers/tulips.jpg',
    description: 'Spring tulips in various colors',
  },
];

export default function FlowersPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-8">Flowers</h1>
      
      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <button className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">
          All Flowers
        </button>
        <button className="px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-yellow-400 hover:text-black">
          Roses
        </button>
        <button className="px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-yellow-400 hover:text-black">
          Mixed Flowers
        </button>
        <button className="px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-yellow-400 hover:text-black">
          Plants
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {flowers.map((flower) => (
          <div key={flower.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image
                src={flower.image}
                alt={flower.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{flower.name}</h3>
              <p className="text-gray-600 mb-4">{flower.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-800">₹{flower.price}</span>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
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