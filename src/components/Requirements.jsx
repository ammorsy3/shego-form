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
    <section className="w-full py-12 mb-12">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            الشروط المطلوبة
          </h2>

          <ul className="space-y-4 max-w-md mx-auto">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-center gap-3 flex-row-reverse justify-end">
                <span className="text-gray-200 text-base text-right flex-1">{req}</span>
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
