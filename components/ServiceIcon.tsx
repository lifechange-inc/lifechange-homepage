import type { SVGProps } from "react";

export type ServiceIconType = "aircon" | "waterHeater" | "stove" | "toilet" | "faucet" | "rangeHood";

type ServiceIconProps = SVGProps<SVGSVGElement> & {
  type: ServiceIconType;
};

export function ServiceIcon({ type, ...props }: ServiceIconProps) {
  const commonProps = {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props
  };

  if (type === "aircon") {
    return (
      <svg {...commonProps}>
        <rect x="7" y="12" width="34" height="17" rx="4" />
        <path d="M13 22h22" />
        <path d="M16 35c2-2 2-4 0-6" />
        <path d="M24 37c2-3 2-5 0-8" />
        <path d="M32 35c2-2 2-4 0-6" />
      </svg>
    );
  }

  if (type === "waterHeater") {
    return (
      <svg {...commonProps}>
        <rect x="14" y="8" width="20" height="30" rx="5" />
        <path d="M19 16h10" />
        <path d="M20 25h8" />
        <path d="M18 38v4" />
        <path d="M30 38v4" />
        <path d="M38 18c2 3 3 6 3 9" />
        <path d="M10 18c-2 3-3 6-3 9" />
      </svg>
    );
  }

  if (type === "stove") {
    return (
      <svg {...commonProps}>
        <rect x="9" y="14" width="30" height="24" rx="4" />
        <circle cx="18" cy="24" r="4" />
        <circle cx="30" cy="24" r="4" />
        <path d="M16 37v3" />
        <path d="M32 37v3" />
        <path d="M20 9c0 3 4 3 4 6" />
        <path d="M28 9c0 3-4 3-4 6" />
      </svg>
    );
  }

  if (type === "toilet") {
    return (
      <svg {...commonProps}>
        <path d="M15 9h18v12H15z" />
        <path d="M17 21h16v8c0 6-4 10-9 10s-9-4-9-10v-8z" />
        <path d="M18 39h14" />
        <path d="M20 15h8" />
      </svg>
    );
  }

  if (type === "faucet") {
    return (
      <svg {...commonProps}>
        <path d="M15 17h16c4 0 7 3 7 7v2" />
        <path d="M15 17v-5h11" />
        <path d="M10 29h14" />
        <path d="M17 23v12" />
        <path d="M37 30c3 4 4 6 4 8a4 4 0 0 1-8 0c0-2 1-4 4-8z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M9 14h30l-5 11H14L9 14z" />
      <path d="M14 25v12h20V25" />
      <path d="M18 31h12" />
      <path d="M19 37v3" />
      <path d="M29 37v3" />
      <path d="M18 10h12" />
    </svg>
  );
}
