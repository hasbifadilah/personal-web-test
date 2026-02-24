type SkillTagProps = {
  label: string
}

export function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {label}
    </span>
  )
}
