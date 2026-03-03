import React, { useCallback, useState } from "react";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { Section } from "./components/Section";
import { SkillTag } from "./components/SkillTag";

type SectionId = "about" | "skills" | "projects" | "contact";

const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const skills = {
  languages: ["JavaScript", "TypeScript"],
  frameworks: ["React", "Vite", "Tailwind CSS"],
  tools: ["Git", "GitHub", "VS Code"],
};

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal site built with Vite, React, and Tailwind CSS.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    links: {
      demo: "#",
      repo: "#",
    },
  },
  {
    title: "Simple Dashboard",
    description:
      "Minimal dashboard UI with reusable components and light theme.",
    stack: ["React", "Vite"],
    links: {
      demo: "#",
      repo: "#",
    },
  },
];

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");

  const handleScrollTo = useCallback((id: SectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar
        items={NAV_ITEMS}
        active={activeSection}
        onSelect={handleScrollTo}
      />

      <main className="flex-1">
        <Section id="about" title="About" eyebrow="Personal Website">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex-1">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Hi, I&apos;m David Buchanan.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                A short introduction about who you are, what you do, and what
                you&apos;re interested in. You can talk about your background,
                current focus, or goals here.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleScrollTo("projects")}
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                >
                  View Projects
                </button>
                <button
                  type="button"
                  onClick={() => handleScrollTo("contact")}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="skills"
          title="Skills"
          description="A quick overview of the technologies and tools you work with."
          background="muted"
        >
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Languages
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.languages.map((item) => (
                  <SkillTag key={item} label={item} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Frameworks
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.frameworks.map((item) => (
                  <SkillTag key={item} label={item} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Tools
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.tools.map((item) => (
                  <SkillTag key={item} label={item} />
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          title="Projects"
          description="A few things I've worked on recently."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact"
          description="Feel free to reach out if you'd like to collaborate or just say hello."
          background="muted"
        >
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <div className="space-y-3 text-sm text-slate-700">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:david.buchanan@email.com"
                  className="text-slate-900 underline underline-offset-2"
                >
                  david.buchanan@email.com
                </a>
              </p>
              <p>
                <span className="font-medium">LinkedIn:</span>{" "}
                <a
                  href="https://linkedin.com/in/david-buchanan"
                  className="text-slate-900 underline underline-offset-2"
                >
                  linkedin.com/in/david-buchanan
                </a>
              </p>
              <p>
                <span className="font-medium">GitHub:</span>{" "}
                <a
                  href="https://github.com/david-buchanan"
                  className="text-slate-900 underline underline-offset-2"
                >
                  github.com/david-buchanan
                </a>
              </p>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Your Name.</span>
          <span>Built with Vite, React &amp; Tailwind CSS.</span>
        </div>
      </footer>
    </div>
  );
}

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      return;
    }
    // For now we just log the message. Replace with a real backend later.
    // eslint-disable-next-line no-console
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-medium text-slate-700"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/40"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-medium text-slate-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/40"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium text-slate-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="mt-1 block w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/40"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        Send message
      </button>
      {submitted && (
        <p className="text-xs text-emerald-600">
          Thanks for your message! You can now replace this with a real
          integration.
        </p>
      )}
    </form>
  );
}

export default App;
