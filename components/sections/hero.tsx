"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-text";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic mesh gradient background */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)] animate-mesh"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `hsl(var(--primary) / ${Math.random() * 0.3})`,
              animation: `floatParticle ${10 + Math.random() * 20}s linear infinite`,
              animationDelay: `-${Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-[40vw] h-[40vw] rounded-full mix-blend-soft-light filter blur-3xl opacity-30",
              "animate-float-slow"
            )}
            style={{
              left: `${(i * 30) + Math.random() * 20}%`,
              top: `${Math.random() * 60}%`,
              backgroundColor: `hsl(var(--${i === 0 ? 'primary' : i === 1 ? 'secondary' : 'accent'}) / 0.3)`,
              animationDelay: `${i * -7}s`,
              animationDuration: `${30 + i * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedText
            text="Full Stack Developer"
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
          />
          
          <div 
            className={cn(
              "transform opacity-0 translate-y-8 relative",
              isVisible && "animate-[fadeIn_0.5s_ease-out_0.3s_forwards]"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-xl" />
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 relative backdrop-blur-sm p-4 rounded-lg">
              I craft exceptional digital experiences with modern technologies
            </p>
          </div>

          <div className={cn(
            "flex gap-4 justify-center transform opacity-0 translate-y-8",
            isVisible && "animate-[fadeIn_0.5s_ease-out_0.6s_forwards]"
          )}>
            <Button className="group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Contact Me
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button variant="outline" className="group relative overflow-hidden">
              <span className="relative z-10">View Projects</span>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}