import {
  LOGO_FINANCE_PATH,
  LOGO_ICON_PATH,
  LOGO_ZENDER_PATH,
  WORDMARK_PATH,
} from "./logo-paths";

type LogoProps = {
  className?: string;
  /** Accessible name. Pass an empty string when a parent link already names it. */
  title?: string;
};

/** Icon, "ZENDER", and "Finance". Colour follows `currentColor`. */
export function ZenderLogo({ className, title = "Zender Finance" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 840 198"
      className={className}
      fill="currentColor"
      fillRule="evenodd"
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path d={LOGO_ICON_PATH} />
      <path d={LOGO_ZENDER_PATH} />
      <path d={LOGO_FINANCE_PATH} />
    </svg>
  );
}

/** "ZENDER" alone, for large display use. Colour follows `currentColor`. */
export function ZenderWordmark({ className, title = "Zender" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 602 99"
      className={className}
      fill="currentColor"
      fillRule="evenodd"
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path d={WORDMARK_PATH} />
    </svg>
  );
}
