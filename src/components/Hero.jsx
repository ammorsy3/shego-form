import ShegoLogo from './ShegoLogo'

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 mb-12">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center mx-auto">
        {/* Logo */}
        <div className="animate-float mb-6">
          <ShegoLogo className="w-28 h-28 md:w-36 md:h-36 mx-auto" />
        </div>

        {/* Brand name */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
          شيقو
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-bold gradient-text mb-3">
          يبحث عنك!
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-2">
          نداء لكابتنات توصيل الراكبات
        </p>
        <p className="text-sm md:text-base text-gray-400 mb-6 max-w-md mx-auto">
          انضمي لفريق شيقو واحصلي على دخل مرن في بيئة آمنة ومحترمة
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToForm}
          className="px-8 py-3 text-base md:text-lg font-bold rounded-full bg-gradient-to-l from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 btn-glow animate-pulse-glow transition-all"
        >
          سجلي الآن
        </button>

        {/* Trust badges */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 md:gap-8 text-gray-400 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>رحلات آمنة</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>دخل مرن</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>مجتمع نسائي</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 animate-bounce">
          <svg className="w-5 h-5 md:w-6 md:h-6 mx-auto text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
