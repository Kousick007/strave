type IconProps = React.SVGProps<SVGSVGElement>;

export function Logo(props: IconProps) {
  return (
    <svg viewBox="0 0 28 28" fill="currentColor" aria-hidden="true" {...props}>
      <rect width="9" height="9" rx="1" />
      <rect x="19" width="9" height="9" rx="1" />
      <rect x="9.5" y="9.5" width="9" height="9" rx="1" />
      <rect y="19" width="9" height="9" rx="1" />
      <rect x="19" y="19" width="9" height="9" rx="1" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 10 10" fill="none" aria-hidden="true" {...props}>
      <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8z" />
    </svg>
  );
}

export function CreditCard(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 10h19M6.5 15h3" />
    </svg>
  );
}

export function Search(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4 4" strokeLinecap="round" />
    </svg>
  );
}

export function Plus(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Bell(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M6 9a6 6 0 1 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 15 6 9z" />
    </svg>
  );
}

export function Chat(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" {...props}>
      <path d="M12 3a9 9 0 1 1-4.6 16.7L3 21l1.3-4.4A9 9 0 0 1 12 3z" strokeLinejoin="round" />
    </svg>
  );
}

export function Heart(props: IconProps) {
  return (
    <svg viewBox="0 0 24 22" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" {...props}>
      <path d="M12 20s-8.5-5.2-8.5-11.2A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.5 2.8C20.5 14.8 12 20 12 20z" />
    </svg>
  );
}

export function Signal(props: IconProps) {
  return (
    <svg viewBox="0 0 17 11" fill="currentColor" aria-hidden="true" {...props}>
      <rect y="7" width="3" height="4" rx="0.7" />
      <rect x="4.6" y="5" width="3" height="6" rx="0.7" />
      <rect x="9.2" y="2.5" width="3" height="8.5" rx="0.7" />
      <rect x="13.8" width="3" height="11" rx="0.7" />
    </svg>
  );
}

export function Wifi(props: IconProps) {
  return (
    <svg viewBox="0 0 16 11" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 11 0 3.2A11.6 11.6 0 0 1 16 3.2z" />
    </svg>
  );
}

export function Battery(props: IconProps) {
  return (
    <svg viewBox="0 0 25 12" fill="none" aria-hidden="true" {...props}>
      <rect x="0.6" y="0.6" width="21" height="10.8" rx="3" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <rect x="2.2" y="2.2" width="17.8" height="7.6" rx="1.6" fill="currentColor" />
      <path d="M23 4v4c.8-.3 1.4-1.1 1.4-2S23.8 4.3 23 4z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function GoogleG(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09A6.6 6.6 0 0 1 5.49 12c0-.73.13-1.43.35-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.78.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );
}

export function Capterra(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="#FF9D28" d="M2 9.6 10.6 9.6 13.2 3z" />
      <path fill="#68C5ED" d="M13.2 3 10.6 9.6 22 9.6z" />
      <path fill="#044D80" d="M10.6 9.6 22 9.6 9 15z" />
      <path fill="#E54747" d="M9 15 10.6 9.6 2 9.6 6.5 21z" />
    </svg>
  );
}

export function GooglePlay(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="#00D7FE" d="M4 2.5v19l10-9.5z" />
      <path fill="#00F076" d="M4 2.5 14 12l3-3L5.5 2.1c-.6-.3-1.1-.1-1.5.4z" />
      <path fill="#FF3A44" d="M4 21.5c.4.5.9.7 1.5.4L17 15l-3-3z" />
      <path fill="#FFD400" d="M17 9l-3 3 3 3 3.2-1.8c1-.6 1-1.8 0-2.4z" />
    </svg>
  );
}

export function SegmentMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M3 9h12M9 15h12" />
      <path d="M19.5 6.5A9 9 0 0 0 5 5.6M4.5 17.5A9 9 0 0 0 19 18.4" />
    </svg>
  );
}
