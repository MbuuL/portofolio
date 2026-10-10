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
    title: "WhatsApp Stock Bot",
    text: "Created and maintain a WhatsApp bot for financial stocks. Fetches data from public APIs, processes and visualizes it as graphs, and sends results/calculations directly to users via WhatsApp.",
  },
  {
    title: "Component Testing Website",
    text: "Developed a website dedicated to testing UI components. Each component is prefixed with 'test-' to ensure clarity and focus on isolated testing and validation.",
  },
  {
    title: "Logistics System Enhancement",
    text: "Maintain and add new features to an existing logistics system. Notably implemented PDF upload, preview, and update functionality for Delivery Orders during both creation and editing processes.",
  },
  {
    title: "Admin Dashboard Development",
    text: "Built a comprehensive admin dashboard from scratch, managing customer, employee, sales order and delivery order.",
  },
  {
    title: "Company Front Page",
    text: "Designed and developed a modern, responsive company landing page to enhance brand presence and customer engagement.",
  },
  {
    title: "React Native Sales App",
    text: "Created a React Native application to empower salespeople with tools for creating sales order, browse existing products and even request price to a certain product.",
  },
  {
    title: "Automated Deployment with GitHub Actions",
    text: "Automated CI/CD pipelines using GitHub Actions to deploy applications seamlessly to development and production environments.",
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
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="divide-y divide-border">
          {projects.map(({ title, text }) => (
            <li key={title} className="py-4">
              <h3 className="font-semibold mb-1">{title}</h3>
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
