type SectionId = 'about' | 'skills' | 'projects' | 'contact'

type NavItem = {
  id: SectionId
  label: string
}

type NavbarProps = {
  items: NavItem[]
  active: SectionId
  onSelect: (id: SectionId) => void
}

export function Navbar({ items, active, onSelect }: NavbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div
          className="text-lg font-semibold tracking-tight text-slate-900"
          aria-label="Site logo"
        >
          Your Name
        </div>
        <ul className="flex gap-4 text-sm font-medium text-slate-600">
          {items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onSelect(item.id)}
                className={`rounded-full px-3 py-1 transition-colors ${
                  active === item.id
                    ? 'bg-slate-900 text-slate-50'
                    : 'hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
