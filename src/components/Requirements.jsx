import React from 'react'

const requirements = [
  "سعودية أو مقيمة",
  "العمر 18 سنة فما فوق",
  "رخصة قيادة سارية",
  "موديل السيارة 2015 وما فوق",
  "فحص المركبة ساري",
  "تأمين ساري المفعول"
]

export default function Requirements() {
  return (
    <section className="w-full">
      <div className="w-full">
        <div className="glass rounded-3xl p-8 md:p-10 w-full relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
          
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 relative z-10">
            الشروط المطلوبة
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto relative z-10">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center gap-3 justify-end group p-2 rounded-lg hover:bg-white/5 transition-colors">
                <span className="text-gray-200 text-lg text-right font-medium">{req}</span>
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-900/30 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
