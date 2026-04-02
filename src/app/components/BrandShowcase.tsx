import { Logo } from './Logo';

export function BrandShowcase() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Business Card Mockup */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl p-12 shadow-xl">
          <div className="bg-white rounded-lg p-8 shadow-lg aspect-[1.75/1] flex flex-col justify-between">
            <Logo size="small" variant="color" />
            <div className="text-right text-stone-600">
              <p className="text-sm">123 Baker Street</p>
              <p className="text-sm">Seoul, South Korea</p>
              <p className="text-sm mt-2">+82 2-1234-5678</p>
            </div>
          </div>
          <p className="text-center text-sm text-stone-600 mt-4">Business Card</p>
        </div>

        {/* Letterhead */}
        <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl p-12 shadow-xl">
          <div className="bg-white rounded-lg p-6 shadow-lg aspect-[1/1.4] flex flex-col">
            <div className="border-b border-stone-200 pb-4 mb-4">
              <Logo size="small" variant="color" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="h-2 bg-stone-100 rounded w-3/4"></div>
              <div className="h-2 bg-stone-100 rounded w-full"></div>
              <div className="h-2 bg-stone-100 rounded w-5/6"></div>
              <div className="h-2 bg-stone-100 rounded w-full mt-4"></div>
              <div className="h-2 bg-stone-100 rounded w-4/5"></div>
            </div>
          </div>
          <p className="text-center text-sm text-stone-600 mt-4">Letterhead</p>
        </div>
      </div>

      {/* Packaging Mockup */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bread Bag */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-12 shadow-xl">
          <div className="bg-white rounded-lg p-8 shadow-lg aspect-[3/4] flex flex-col items-center justify-center border-2 border-stone-200">
            <Logo size="medium" variant="color" />
            <div className="mt-6 text-center">
              <p className="text-xs text-stone-500 tracking-widest">PREMIUM ARTISAN</p>
              <p className="text-sm text-stone-600 mt-2">Sourdough Loaf</p>
            </div>
          </div>
          <p className="text-center text-sm text-stone-600 mt-4">Product Packaging</p>
        </div>

        {/* Shopping Bag */}
        <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl p-12 shadow-xl">
          <div className="bg-amber-600 rounded-lg p-8 shadow-lg aspect-[3/4] flex items-center justify-center">
            <Logo size="large" variant="white" showText={false} />
          </div>
          <p className="text-center text-sm text-stone-600 mt-4">Shopping Bag</p>
        </div>
      </div>

      {/* Signage */}
      <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-xl p-16 shadow-xl">
        <div className="flex items-center justify-center">
          <Logo size="large" variant="white" />
        </div>
        <p className="text-center text-sm text-stone-300 mt-6">Storefront Signage</p>
      </div>

      {/* Social Media */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="aspect-square bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl shadow-lg flex items-center justify-center">
          <Logo size="medium" variant="white" showText={false} />
        </div>
        <div className="aspect-square bg-white border-2 border-stone-200 rounded-xl shadow-lg flex items-center justify-center">
          <Logo size="medium" variant="color" showText={false} />
        </div>
        <div className="aspect-square bg-stone-800 rounded-xl shadow-lg flex items-center justify-center">
          <Logo size="medium" variant="white" showText={false} />
        </div>
        <div className="aspect-square bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl shadow-lg flex items-center justify-center">
          <Logo size="medium" variant="white" showText={false} />
        </div>
      </div>
      <p className="text-center text-sm text-stone-600">Social Media Profiles</p>
    </div>
  );
}
