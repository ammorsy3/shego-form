import { useState } from 'react'

const cities = [
  "الرياض",
  "جدة",
  "مكة المكرمة",
  "المدينة المنورة",
  "الدمام",
  "الخبر",
  "الطائف",
  "تبوك",
  "بريدة",
  "خميس مشيط",
  "أبها",
  "القطيف",
  "الجبيل",
  "حائل",
  "نجران",
  "ينبع",
  "أخرى"
]

const carYears = Array.from({ length: new Date().getFullYear() - 2014 }, (_, i) => 2015 + i).reverse()

export default function RegistrationForm({ apiEndpoint = "/api/register" }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    nationalId: '',
    city: '',
    carBrand: '',
    carModel: '',
    carYear: '',
    hasValidLicense: false,
    hasValidInspection: false,
    hasValidInsurance: false,
    agreeToTerms: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString()
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          nationalId: '',
          city: '',
          carBrand: '',
          carModel: '',
          carYear: '',
          hasValidLicense: false,
          hasValidInspection: false,
          hasValidInsurance: false,
          agreeToTerms: false
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.fullName && formData.phone && formData.city &&
    formData.carBrand && formData.carYear && formData.hasValidLicense &&
    formData.hasValidInspection && formData.hasValidInsurance && formData.agreeToTerms

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/10 border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-400 text-right"
  const labelClass = "block text-sm font-medium mb-2 text-right text-gray-200"

  return (
    <section id="register" className="w-full py-8 mb-20">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-2xl shadow-purple-900/20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            سجلي الآن
          </h2>
          <p className="text-gray-300 text-center mb-10 text-lg">
            ابدئي مشوارك مع شيقو اليوم
          </p>

          {submitStatus === 'success' && (
            <div className="mb-8 p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-300 text-center flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              تم استلام طلبك بنجاح! سنتواصل معك قريباً
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 text-center flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              حدث خطأ، يرجى المحاولة مرة أخرى
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-purple-300 border-b border-purple-500/30 pb-3 text-right">
                المعلومات الشخصية
              </h3>

              <div>
                <label className={labelClass}>الاسم الكامل *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="أدخلي اسمك الكامل"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>رقم الجوال *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    dir="ltr"
                    className={`${inputClass}`}
                    placeholder="05XXXXXXXX"
                  />
                </div>

                <div>
                  <label className={labelClass}>البريد الإلكتروني</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    dir="ltr"
                    className={`${inputClass}`}
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>رقم الهوية / الإقامة</label>
                  <input
                    type="text"
                    name="nationalId"
                    value={formData.nationalId}
                    onChange={handleChange}
                    dir="ltr"
                    className={`${inputClass}`}
                    placeholder="10 أرقام"
                    maxLength={10}
                  />
                </div>

                <div>
                  <label className={labelClass}>المدينة *</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className={`${inputClass} appearance-none`}
                    style={{ backgroundImage: 'none' }} 
                  >
                    <option value="" className="bg-gray-900">اختاري المدينة</option>
                    {cities.map(city => (
                      <option key={city} value={city} className="bg-gray-900">{city}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-purple-300 border-b border-purple-500/30 pb-3 text-right">
                معلومات المركبة
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className={labelClass}>ماركة السيارة *</label>
                  <input
                    type="text"
                    name="carBrand"
                    value={formData.carBrand}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="مثال: تويوتا"
                  />
                </div>

                <div>
                  <label className={labelClass}>موديل السيارة</label>
                  <input
                    type="text"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="مثال: كامري"
                  />
                </div>

                <div>
                  <label className={labelClass}>سنة الصنع *</label>
                  <select
                    name="carYear"
                    value={formData.carYear}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="" className="bg-gray-900">السنة</option>
                    {carYears.map(year => (
                      <option key={year} value={year} className="bg-gray-900">{year}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Documents Confirmation */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-purple-300 border-b border-purple-500/30 pb-3 text-right">
                تأكيد المستندات
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="flex items-center gap-3 cursor-pointer group justify-end p-3 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-purple-500/20">
                  <span className="text-gray-200 group-hover:text-white transition-colors text-sm font-medium">
                    رخصة قيادة سارية
                  </span>
                  <input
                    type="checkbox"
                    name="hasValidLicense"
                    checked={formData.hasValidLicense}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-purple-500/30 bg-white/10 text-purple-500 focus:ring-purple-500/20 accent-purple-500 cursor-pointer"
                  />
                </label>

                <label className="flex items-center gap-3 cursor-pointer group justify-end p-3 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-purple-500/20">
                  <span className="text-gray-200 group-hover:text-white transition-colors text-sm font-medium">
                    فحص دوري ساري
                  </span>
                  <input
                    type="checkbox"
                    name="hasValidInspection"
                    checked={formData.hasValidInspection}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-purple-500/30 bg-white/10 text-purple-500 focus:ring-purple-500/20 accent-purple-500 cursor-pointer"
                  />
                </label>

                <label className="flex items-center gap-3 cursor-pointer group justify-end p-3 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-purple-500/20">
                  <span className="text-gray-200 group-hover:text-white transition-colors text-sm font-medium">
                    تأمين ساري
                  </span>
                  <input
                    type="checkbox"
                    name="hasValidInsurance"
                    checked={formData.hasValidInsurance}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-purple-500/30 bg-white/10 text-purple-500 focus:ring-purple-500/20 accent-purple-500 cursor-pointer"
                  />
                </label>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="pt-6 border-t border-purple-500/30 flex justify-center">
              <label className="flex items-center gap-3 cursor-pointer group">
                <span className="text-gray-300 text-sm">
                  أوافق على <a href="#" className="text-purple-400 hover:text-purple-300 underline underline-offset-4">الشروط والأحكام</a> و<a href="#" className="text-purple-400 hover:text-purple-300 underline underline-offset-4">سياسة الخصوصية</a>
                </span>
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-purple-500/30 bg-white/10 text-purple-500 focus:ring-purple-500/20 accent-purple-500 cursor-pointer"
                />
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full md:w-2/3 py-4 rounded-xl font-bold text-xl shadow-lg shadow-purple-900/40 transition-all transform hover:-translate-y-1 ${
                  isFormValid && !isSubmitting
                    ? 'bg-gradient-to-l from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 btn-glow text-white'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    جاري الإرسال...
                  </span>
                ) : (
                  'سجلي الآن'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
