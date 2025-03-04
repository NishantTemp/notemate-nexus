
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Badge from "../ui-custom/Badge";
import QuizGeneratorDemo from "../ui-custom/QuizGeneratorDemo";

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
            {/* Removed the stars and ratings section that was here */}
          </div>
          
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Replace the glass dashboard frame with the interactive demo */}
            <div className="glass rounded-2xl overflow-hidden shadow-2xl animate-fade-in animation-delay-500">
              <QuizGeneratorDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
