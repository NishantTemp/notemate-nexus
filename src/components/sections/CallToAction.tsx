
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const CallToAction = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Choose Your Learning Plan
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Select the plan that fits your study needs and unlock your full learning potential with Blackblue.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Weekly Plan */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold">Weekly Pass</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">$4</span>
                <span className="text-muted-foreground">/week</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Perfect for exam prep and short-term projects</p>
            </div>
            
            <ul className="space-y-3 mt-6 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Unlimited quiz generation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Up to 30 questions per quiz</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Basic performance analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>PDF, slides, and YouTube support</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Email support</span>
              </li>
            </ul>
            
            <a href="https://app.blackblue.xyz?plan=weekly" target="_blank" rel="noopener noreferrer">
              <Button className="w-full btn-hover-effect">
                Start Weekly Plan
              </Button>
            </a>
          </div>
          
          {/* Monthly Plan */}
          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-xl p-8 border pricing-card-highlight shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]">
            <div className="absolute -right-3 -top-3">
              <span className="inline-block py-1 px-3 rounded-md text-xs font-medium bg-primary text-primary-foreground">BEST VALUE</span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold">Monthly Pro</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">$9</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Save 44% compared to weekly plan</p>
            </div>
            
            <ul className="space-y-3 mt-6 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Unlimited quiz generation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Up to 50 questions per quiz</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Advanced performance analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Priority access to new features</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Customizable difficulty levels</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Priority support</span>
              </li>
            </ul>
            
            <a href="https://app.blackblue.xyz?plan=monthly" target="_blank" rel="noopener noreferrer">
              <Button className="w-full btn-hover-effect">
                Start Monthly Pro
              </Button>
            </a>
          </div>
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Ready to transform how you learn?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Join thousands of students who are already using Blackblue to study smarter and achieve better results.</p>
          <a href="https://app.blackblue.xyz" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="btn-hover-effect cta-highlight">
              Try Blackblue Free for 7 Days
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
