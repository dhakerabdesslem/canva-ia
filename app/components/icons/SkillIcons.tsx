import type { SVGProps } from "react";

export function VectorSystemsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" aria-hidden="true" {...props}>
      <rect x="14" y="18" width="92" height="44" rx="10" fill="#fff" stroke="#E4E7F4" />
      <rect x="24" y="30" width="34" height="7" rx="3.5" fill="#EBEDF6" />
      <rect x="24" y="44" width="20" height="7" rx="3.5" fill="#EBEDF6" />
      <line x1="70" y1="24" x2="70" y2="56" stroke="#5B7CFF" strokeWidth="2" />
      <circle cx="70" cy="40" r="5" fill="#5B7CFF" />
    </svg>
  );
}

export function ColorLightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="orb1" x1="0" y1="0" x2="80" y2="80">
          <stop offset="0" stopColor="#33D6FF" />
          <stop offset=".5" stopColor="#5B7CFF" />
          <stop offset="1" stopColor="#B07CFF" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="26" fill="url(#orb1)" />
      <rect x="30" y="30" width="9" height="9" fill="#fff" opacity=".85" transform="rotate(20 34 34)" />
      <rect x="42" y="41" width="7" height="7" fill="#fff" opacity=".6" transform="rotate(-12 45 44)" />
    </svg>
  );
}

export function ScalableUIIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="110" height="80" viewBox="0 0 110 80" aria-hidden="true" {...props}>
      <rect x="28" y="14" width="60" height="44" rx="9" fill="#fff" stroke="#E4E7F4" transform="rotate(-6 58 36)" />
      <rect x="22" y="22" width="60" height="44" rx="9" fill="#fff" stroke="#E4E7F4" />
      <rect x="30" y="30" width="30" height="6" rx="3" fill="#EBEDF6" />
      <rect x="30" y="42" width="18" height="6" rx="3" fill="#EBEDF6" />
      <circle cx="80" cy="24" r="10" fill="#5B7CFF" />
      <text x="80" y="28" fontSize="9" fill="#fff" textAnchor="middle" fontFamily="Inter">+25%</text>
    </svg>
  );
}

export function RealProjectIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="110" height="80" viewBox="0 0 110 80" aria-hidden="true" {...props}>
      <rect x="18" y="16" width="74" height="48" rx="8" fill="#fff" stroke="#E4E7F4" />
      <rect x="26" y="24" width="30" height="8" rx="4" fill="#EBEDF6" />
      <circle cx="70" cy="46" r="12" fill="none" stroke="#5B7CFF" strokeWidth="2" />
      <circle cx="70" cy="46" r="3" fill="#5B7CFF" />
    </svg>
  );
}
