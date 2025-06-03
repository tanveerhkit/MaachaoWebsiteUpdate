import Image from 'next/image';
import { Star } from 'lucide-react';

export default function DecorationsPage() {
  // Placeholder product data
  const products = [
    {
      id: 1,
      name: 'LED String Lights Decoration',
      price: 1499,
      originalPrice: 2999,
      rating: 4,
      reviews: 324,
      image: '/placeholder-decoration.jpg',
      delivery: 'Today Delivery - Standard',
      isBestSeller: true,
    },
     {
      id: 2,
      name: 'Artificial Flower Wall Panel',
      price: 2999,
      originalPrice: 4499,
      rating: 4,
      reviews: 156,
      image: '/placeholder-decoration.jpg',
      delivery: 'Express Delivery - Premium',
      isBestSeller: false,
    },
      {
      id: 3,
      name: 'Copper Wire Fairy Lights',
      price: 799,
      originalPrice: 1299,
      rating: 3,
      reviews: 258,
      image: '/placeholder-decoration.jpg',
      delivery: 'Today Delivery - Standard',
      isBestSeller: true,
    },
       {
      id: 4,
      name: 'Macrame Wall Hanging Decor',
      price: 1899,
      originalPrice: 2699,
      rating: 4,
      reviews: 192,
      image: '/placeholder-decoration.jpg',
      delivery: 'Express Delivery - Premium',
      isBestSeller: false,
    },
        {
      id: 5,
      name: 'Hanging Crystal Prisms',
      price: 1499,
      originalPrice: 2999,
      rating: 4,
      reviews: 324,
      image: '/placeholder-decoration.jpg',
      delivery: 'Today Delivery - Standard',
      isBestSeller: true,
    },
     {
      id: 6,
      name: 'Wooden Frame Wall Art',
      price: 2999,
      originalPrice: 4499,
      rating: 4,
      reviews: 156,
      image: '/placeholder-decoration.jpg',
      delivery: 'Express Delivery - Premium',
      isBestSeller: false,
    },
      {
      id: 7,
      name: 'Artificial Plants with Pot',
      price: 799,
      originalPrice: 1299,
      rating: 3,
      reviews: 258,
      image: '/placeholder-decoration.jpg',
      delivery: 'Today Delivery - Standard',
      isBestSeller: true,
    },
       {
      id: 8,
      name: 'Ceramic Flower Vases Set',
      price: 1899,
      originalPrice: 2699,
      rating: 4,
      reviews: 192,
      image: '/placeholder-decoration.jpg',
      delivery: 'Express Delivery - Premium',
      isBestSeller: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Filter Buttons */}
      <div className="flex space-x-4 mb-8 border-b pb-4">
        <button className="px-6 py-2 rounded-full bg-gray-800 text-white text-sm font-semibold">Bestsellers</button>
        <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100">Same Day Delivery</button>
        <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100">Premium Decor</button>
        <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100">Designer Series</button>
        <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100">Tabletop Decor</button>
        <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100">Wall Accents</button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter Sidebar */}
        <div className="w-full md:w-1/4">
          <h2 className="text-xl font-bold mb-4">Filter</h2>
          
          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2 flex justify-between items-center">Price <span className="text-gray-500 text-sm">▲</span></h3>
            <label className="flex items-center text-gray-700 mb-1">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Under Rs200
            </label>
            <label className="flex items-center text-gray-700 mb-1">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Rs200 - Rs500
            </label>
            <label className="flex items-center text-gray-700 mb-1">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Rs500 - Rs1000
            </label>
            <label className="flex items-center text-gray-700">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Above Rs1000
            </label>
          </div>

          {/* Material Filter */}
           <div className="mb-6">
            <h3 className="font-semibold mb-2 flex justify-between items-center">Material <span className="text-gray-500 text-sm">▲</span></h3>
            <label className="flex items-center text-gray-700 mb-1">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Fabric
            </label>
            <label className="flex items-center text-gray-700 mb-1">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Metal
            </label>
             <label className="flex items-center text-gray-700 mb-1">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Wood
            </label>
             <label className="flex items-center text-gray-700 mb-1">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Glass
            </label>
             <label className="flex items-center text-gray-700">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Ceramic
            </label>
          </div>

          {/* Decoration Type Filter */}
           <div className="mb-6">
            <h3 className="font-semibold mb-2 flex justify-between items-center">Decoration Type <span className="text-gray-500 text-sm">▲</span></h3>
            <label className="flex items-center text-gray-700 mb-1">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Wall Decor
            </label>
            <label className="flex items-center text-gray-700 mb-1">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Table Decor
            </label>
             <label className="flex items-center text-gray-700 mb-1">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Hanging Decor
            </label>
             <label className="flex items-center text-gray-700">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Floor Decor
            </label>
          </div>

          {/* Occasion Filter */}
           <div className="mb-6">
            <h3 className="font-semibold mb-2 flex justify-between items-center">Occasion <span className="text-gray-500 text-sm">▲</span></h3>
            <label className="flex items-center text-gray-700 mb-1">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Birthday
            </label>
             <label className="flex items-center text-gray-700 mb-1">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Anniversary
            </label>
             <label className="flex items-center text-gray-700 mb-1">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Wedding
            </label>
             <label className="flex items-center text-gray-700">
              <input type="checkbox" className="mr-2 rounded text-gray-600" /> Festive
            </label>
          </div>


        </div>

        {/* Products Grid */}
        <div className="w-full md:w-3/4">
          {/* Results and Sort */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-700 text-sm">Showing 1-8 of 120 results</span>
            <div className="flex items-center">
              <span className="text-gray-700 text-sm mr-2">Sort by:</span>
              <select className="text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-60 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.isBestSeller && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">Best Seller</span>
                  )}
                   {/* Heart icon (Placeholder) */}
                   <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                       {/* Placeholder SVG for heart */}
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                   </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.name}</h3>
                   <div className="flex items-center text-xs text-gray-600 mb-2">
                      {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                      ))}
                       <span className="ml-1">({product.reviews})</span>
                   </div>
                  <div className="flex items-center mb-2">
                    <span className="text-lg font-bold text-gray-800 mr-2">₹{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">{product.delivery}</p>
                  <button className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 