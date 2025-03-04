
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const CallToAction = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Select the plan that fits your study needs and experience Blackblue's quiz-generation technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Weekly Plan */}
          <div className="pricing-card bg-white dark:bg-zinc-900 rounded-xl p-8 border border-border shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold">Weekly Pass</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">$4.99</span>
                <span className="text-muted-foreground">/week</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Best for short-term study needs</p>
            </div>
            
            <ul className="space-y-3 mt-6 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Quiz generation from PDFs/Slides and Youtube Videos</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Choose between 10-20-30 questions per quiz</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Upto 10 Quizzes per week</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Email support</span>
              </li>
            </ul>
            
            <a href="https://app.blackblue.xyz?plan=weekly" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium">
                Get Weekly Access
              </Button>
            </a>
          </div>
          
          {/* Monthly Plan */}
          <div className="pricing-card pricing-card-highlight bg-gradient-to-br from-black/5 via-accent/5 to-black/5 dark:from-accent/10 dark:to-black/20 rounded-xl p-8 shadow-lg relative overflow-hidden">
            <div className="absolute -right-3 -top-3">
              <span className="inline-block py-1 px-3 rounded-md text-xs font-medium bg-primary text-primary-foreground">BEST VALUE</span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold">Monthly Pro</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">$9.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Save 44% compared to weekly plan</p>
            </div>
            
            <ul className="space-y-3 mt-6 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Quiz generation from PDFs/Slides and Youtube</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Choose between 10-20-30 questions per quiz</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Upto 15 Quizz per week</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Priority support</span>
              </li>
            </ul>
            
            <a href="https://app.blackblue.xyz?plan=monthly" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium">
                Get Monthly Access
              </Button>
            </a>
          </div>
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Start creating quizzes today</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Join other students who are using Blackblue to create study quizzes from their materials.</p>
          <a href="https://app.blackblue.xyz" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-black hover:bg-black/90 text-white dark:bg-white dark:text-black dark:hover:bg-white/90 font-medium">
              Try Blackblue Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
