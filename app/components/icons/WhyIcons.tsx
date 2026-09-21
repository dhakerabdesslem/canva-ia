import type { SVGProps } from "react";

export function ReadsDesignSystemIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="150" height="100" viewBox="0 0 150 100" aria-hidden="true" {...props}>
      <rect x="20" y="45" width="52" height="24" rx="12" fill="#EAEEFF" stroke="#C9D3FF" />
      <circle cx="34" cy="57" r="7" fill="#5B7CFF" />
      <text x="66" y="61" fontSize="11" fill="#3D4270" textAnchor="middle" fontFamily="Inter" fontWeight="600">Tokens</text>
      <rect x="30" y="18" width="30" height="30" rx="7" fill="#fff" stroke="#E4E7F4" />
      <rect x="45" y="30" width="26" height="26" rx="7" fill="#5B7CFF" />
      <line x1="34" y1="48" x2="34" y2="70" stroke="#D3D8EC" strokeWidth="2" />
      <line x1="34" y1="70" x2="46" y2="70" stroke="#D3D8EC" strokeWidth="2" />
    </svg>
  );
}

export function FollowsGuidelinesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="150" height="100" viewBox="0 0 150 100" aria-hidden="true" {...props}>
      <path d="M30 70 Q55 70 65 46 T105 24" fill="none" stroke="#C9D3FF" strokeWidth="2" />
      <circle cx="30" cy="70" r="4" fill="#5B7CFF" />
      <circle cx="105" cy="24" r="4" fill="#5B7CFF" />
      <rect x="46" y="62" width="58" height="24" rx="12" fill="#fff" stroke="#E4E7F4" />
      <circle cx="61" cy="74" r="7" fill="#5B7CFF" />
      <text x="83" y="78" fontSize="10" fill="#3D4270" textAnchor="middle" fontFamily="Inter" fontWeight="600">Ask AI</text>
    </svg>
  );
}

export function AdaptsMetaphorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="150" height="100" viewBox="0 0 150 100" aria-hidden="true" {...props}>
      <rect x="28" y="14" width="94" height="72" rx="9" fill="#fff" stroke="#E4E7F4" />
      <circle cx="38" cy="24" r="2.2" fill="#E4E7F4" />
      <circle cx="46" cy="24" r="2.2" fill="#E4E7F4" />
      <rect x="38" y="36" width="26" height="26" rx="6" fill="#EAEEFF" stroke="#C9D3FF" />
      <rect x="34" y="40" width="18" height="18" rx="4" fill="#5B7CFF" />
      <rect x="72" y="38" width="36" height="6" rx="3" fill="#EBEDF6" />
      <rect x="72" y="48" width="28" height="6" rx="3" fill="#EBEDF6" />
      <rect x="72" y="58" width="32" height="6" rx="3" fill="#EBEDF6" />
    </svg>
  );
}
