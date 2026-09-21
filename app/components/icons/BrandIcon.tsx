import type { SVGProps } from "react";

export function BrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 26" fill="none" aria-hidden="true" {...props}>
      <path d="M13 1 L24 7 L24 19 L13 25 L2 19 L2 7 Z" stroke="url(#gmark)" strokeWidth="1.6" fill="none" />
      <path d="M13 1 L13 13 L24 7 M13 13 L24 19 M13 13 L2 19 M13 13 L2 7" stroke="url(#gmark)" strokeWidth="1.1" opacity="0.7" />
      <defs>
        <linearGradient id="gmark" x1="0" y1="0" x2="26" y2="26">
          <stop offset="0" stopColor="#33D6FF" />
          <stop offset="1" stopColor="#B07CFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
