import {
  SiReact,
  SiExpo,
  SiTypescript,
  SiExpress,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import { Mail } from "lucide-react";

const skills = [
  { name: "React", Icon: SiReact },
  { name: "React Native", Icon: SiReact },
  { name: "Expo", Icon: SiExpo },
  { name: "Typescript", Icon: SiTypescript },
  { name: "Express.js", Icon: SiExpress },
];

const projects = [
  {
    title: "Arcanum (Password Manager)",
    href: "https://github.com/MbuuL/password-manager",
    text: "Self-hosted, zero-knowledge password manager. Credentials are encrypted in the browser with AES-GCM-256, so the server only stores ciphertext. Express 5 + PostgreSQL API with encrypted vault sync, React 19 frontend.",
  },
  {
    title: "Simple Chat",
    href: "https://github.com/MbuuL/simple-chat",
    text: "Real-time chat with public and private rooms, live online presence and JWT auth. React 19 with TanStack, Express 5 with WebSocket, Drizzle ORM and PostgreSQL.",
  },
  {
    title: "Local Logging",
    href: "https://github.com/MbuuL/local-logging",
    text: "Self-hosted application logging service. Register apps, ship logs through a token-based API and browse them in a web UI. Express 5, Drizzle ORM, PostgreSQL, React 19.",
  },
];

const contacts = [
  {
    label: "Email",
    value: "arifu.arukafi@gmail.com",
    href: "mailto:arifu.arukafi@gmail.com",
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Alif Robby Alcafi",
    href: "https://linkedin.com/in/alifalcafi",
    Icon: SiLinkedin,
  },
  {
    label: "GitHub",
    value: "MbuuL",
    href: "https://github.com/MbuuL",
    Icon: SiGithub,
  },
];

function App() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-20 space-y-20">
      <section className="text-center flex flex-col items-center">
        <img
          src="/pfp.jpg"
          alt="Alif Robby Alcafi"
          className="size-28 md:size-32 rounded-full object-cover mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Alif Robby Alcafi
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Frontend and Backend Developer
        </p>
        <p className="text-muted-foreground">
          Fueled by the essential trio of brewed coffee, instant cup noodles,
          and a dream, I specialize in both backend and frontend development.
          This dual expertise gives me a unique edge in understanding the entire
          workflow, allowing me to provide better solutions and effectively
          bridge the gap between backend and frontend teams.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="flex flex-wrap gap-3">
          {skills.map(({ name, Icon }) => (
            <li
              key={name}
              className="border border-border text-muted-foreground px-3 py-1.5 rounded-md flex items-center gap-2"
            >
              <Icon /> {name}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="divide-y divide-border">
          {projects.map(({ title, href, text }) => (
            <li key={title} className="py-4">
              <h3 className="font-semibold mb-1">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {title}
                </a>
              </h3>
              <p className="text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <ul className="space-y-3">
          {contacts.map(({ label, value, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="size-5" />
                <span>{label}:</span>
                <span className="text-foreground">{value}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
