type MarkProps = {
  className?: string;
};

export function Mark({ className }: MarkProps) {
  return (
    <svg className={className ?? "mark"} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="26" cy="26" r="16" fill="none" stroke="#f3eee4" strokeWidth="1.25" />
      <circle cx="38" cy="36" r="16" fill="none" stroke="#c6aa86" strokeWidth="1.25" />
    </svg>
  );
}
