import Link from 'next/link';
import { Search, ShoppingCart, User, MapPin, ChevronDown, Gift, CalendarDays, Briefcase, MoreHorizontal } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        {/* Top row: Logo, Location, Search, Icons */}
        <div className="flex items-center justify-between mb-3">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black">
            Maachao
          </Link>

          {/* Location */}
          <div className="flex items-center text-sm text-gray-700 space-x-1 cursor-pointer hover:text-gray-900">
            <MapPin className="w-4 h-4" />
            <div className="flex flex-col">
              <span>Where to deliver?</span>
              <span className="font-semibold text-red-600">Location missing ▼</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for cakes, decorations, gifts..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6 text-gray-700">
            <Link href="/same-day" className="flex flex-col items-center hover:text-orange-500">
              <CalendarDays className="w-6 h-6" />
              <span className="text-xs">Same Day</span>
            </Link>
            <Link href="/corporate" className="flex flex-col items-center hover:text-orange-500">
              <Briefcase className="w-6 h-6" />
              <span className="text-xs">Corporate</span>
            </Link>
            <Link href="/cart" className="flex flex-col items-center hover:text-orange-500">
              <ShoppingCart className="w-6 h-6" />
              <span className="text-xs">Cart</span>
            </Link>
            <Link href="/account" className="flex flex-col items-center hover:text-orange-500">
              <User className="w-6 h-6" />
              <span className="text-xs">Hi Guest</span>
            </Link>
             <Link href="#" className="flex flex-col items-center hover:text-orange-500">
              <MoreHorizontal className="w-6 h-6" />
              <span className="text-xs">More</span>
            </Link>
          </div>
        </div>

        {/* Bottom row: Categories */}
        <nav className="py-2 border-t">
          <div className="flex items-center justify-center space-x-8 text-gray-700 text-sm font-medium">
            <Link href="/cakes" className="flex items-center hover:text-orange-500">Cakes <ChevronDown className="w-3 h-3 ml-1"/></Link>
            <Link href="/decorations" className="flex items-center hover:text-orange-500">Decorations <ChevronDown className="w-3 h-3 ml-1"/></Link>
            <Link href="/gifts" className="flex items-center hover:text-orange-500">Gifts <ChevronDown className="w-3 h-3 ml-1"/></Link>
            <Link href="/hire-mua" className="flex items-center hover:text-orange-500">Hire MUA <ChevronDown className="w-3 h-3 ml-1"/></Link>
            <Link href="/hire-photographer" className="flex items-center hover:text-orange-500">Hire Photographer <ChevronDown className="w-3 h-3 ml-1"/></Link>
            <Link href="/rent-clothing" className="flex items-center hover:text-orange-500">Rent Clothing <ChevronDown className="w-3 h-3 ml-1"/></Link>
            <Link href="/rent-games" className="flex items-center hover:text-orange-500">Rent Games <ChevronDown className="w-3 h-3 ml-1"/></Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
