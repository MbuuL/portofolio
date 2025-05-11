import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  SiReact, 
  SiExpo, 
  SiTypescript, 
  SiExpress 
} from "react-icons/si";

function App() {
  const handleMailto = () => {
    const email = "alifr.alcafi@gmail.com";
    const subject = "Hello Alif!";
    const body = "I would like to connect with you.";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  };
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <section className="w-full max-w-3xl text-center py-20 flex flex-col items-center">
        <div className="mb-6 flex justify-center">
          <img src="/pfp.jpg" alt="Alif Robby Alcafi" className="size-28 md:size-36 rounded-full border-4 border-primary object-cover" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Alif Robby Alcafi
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Frontend and Backend Developer
        </p>
        <Button size="lg" className="px-8 py-4 text-lg" onClick={handleMailto}>
          Contact Me
        </Button>
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
            <SiExpress className="text-gray-700 dark:text-gray-200" /> Express.js
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
                  <p className="text-muted-foreground mb-4">Created and maintain a WhatsApp bot for financial stocks. Fetches data from public APIs, processes and visualizes it as graphs, and sends results/calculations directly to users via WhatsApp.</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2">Component Testing Website</h3>
                  <p className="text-muted-foreground mb-4">Developed a website dedicated to testing UI components. Each component is prefixed with 'test-' to ensure clarity and focus on isolated testing and validation.</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2">Logistics System Enhancement</h3>
                  <p className="text-muted-foreground mb-4">Maintain and add new features to an existing logistics system. Notably implemented PDF upload, preview, and update functionality for Delivery Orders during both creation and editing processes.</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2">Admin Dashboard Development</h3>
                  <p className="text-muted-foreground mb-4">Built a comprehensive admin dashboard from scratch, managing customer, employee, sales order and delivery order.</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2">Company Front Page</h3>
                  <p className="text-muted-foreground mb-4">Designed and developed a modern, responsive company landing page to enhance brand presence and customer engagement.</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2">React Native Sales App</h3>
                  <p className="text-muted-foreground mb-4">Created a React Native application to empower salespeople with tools for creating sales order, browse existing products and even request price to a certain product.</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-card rounded-lg shadow p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2">Automated Deployment with GitHub Actions</h3>
                  <p className="text-muted-foreground mb-4">Automated CI/CD pipelines using GitHub Actions to deploy applications seamlessly to development and production environments.</p>
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
          As a seasoned software engineer, I specialize in both backend and frontend development. My experience includes building admin dashboards from scratch, developing company landing pages, creating React Native apps for sales teams, automating deployments with GitHub Actions, and maintaining complex systems such as logistics platforms and WhatsApp bots for financial data. I am passionate about leveraging technology to drive business efficiency and deliver user-centric solutions. Let's connect to explore opportunities for collaboration and innovation.
        </p>
      </section>
    </main>
  );
}

export default App;
