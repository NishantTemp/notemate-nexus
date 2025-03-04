
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedImage from "../ui-custom/AnimatedImage";
import Badge from "../ui-custom/Badge";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <Badge className="mb-6 animate-fade-in">Perfect AI Study Tool</Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight md:leading-tight lg:leading-tight max-w-4xl mx-auto mb-6 animate-fade-in animation-delay-100">
            Transform <span className="text-primary">Any Content</span> Into Interactive Study Materials
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-200">
            Upload your PDFs, presentations, and YouTube videos. Blackblue instantly generates customized quizzes, 
            audio summaries, and study aids that adapt to your learning style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-in animation-delay-300">
            <a href="https://app.blackblue.xyz" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-hover-effect">
                Start Learning Smarter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-6 mb-16 animate-fade-in animation-delay-400">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm ml-3"><span className="font-medium">2,500+</span> quizzes generated today</p>
            </div>
            <div className="hidden md:flex items-center">
              <div className="flex items-center text-yellow-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                ))}
              </div>
              <p className="text-sm ml-2"><span className="font-medium">4.9/5</span> from 500+ reviews</p>
            </div>
          </div>
          
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Glass dashboard frame */}
            <div className="glass rounded-2xl overflow-hidden shadow-2xl">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blackblue Dashboard"
                className="w-full rounded-lg opacity-90"
                animation="scale-in"
                delay="animation-delay-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
