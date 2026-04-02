import { Logo } from './components/Logo';
import { LogoVariations } from './components/LogoVariations';
import { BrandShowcase } from './components/BrandShowcase';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <Logo size="large" />
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
              Dr. Jang's Bread Factory
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl">
              Premium Korean Baking Excellence Since 2026
            </p>
          </div>
        </div>
      </section>

      {/* Logo Variations */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-stone-800 mb-12 text-center">
            Logo Variations
          </h2>
          <LogoVariations />
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-stone-800 mb-12 text-center">
            Brand Applications
          </h2>
          <BrandShowcase />
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-stone-800 mb-12 text-center">
            Brand Colors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-full aspect-square bg-amber-600 rounded-lg mb-3 shadow-md"></div>
              <p className="text-sm text-stone-600">Primary Gold</p>
              <p className="text-xs text-stone-400">#D97706</p>
            </div>
            <div className="text-center">
              <div className="w-full aspect-square bg-stone-800 rounded-lg mb-3 shadow-md"></div>
              <p className="text-sm text-stone-600">Deep Brown</p>
              <p className="text-xs text-stone-400">#292524</p>
            </div>
            <div className="text-center">
              <div className="w-full aspect-square bg-stone-100 rounded-lg mb-3 shadow-md border border-stone-200"></div>
              <p className="text-sm text-stone-600">Light Cream</p>
              <p className="text-xs text-stone-400">#F5F5F4</p>
            </div>
            <div className="text-center">
              <div className="w-full aspect-square bg-white rounded-lg mb-3 shadow-md border border-stone-200"></div>
              <p className="text-sm text-stone-600">Pure White</p>
              <p className="text-xs text-stone-400">#FFFFFF</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
