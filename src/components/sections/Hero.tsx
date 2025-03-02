
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import AnimatedImage from "../ui-custom/AnimatedImage";
import Badge from "../ui-custom/Badge";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <Badge className="mb-6 animate-fade-in">Introducing NotemateAI</Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight md:leading-tight lg:leading-tight max-w-4xl mx-auto mb-6 animate-fade-in animation-delay-100">
            Generate Quizzes <span className="text-primary">Instantly</span> from Any Learning Material
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6 animate-fade-in animation-delay-200">
            Transform your YouTube videos, PDFs, and slides into interactive quizzes in seconds. 
            Learn smarter, not harder.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4 animate-fade-in animation-delay-300">
            <Button size="lg" className="btn-hover-effect">
              Try It Now For Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mb-16 animate-fade-in animation-delay-400">
            No credit card required • 5 free quizzes • Takes only 30 seconds
          </p>
          
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Glass dashboard frame */}
            <div className="glass rounded-2xl overflow-hidden shadow-2xl">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="NotemateAI Dashboard"
                className="w-full rounded-lg opacity-90"
                animation="scale-in"
                delay="animation-delay-500"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-16 -right-6 md:right-16 animate-float animation-delay-700">
              <div className="glass p-4 rounded-lg shadow-lg max-w-[180px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Quiz Generated</span>
                </div>
                <p className="text-xs text-muted-foreground">20 questions created from your PDF</p>
              </div>
            </div>
            
            <div className="absolute bottom-16 -left-6 md:left-16 animate-float animation-delay-1000">
              <div className="glass p-4 rounded-lg shadow-lg max-w-[180px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Results Ready</span>
                </div>
                <p className="text-xs text-muted-foreground">View your personalized summary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
