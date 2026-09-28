// Official SVG logos for technologies and category indicators

export function TechLogo({ name, size = 18, className = 'tech-logo' }) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    className,
    'aria-hidden': 'true',
    style: { flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' },
  }

  switch (name) {
    case 'React.js':
      // Official React Atom Logo
      return (
        <svg {...props} viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )

    case 'JavaScript':
      // Official JavaScript JS badge
      return (
        <svg {...props} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <path
            d="M6.5 18.5l2-.8c.4.7.7 1.2 1.4 1.2.7 0 1.2-.3 1.2-1.3v-6.9h2.3v6.9c0 2.2-1.3 3.1-3.3 3.1-1.8 0-2.8-.9-3.6-2.2zm8.4-1.2l2-.8c.4.9 1.1 1.4 2.1 1.4.9 0 1.5-.4 1.5-1 0-.7-.6-1-1.7-1.5l-.8-.3c-1.8-.7-2.9-1.6-2.9-3.4 0-1.9 1.5-3.3 3.7-3.3 1.6 0 2.8.6 3.5 1.9l-1.9.9c-.4-.7-.9-1-1.6-1-.7 0-1.2.4-1.2.9 0 .6.5.9 1.4 1.3l.8.3c2.1.8 3.2 1.7 3.2 3.6 0 2.1-1.6 3.4-4 3.4-2.2 0-3.6-1-4.1-2.4z"
            fill="#000000"
          />
        </svg>
      )

    case 'HTML5':
      // Official HTML5 Shield Logo
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M3.2 2.5l1.6 17.6 7.2 2 7.2-2 1.6-17.6H3.2z" fill="#E34F26" />
          <path d="M12 4.1v16.4l5.8-1.6 1.3-14.8H12z" fill="#EF652A" />
          <path
            d="M12 7.8H7.3l.3 3h4.4v2.7H8.7l.2 2.4 3.1.8v2.7l-5.6-1.5-.7-8.1h6.3V7.8zm0 5.7h3.7l-.3 3.5-3.4.9v2.7l5.6-1.5.8-8.3H12v2.7z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case 'CSS':
      // Official CSS Shield Logo
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M3.2 2.5l1.6 17.6 7.2 2 7.2-2 1.6-17.6H3.2z" fill="#1572B6" />
          <path d="M12 4.1v16.4l5.8-1.6 1.3-14.8H12z" fill="#33A9DC" />
          <path
            d="M12 7.8H7.3l.2 2.7h4.5V7.8zm0 4.8H8.8l.2 2.4 3 .8v2.7l-5.6-1.5-.5-5.9h6.1v1.5zm0-4.8h4.5l-.4 4.8H12V11h2.5l-.2 2.4-2.3.6v2.7l5.6-1.5.7-7.4H12V7.8z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case 'Flutter':
      // Official Flutter Logo
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path
            d="M14.314 0L2.3 12l3.69 3.69L21.693 0h-7.379zm0 11.076L8.455 16.935l3.69 3.69 2.169-2.169 5.539 5.544h7.379l-9.229-9.235-3.689-3.689z"
            fill="#02569B"
          />
          <path d="M12.145 20.625l2.169-2.169 3.69 3.689-2.169 2.169z" fill="#0175C2" />
          <path d="M15.834 16.935l5.539 5.544h-7.379l-3.69-3.69 5.53-1.854z" fill="#54C5F8" />
        </svg>
      )

    case 'Dart':
      // Official Dart Logo
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path
            d="M4.1 4.1h7.8L21.4 13.6 19.9 20 4.1 4.1z"
            fill="#0175C2"
          />
          <path
            d="M4.1 4.1v11.7l4.6 4.6 11.2-.4L4.1 4.1z"
            fill="#00B4AB"
          />
          <path
            d="M11.9 4.1L4.1 11.9v3.9l11.7 4.6 4.1-6.8L11.9 4.1z"
            fill="#13B9FD"
          />
        </svg>
      )

    case 'Firebase':
      // Official Firebase Logo
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path
            d="M4.8 17.6L6.9 4.3c.1-.5.7-.8 1.1-.5l3.3 4.2-6.5 9.6zm13.8 2.1L16.2 3.8c-.1-.5-.8-.7-1.1-.3l-3.4 5.9-2.8-5.3c-.3-.5-1-.5-1.2 0L3.1 18.2l7.7 4.3c.7.4 1.6.4 2.3 0l5.5-2.8z"
            fill="#FFA000"
          />
          <path
            d="M3.1 18.2l1.7-13.9c.1-.5.7-.8 1.1-.5l12.7 15.9-7.7 4.3c-.7.4-1.6.4-2.3 0L3.1 18.2z"
            fill="#F57C00"
          />
          <path
            d="M18.6 19.7L16.2 3.8c-.1-.5-.8-.7-1.1-.3l-3.4 5.9 6.9 10.3z"
            fill="#FFCA28"
          />
        </svg>
      )

    case 'Firestore':
      // Official Cloud Firestore Emblem
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path
            d="M4.5 17.2L6.3 4.8c.1-.5.6-.8 1-.5l3 3.8-5.8 9.1z"
            fill="#FFA000"
          />
          <path
            d="M18.2 18.6L16 4.3c-.1-.5-.7-.7-1-.3l-3.1 5.4-2.5-4.8c-.2-.5-.9-.5-1.1 0L3 17.8l7.1 4c.6.4 1.5.4 2.1 0l6-3.2z"
            fill="#F57C00"
          />
          <path
            d="M18.2 18.6L16 4.3c-.1-.5-.7-.7-1-.3l-3.1 5.4 6.3 9.2z"
            fill="#FFCA28"
          />
          <path
            d="M12 12.5c-3 0-5.5.7-5.5 1.5s2.5 1.5 5.5 1.5 5.5-.7 5.5-1.5-2.5-1.5-5.5-1.5zm0 3.5c-3 0-5.5.7-5.5 1.5s2.5 1.5 5.5 1.5 5.5-.7 5.5-1.5-2.5-1.5-5.5-1.5z"
            fill="#FFFFFF"
            opacity="0.9"
          />
        </svg>
      )

    case 'Firebase Storage':
      // Official Firebase Cloud Storage Emblem
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path
            d="M4.5 17.2L6.3 4.8c.1-.5.6-.8 1-.5l3 3.8-5.8 9.1z"
            fill="#FFA000"
          />
          <path
            d="M18.2 18.6L16 4.3c-.1-.5-.7-.7-1-.3l-3.1 5.4-2.5-4.8c-.2-.5-.9-.5-1.1 0L3 17.8l7.1 4c.6.4 1.5.4 2.1 0l6-3.2z"
            fill="#F57C00"
          />
          <path
            d="M18.2 18.6L16 4.3c-.1-.5-.7-.7-1-.3l-3.1 5.4 6.3 9.2z"
            fill="#FFCA28"
          />
          <rect
            x="7.5"
            y="13"
            width="9"
            height="6.5"
            rx="1.2"
            fill="#FFFFFF"
            opacity="0.9"
          />
          <line
            x1="10.5"
            y1="16.2"
            x2="13.5"
            y2="16.2"
            stroke="#F57C00"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      )

    case 'REST APIs':
      // Standard REST API / Connected HTTP Endpoints Icon
      return (
        <svg {...props} viewBox="0 0 24 24">
          <rect
            x="2"
            y="4"
            width="20"
            height="16"
            rx="3"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.8"
          />
          <path
            d="M6 14.5l2.5-5 2.5 5m-4.2-1.6h3.4M14 9.5h2.5c.8 0 1.5.6 1.5 1.4s-.7 1.4-1.5 1.4H14v2.2M14 12.3h2.3"
            stroke="#38BDF8"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'Git':
      // Official Git Logo
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path
            d="M21.7 10.6l-8.3-8.3c-.7-.7-1.8-.7-2.5 0L8.7 4.5l3.2 3.2c.8-.3 1.7-.1 2.3.5.6.6.8 1.5.5 2.3l3.1 3.1c.8-.3 1.7-.1 2.3.5.9.9.9 2.3 0 3.2s-2.3.9-3.2 0c-.7-.7-.8-1.7-.4-2.5l-2.9-2.9v4.9c.4.3.7.8.7 1.4 0 1.1-.9 2-2 2s-2-.9-2-2c0-.6.3-1.1.7-1.4V9.2c-.4-.3-.7-.8-.7-1.4 0-.7.4-1.4 1-1.7L6.2 3.5 2.3 7.4c-.7.7-.7 1.8 0 2.5l8.3 8.3c.7.7 1.8.7 2.5 0l8.6-8.6c.7-.7.7-1.8 0-2.5v13.5z"
            fill="#F05032"
          />
        </svg>
      )

    case 'GitHub':
      // Official GitHub Octocat Logo
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
            fill="#F0F6FC"
          />
        </svg>
      )

    case 'Figma':
      // Official Figma 5-Component Logo
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M8 2h4v5H8a2.5 2.5 0 010-5z" fill="#F24E1E" />
          <path d="M12 2h4a2.5 2.5 0 010 5h-4V2z" fill="#FF7262" />
          <path d="M8 7h4v5H8a2.5 2.5 0 010-5z" fill="#A259FF" />
          <path d="M12 7h4a2.5 2.5 0 110 5h-4V7z" fill="#1ABCFE" />
          <path d="M8 12h4v4.5A2.5 2.5 0 018 19a2.5 2.5 0 010-5z" fill="#0ACF83" />
        </svg>
      )

    default:
      return null
  }
}

// Category indicator icons replacing generic emojis
export function CategoryIcon({ category, size = 20, className = 'category-icon-svg' }) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    className,
    'aria-hidden': 'true',
    style: { flexShrink: 0 },
  }

  switch (category) {
    case 'Frontend':
      // Web / Frontend Browser Code Icon
      return (
        <svg {...props} stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="18" rx="2" />
          <path d="M2 9h20M7 6h.01M11 6h.01M8 14l-2 2 2 2M16 14l2 2-2 2M13 13l-2 6" />
        </svg>
      )

    case 'Mobile':
      // Mobile Device / Smartphone Icon
      return (
        <svg {...props} stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <path d="M12 18h.01M9 5h6" />
        </svg>
      )

    case 'Backend / Services':
      // Server / Cloud Database Stack Icon
      return (
        <svg {...props} stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
        </svg>
      )

    case 'Tools':
      // Developer Tools / Workflow Icon
      return (
        <svg {...props} stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z" />
        </svg>
      )

    default:
      return null
  }
}

// Official WhatsApp Logo
export function WhatsAppLogo({ size = 22, className = 'contact-logo-svg' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l5.16-1.32A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.72 14.54c-.24.68-1.2 1.25-1.78 1.3-.5.05-1.14.07-3.32-.83-2.32-.96-3.8-3.32-3.92-3.48-.11-.15-.94-1.25-.94-2.39 0-1.14.6-1.7.81-1.93.21-.24.47-.3.62-.3.16 0 .31 0 .45.01.14.01.34-.05.53.4.2.47.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.32-.36.43-.12.12-.24.25-.1.49.14.24.63 1.04 1.36 1.69.93.83 1.72 1.09 1.96 1.21.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.53-.12.21.08 1.34.63 1.57.75.23.12.38.18.44.28.06.1.06.58-.18 1.26z"
        fill="#25D366"
      />
    </svg>
  )
}

// Official / Recognizable Mail Envelope Logo
export function MailLogo({ size = 22, className = 'contact-logo-svg' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }}
    >
      <rect x="2" y="4" width="20" height="16" rx="3.5" fill="#EA4335" />
      <path
        d="M3 6l9 6.5L21 6"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18l6-5.5m6 0l6 5.5"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
    </svg>
  )
}

// Official LinkedIn Logo
export function LinkedInContactLogo({ size = 22, className = 'contact-logo-svg' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }}
    >
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        d="M7.1 9.3H4.7V17h2.4V9.3zM5.9 5.8c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4zm13.1 7.2c0-2.3-1.2-3.4-2.9-3.4-1.4 0-2 .8-2.3 1.3V9.3h-2.4c.03.7 0 7.7 0 7.7h2.4v-4.3c0-.2 0-.5.1-.6.2-.5.7-1 1.5-1 1 0 1.4.8 1.4 2V17h2.4v-4z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

// Official GitHub Logo
export function GitHubContactLogo({ size = 22, className = 'contact-logo-svg' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }}
    >
      <rect width="24" height="24" rx="12" fill="#24292E" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0012 4z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

