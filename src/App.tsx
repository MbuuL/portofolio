import {
  SiReact,
  SiExpo,
  SiTypescript,
  SiExpress,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import { Mail } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <section className="w-full max-w-3xl text-center py-20 flex flex-col items-center">
        <div className="mb-6 flex justify-center">
          <img
            src="/pfp.jpg"
            alt="Alif Robby Alcafi"
            className="size-28 md:size-36 rounded-full border-4 border-primary object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I&apos;m Alif Robby Alcafi
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Frontend and Backend Developer
        </p>
      </section>

      {/* Featured Skills Section */}
      <section className="w-full max-w-2xl py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Featured Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium flex items-center gap-2">
            <SiReact className="text-sky-500" /> React
          </span>
          <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium flex items-center gap-2">
            <SiReact className="text-blue-400" /> React Native
          </span>
          <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium flex items-center gap-2">
            <SiExpo className="text-black dark:text-white" /> Expo
          </span>
          <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium flex items-center gap-2">
            <SiTypescript className="text-blue-600" /> Typescript
          </span>
          <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium flex items-center gap-2">
            <SiExpress className="text-gray-700 dark:text-gray-200" />{" "}
            Express.js
          </span>
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="w-full max-w-4xl py-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Featured Experience
        </h2>
        <div className="relative">
          <Carousel className="mx-auto max-w-2xl">
            <CarouselContent>
              <CarouselItem>
                <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2">WhatsApp Stock Bot</h3>
                  <p className="text-muted-foreground mb-4">
                    Created and maintain a WhatsApp bot for financial stocks.
                    Fetches data from public APIs, processes and visualizes it
                    as graphs, and sends results/calculations directly to users
                    via WhatsApp.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2">
                    Component Testing Website
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Developed a website dedicated to testing UI components. Each
                    component is prefixed with &apos;test-&apos; to ensure
                    clarity and focus on isolated testing and validation.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2">
                    Logistics System Enhancement
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Maintain and add new features to an existing logistics
                    system. Notably implemented PDF upload, preview, and update
                    functionality for Delivery Orders during both creation and
                    editing processes.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2">
                    Admin Dashboard Development
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Built a comprehensive admin dashboard from scratch, managing
                    customer, employee, sales order and delivery order.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2">Company Front Page</h3>
                  <p className="text-muted-foreground mb-4">
                    Designed and developed a modern, responsive company landing
                    page to enhance brand presence and customer engagement.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2">
                    React Native Sales App
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Created a React Native application to empower salespeople
                    with tools for creating sales order, browse existing
                    products and even request price to a certain product.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2">
                    Automated Deployment with GitHub Actions
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Automated CI/CD pipelines using GitHub Actions to deploy
                    applications seamlessly to development and production
                    environments.
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-2xl py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-muted-foreground mb-4">
          Fueled by the essential trio of brewed coffee, instant cup noodles,
          and a dream, I specialize in both backend and frontend development.
          This dual expertise gives me a unique edge in understanding the entire
          workflow, allowing me to provide better solutions and effectively
          bridge the gap between backend and frontend teams. Let&apos;s connect
          to explore opportunities for collaboration and innovation!
        </p>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-2xl py-12 text-center">
        <h2 className="text-2xl font-semibold mb-2">Get In Touch</h2>
        <p className="text-muted-foreground mb-8">
          Feel free to reach out through any of the channels below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="mailto:arifu.arukafi@gmail.com"
            className="group flex flex-col items-center gap-3 bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all duration-200"
          >
            <Mail className="size-8 text-primary group-hover:scale-110 transition-transform duration-200" />
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Email
            </span>
            <span className="text-sm font-semibold break-all">
              arifu.arukafi@gmail.com
            </span>
          </a>
          <a
            href="https://linkedin.com/in/alifalcafi"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all duration-200"
          >
            <SiLinkedin className="size-8 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              LinkedIn
            </span>
            <span className="text-sm font-semibold">Alif Robby Alcafi</span>
          </a>
          <a
            href="https://github.com/MbuuL"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all duration-200"
          >
            <SiGithub className="size-8 text-foreground group-hover:scale-110 transition-transform duration-200" />
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              GitHub
            </span>
            <span className="text-sm font-semibold">MbuuL</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
