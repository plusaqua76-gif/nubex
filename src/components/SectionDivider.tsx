export function SectionDivider({ label = "///" }: { label?: string }) {
  return (
    <div aria-hidden className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-2">
      <span className="h-px flex-1 bg-border" />
      <span className="font-mono text-[11px] tracking-[0.35em] text-accent-ink/70">{label}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
