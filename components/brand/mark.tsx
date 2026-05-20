type Props = {
  size?: number;
  className?: string;
  ariaLabel?: string;
};

export default function BrandMark({ size = 20, className, ariaLabel = "Husn mark" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={ariaLabel}
      className={className}
      fill="none"
    >
      <path
        d="M4 6 L18 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M4 12 L18 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M4 18 L18 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="18" cy="12" r="2.4" fill="currentColor" />
    </svg>
  );
}
