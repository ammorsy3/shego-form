import ShegoLogo from './ShegoLogo'

export default function Footer() {
  return (
    <footer className="w-full py-10 px-4 border-t border-purple-500/20 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Logo and tagline */}
          <div className="flex items-center gap-3">
            <ShegoLogo className="w-12 h-12" />
            <div className="text-right">
              <h3 className="text-xl font-bold">شيقو</h3>
              <p className="text-gray-400 text-xs">Ride With A Smile</p>
            </div>
          </div>

          {/* App store links */}
          <div className="flex gap-3">
            <a
              href="https://apps.apple.com/app/shego"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-right">
                <p className="text-[9px] text-gray-400">متوفر على</p>
                <p className="text-xs font-medium">App Store</p>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.shego"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.27 0 .53.07.76.21l14.5 8.5c.53.31.7 1 .39 1.53-.09.15-.21.28-.39.37l-14.5 8.5c-.48.28-1.09.11-1.37-.37-.12-.21-.19-.45-.19-.74zm2-14.7v12.4l9.74-5.7L5 5.8z"/>
              </svg>
              <div className="text-right">
                <p className="text-[9px] text-gray-400">احصلي عليه من</p>
                <p className="text-xs font-medium">Google Play</p>
              </div>
            </a>
          </div>

          {/* Bottom links */}
          <div className="flex flex-col items-center gap-3 text-xs text-gray-400">
            <div className="flex gap-4">
              <a href="https://shegoapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                الموقع الرسمي
              </a>
              <a href="#" className="hover:text-white transition-colors">
                الشروط والأحكام
              </a>
              <a href="#" className="hover:text-white transition-colors">
                سياسة الخصوصية
              </a>
            </div>
            <p>© {new Date().getFullYear()} شيقو. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
