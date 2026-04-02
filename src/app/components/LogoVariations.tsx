import { Logo } from './Logo';

export function LogoVariations() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Color Version */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-stone-200">
        <div className="flex items-center justify-center mb-4 h-32">
          <Logo size="medium" variant="color" />
        </div>
        <p className="text-center text-sm text-stone-600">Primary Logo</p>
        <p className="text-center text-xs text-stone-400 mt-1">For light backgrounds</p>
      </div>

      {/* Dark Background Version */}
      <div className="bg-stone-800 rounded-xl p-8 shadow-lg">
        <div className="flex items-center justify-center mb-4 h-32">
          <Logo size="medium" variant="white" />
        </div>
        <p className="text-center text-sm text-stone-300">White Version</p>
        <p className="text-center text-xs text-stone-400 mt-1">For dark backgrounds</p>
      </div>

      {/* Monochrome Version */}
      <div className="bg-stone-50 rounded-xl p-8 shadow-lg border border-stone-200">
        <div className="flex items-center justify-center mb-4 h-32">
          <Logo size="medium" variant="black" />
        </div>
        <p className="text-center text-sm text-stone-600">Monochrome</p>
        <p className="text-center text-xs text-stone-400 mt-1">For printing</p>
      </div>

      {/* Icon Only - Color */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-stone-200">
        <div className="flex items-center justify-center mb-4 h-32">
          <Logo size="large" variant="color" showText={false} />
        </div>
        <p className="text-center text-sm text-stone-600">Icon Mark</p>
        <p className="text-center text-xs text-stone-400 mt-1">Social media & apps</p>
      </div>

      {/* Small Size Preview */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-lg">
        <div className="flex items-center justify-center mb-4 h-32">
          <div className="space-y-6">
            <Logo size="small" variant="color" />
            <Logo size="medium" variant="color" />
          </div>
        </div>
        <p className="text-center text-sm text-stone-600">Size Variations</p>
        <p className="text-center text-xs text-stone-400 mt-1">Scalable design</p>
      </div>

      {/* Icon Only - White */}
      <div className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-xl p-8 shadow-lg">
        <div className="flex items-center justify-center mb-4 h-32">
          <Logo size="large" variant="white" showText={false} />
        </div>
        <p className="text-center text-sm text-stone-200">Icon on Brand Color</p>
        <p className="text-center text-xs text-amber-300 mt-1">Premium applications</p>
      </div>
    </div>
  );
}
