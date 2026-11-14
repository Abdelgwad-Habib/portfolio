export function GithubIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}

export function LinkedinIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  )
}

export function AppoutIcon({ size = 28, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 290 290" fill="none" className={className} aria-hidden="true">
      {/* Top-Left Outline Tile */}
      <rect x="20" y="16" width="116" height="116" rx="32" stroke="#FABD18" strokeWidth="16" fill="none" />
      <path d="M 42 72 v 22 a 18 18 0 0 0 18 18 h 5" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Top-Right Solid Tile */}
      <rect x="158" y="38" width="94" height="94" rx="24" fill="#FABD18" />

      {/* Bottom-Left Solid Tile */}
      <rect x="58" y="156" width="94" height="94" rx="24" fill="#FABD18" />

      {/* Bottom-Right Outline Tile */}
      <rect x="154" y="152" width="122" height="122" rx="34" stroke="#FABD18" strokeWidth="16" fill="none" />
      {/* BR Top-Left Reflection */}
      <path d="M 176 195 v -10 a 14 14 0 0 1 14 -14 h 9" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* BR Bottom-Right Reflection */}
      <path d="M 228 250 h 10 a 16 16 0 0 0 16 -16 v -12" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}
