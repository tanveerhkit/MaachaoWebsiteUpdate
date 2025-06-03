import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  // Placeholder data for promotional cards
  const promoCards = [
    {
      date: '11TH MAY',
      title: 'Make it Special, for Mom!',
      description: 'Thoughtful gifts to surprise her on Mother\'s Day',
      image: '/placeholder-promo-mom.jpg',
      link: '#',
      buttonColor: 'bg-red-500 hover:bg-red-600'
    },
    {
      date: '20TH APRIL',
      title: 'Easter is here!',
      description: 'Unwrap joy with egg-stra joyful gifts',
      image: '/placeholder-promo-easter.jpg',
      link: '#',
      buttonColor: 'bg-green-500 hover:bg-green-600'
    },
     {
      date: 'ANNIVERSARY SPECIALS',
      title: 'Anniversary Specials',
      description: 'Celebrate love with perfect gifts',
      image: '/placeholder-promo-anniversary.jpg',
      link: '#',
      buttonColor: 'bg-pink-500 hover:bg-pink-600'
    },
     {
      date: '',
      title: 'Delicious Cakes',
      description: 'Fresh & customized for every occasion',
      image: '/placeholder-promo-cakes.jpg',
      link: '#',
      buttonColor: 'bg-orange-500 hover:bg-orange-600'
    },
     {
      date: '',
      title: 'Gift Hampers',
      description: 'Curated collection of gifts',
      image: '/placeholder-promo-hampers.jpg',
      link: '#',
      buttonColor: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  // Placeholder data for category cards
  const categoryCards = [
    {
      label: 'Birthday',
      image: '/placeholder-category-birthday.jpg',
      link: '#'
    },
    {
      label: 'Mother\'s Day',
      image: '/placeholder-category-mothers-day.jpg',
      link: '#'
    },
     {
      label: '2-Hour Delivery',
      image: '/placeholder-category-delivery.jpg',
      link: '#'
    },
     {
      label: 'Easter',
      image: '/placeholder-category-easter.jpg',
      link: '#'
    },
     {
      label: 'Anniversary',
      image: '/placeholder-category-anniversary.jpg',
      link: '#'
    },
     {
      label: 'Cakes',
      image: '/placeholder-category-cakes.jpg',
      link: '#'
    },
      {
      label: 'Gift Hampers',
      image: '/placeholder-category-hampers.jpg',
      link: '#'
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Promotional Cards Section */}
      <section className="py-8 px-4 relative">
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
          {promoCards.map((card, index) => (
            <div key={index} className="flex-none w-80 relative rounded-lg overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                width={320}
                height={380} // Approximate height based on image aspect ratio
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                {card.date && <p className="text-sm text-gray-200 mb-1">{card.date}</p>}
                <h3 className="text-xl font-bold mb-2 leading-tight">{card.title}</h3>
                <p className="text-sm text-gray-200 mb-4">{card.description}</p>
                <Link href={card.link} className={`px-4 py-2 rounded-md text-white text-center ${card.buttonColor}`}>
                  ORDER NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation arrows (Placeholder) */}
         <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
      </section>

      {/* Category Cards Section */}
      <section className="py-8 px-4">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
           {categoryCards.map((card, index) => (
            <Link key={index} href={card.link} className="flex-none w-40 flex flex-col items-center text-center">
               <div className="relative w-36 h-36 rounded-full overflow-hidden mb-2">
                 <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    className="object-cover"
                  />
               </div>
              <span className="text-sm font-medium text-gray-200">{card.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
