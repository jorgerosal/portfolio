import { cn } from "@/components/utils";

type ClassNameProps = {
  className?: string;
};

export function HeroSystemGraphic({ className }: ClassNameProps) {
  return (
    <svg
      viewBox="0 0 520 420"
      fill="none"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <rect x="38" y="32" width="444" height="332" rx="28" fill="#FFFFFF" />
      <rect x="38" y="32" width="444" height="332" rx="28" stroke="rgba(19,21,26,0.08)" />
      <path
        d="M98 118H192C203.046 118 212 126.954 212 138V154C212 165.046 220.954 174 232 174H298C309.046 174 318 182.954 318 194V212C318 223.046 326.954 232 338 232H420"
        stroke="#3558A8"
        strokeOpacity="0.45"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M98 264H168C179.046 264 188 255.046 188 244V226C188 214.954 196.954 206 208 206H258C269.046 206 278 197.046 278 186V154C278 142.954 286.954 134 298 134H420"
        stroke="#7F9BD6"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeDasharray="7 9"
        strokeLinecap="round"
      />
      <rect x="84" y="88" width="88" height="58" rx="18" fill="#F7F9FD" stroke="rgba(19,21,26,0.08)" />
      <rect x="198" y="156" width="118" height="72" rx="22" fill="#FFFFFF" stroke="rgba(19,21,26,0.08)" />
      <rect x="342" y="214" width="104" height="78" rx="22" fill="#F7F9FD" stroke="rgba(19,21,26,0.08)" />
      <rect x="338" y="78" width="98" height="66" rx="20" fill="#FFFFFF" stroke="rgba(19,21,26,0.08)" />
      <circle cx="92" cy="294" r="38" fill="#E9EEFB" />
      <circle cx="92" cy="294" r="37.5" stroke="rgba(53,88,168,0.15)" />
      <circle cx="430" cy="116" r="24" fill="#EDF3F0" />
      <circle cx="430" cy="116" r="23.5" stroke="rgba(46,109,82,0.14)" />
      <circle cx="126" cy="117" r="7" fill="#3558A8" />
      <circle cx="258" cy="192" r="7" fill="#3558A8" />
      <circle cx="392" cy="248" r="7" fill="#3558A8" />
      <circle cx="388" cy="112" r="7" fill="#7F9BD6" />
      <path d="M115 307H154" stroke="#3558A8" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M115 321H142" stroke="#3558A8" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M217 181H297" stroke="#3558A8" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M217 198H274" stroke="#3558A8" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
      <path d="M355 241H427" stroke="#3558A8" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M355 258H403" stroke="#3558A8" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
      <path d="M356 103H415" stroke="#2E6D52" strokeWidth="2.25" strokeLinecap="round" />
      <path d="M356 119H398" stroke="#2E6D52" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
}

export function WorkflowMiniGraphic({ className }: ClassNameProps) {
  return (
    <svg
      viewBox="0 0 280 140"
      fill="none"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <path
        d="M34 70H84C94 70 102 62 102 52V50C102 40 110 32 120 32H154C164 32 172 40 172 50V90C172 100 180 108 190 108H244"
        stroke="#3558A8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="5 7"
        opacity="0.7"
      />
      <rect x="24" y="56" width="52" height="28" rx="14" fill="#FFFFFF" stroke="rgba(19,21,26,0.08)" />
      <rect x="112" y="18" width="48" height="28" rx="14" fill="#F7F9FD" stroke="rgba(19,21,26,0.08)" />
      <rect x="204" y="94" width="52" height="28" rx="14" fill="#FFFFFF" stroke="rgba(19,21,26,0.08)" />
      <circle cx="98" cy="52" r="6" fill="#3558A8" />
      <circle cx="172" cy="91" r="6" fill="#7F9BD6" />
    </svg>
  );
}

export function NetworkPattern({ className }: ClassNameProps) {
  return (
    <svg
      viewBox="0 0 180 120"
      fill="none"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <path d="M30 30L90 60L150 24" stroke="#3558A8" strokeOpacity="0.35" strokeWidth="1.8" />
      <path d="M30 90L90 60L150 96" stroke="#3558A8" strokeOpacity="0.28" strokeWidth="1.8" />
      <path d="M30 30V90" stroke="#3558A8" strokeOpacity="0.18" strokeWidth="1.8" />
      <path d="M150 24V96" stroke="#3558A8" strokeOpacity="0.18" strokeWidth="1.8" />
      <circle cx="30" cy="30" r="8" fill="#FFFFFF" stroke="rgba(19,21,26,0.08)" />
      <circle cx="30" cy="90" r="8" fill="#F7F9FD" stroke="rgba(19,21,26,0.08)" />
      <circle cx="90" cy="60" r="10" fill="#E9EEFB" stroke="rgba(53,88,168,0.12)" />
      <circle cx="150" cy="24" r="8" fill="#FFFFFF" stroke="rgba(19,21,26,0.08)" />
      <circle cx="150" cy="96" r="8" fill="#FFFFFF" stroke="rgba(19,21,26,0.08)" />
    </svg>
  );
}
