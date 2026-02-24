type Project = {
  title: string
  description: string
  stack: string[]
  links?: {
    demo?: string
    repo?: string
  }
}

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasDemo = project.links?.demo && project.links.demo !== '#'
  const hasRepo = project.links?.repo && project.links.repo !== '#'

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-slate-600">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-white px-2.5 py-1 shadow-sm"
          >
            {tech}
          </li>
        ))}
      </ul>
      {(hasDemo || hasRepo) && (
        <div className="mt-4 flex gap-3 text-xs font-medium text-slate-700">
          {hasDemo && (
            <a
              href={project.links?.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900"
            >
              Live demo
            </a>
          )}
          {hasRepo && (
            <a
              href={project.links?.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900"
            >
              Source code
            </a>
          )}
        </div>
      )}
    </article>
  )
}
