import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-square rounded-full overflow-hidden max-w-md mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                alt="Profile"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I'm a passionate full-stack developer with expertise in building scalable web applications. 
              With a strong foundation in modern technologies, I create efficient and elegant solutions 
              to complex problems.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" }
              ].map(({ icon: Icon, href }, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 transition-transform duration-300"
                  asChild
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}