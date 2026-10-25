type ProfileIconProps = {
  profile: string;
  className?: string;
};

export function ProfileIcon({ profile, className = "h-6 w-6" }: ProfileIconProps) {
  const stroke = "currentColor";
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (profile) {
    case "African SMEs":
      return (
        <svg {...props}>
          <path d="M3 21h18M5 21V9l7-5 7 5v12" />
          <path d="M9 21v-6h6v6M9 13h6" />
        </svg>
      );
    case "Importers & exporters":
      return (
        <svg {...props}>
          <path d="M2 18c2-4 6-6 10-6s8 2 10 6" />
          <path d="M12 12V4M8 8l4-4 4 4" />
          <path d="M4 20h16" />
        </svg>
      );
    case "Startups & digital businesses":
      return (
        <svg {...props}>
          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
        </svg>
      );
    case "Remote-first companies":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M2 12h20M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
        </svg>
      );
    case "Freelancers":
      return (
        <svg {...props}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M12 12v3" />
        </svg>
      );
  }

  return (
    <svg {...props}>
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M3.3 7.7L12 12.5l8.7-4.8M12 22V12.5" />
    </svg>
  );
}
