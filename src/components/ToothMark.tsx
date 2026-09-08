export function ToothMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4.2c-1.6-1-3-1.4-4.4-1.2C5.3 3.3 4 5 4 7.4c0 2.1.5 3.6 1 5.6.4 1.6.6 3 .8 4.8.2 1.6.8 2.4 1.8 2.4 1 0 1.5-.7 1.9-2.3l.7-2.8c.3-1.2.9-1.8 1.8-1.8s1.5.6 1.8 1.8l.7 2.8c.4 1.6.9 2.3 1.9 2.3 1 0 1.6-.8 1.8-2.4.2-1.8.4-3.2.8-4.8.5-2 1-3.5 1-5.6 0-2.4-1.3-4.1-3.6-4.4-1.4-.2-2.8.2-4.4 1.2Z" />
    </svg>
  );
}
