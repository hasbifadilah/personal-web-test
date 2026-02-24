import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  eyebrow?: string
  description?: string
  children: ReactNode
  background?: 'white' | 'muted'
}

export function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  background = 'white',
}: SectionProps) {
  const backgroundClass =
    background === 'white' ? 'bg-white' : 'bg-slate-50 border-slate-200'

  return (
    <section
      id={id}
      className={`border-b border-slate-200 ${backgroundClass}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            {eyebrow}
          </p>
        ) : null}
        <div className="mt-1 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id={`${id}-heading`}
              className="text-2xl font-semibold tracking-tight text-slate-900"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            ) : null}
          </div>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
