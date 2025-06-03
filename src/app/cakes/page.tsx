import Image from 'next/image';
import Link from 'next/link';

const cakes = [
  {
    id: 1,
    name: 'Chocolate Truffle Cake',
    price: 999,
    image: '/cakes/chocolate-truffle.jpg',
    description: 'Rich chocolate cake with truffle ganache',
    weight: '1 kg',
  },
  {
    id: 2,
    name: 'Black Forest Cake',
    price: 899,
    image: '/cakes/black-forest.jpg',
    description: 'Classic black forest with cherries and cream',
    weight: '1 kg',
  },
  {
    id: 3,
    name: 'Red Velvet Cake',
    price: 1099,
    image: '/cakes/red-velvet.jpg',
    description: 'Moist red velvet cake with cream cheese frosting',
    weight: '1 kg',
  },
  {
    id: 4,
    name: 'Butterscotch Cake',
    price: 799,
    image: '/cakes/butterscotch.jpg',
    description: 'Delicious butterscotch flavored cake',
    weight: '1 kg',
  },
  {
    id: 5,
    name: 'Pineapple Cake',
    price: 899,
    image: '/cakes/pineapple.jpg',
    description: 'Fresh pineapple cake with whipped cream',
    weight: '1 kg',
  },
  {
    id: 6,
    name: 'Vanilla Cake',
    price: 699,
    image: '/cakes/vanilla.jpg',
    description: 'Classic vanilla cake with buttercream',
    weight: '1 kg',
  },
];

export default function CakesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Cakes</h1>
      
      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <button className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">
          All Cakes
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
          Chocolate
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
          Fruit
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
          Designer
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cakes.map((cake) => (
          <div key={cake.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image
                src={cake.image}
                alt={cake.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{cake.name}</h3>
              <p className="text-gray-600 mb-2">{cake.description}</p>
              <p className="text-sm text-gray-500 mb-4">Weight: {cake.weight}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">₹{cake.price}</span>
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