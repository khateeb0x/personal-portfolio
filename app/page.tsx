import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />

      {/* Projects Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <Card 
                key={project} 
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/photo-167${project}0000000-xxxxx?auto=format&fit=crop&w=800`}
                    alt={`Project ${project}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of the project and the technologies used in its development.
                  </p>
                  <Button variant="outline" size="sm" className="group/button">
                    <ExternalLink className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/button:rotate-45" />
                    View Project
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "JavaScript", "TypeScript", "React", "Next.js",
              "Node.js", "Python", "AWS", "Docker"
            ].map((skill, index) => (
              <Card 
                key={skill} 
                className="p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-semibold">{skill}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md bg-background transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md bg-background transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  className="w-full px-3 py-2 border rounded-md bg-background min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  placeholder="Your message..."
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container px-4 mx-auto text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Muhammad Khateeb. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}