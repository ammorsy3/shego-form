export default function ShegoLogo({ className = "w-32 h-32" }) {
  return (
    <svg className={className} viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pink bow */}
      <ellipse cx="100" cy="18" rx="10" ry="7" fill="#ec4899"/>
      <ellipse cx="78" cy="12" rx="18" ry="12" fill="#ec4899"/>
      <ellipse cx="122" cy="12" rx="18" ry="12" fill="#ec4899"/>

      {/* Left eye - teardrop shape */}
      <path
        d="M60 45 C40 75 40 105 60 120 C80 105 80 75 60 45 Z"
        fill="white"
      />
      <circle cx="60" cy="90" r="12" fill="#1a0a2e"/>

      {/* Right eye - teardrop shape */}
      <path
        d="M140 45 C120 75 120 105 140 120 C160 105 160 75 140 45 Z"
        fill="white"
      />
      <circle cx="140" cy="90" r="12" fill="#1a0a2e"/>

      {/* Smile */}
      <path
        d="M65 155 Q100 195 135 155"
        stroke="white"
        strokeWidth="16"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
