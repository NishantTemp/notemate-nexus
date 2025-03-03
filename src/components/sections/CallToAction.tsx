
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
            Select the plan that fits your study needs and transform how you learn with Blackblue.
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
              <p className="text-sm text-muted-foreground mt-2">Perfect for intense study periods</p>
            </div>
            
            <ul className="space-y-3 mt-6 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Unlimited quizzes</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Up to 30 questions per quiz</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>PYQ style questions</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Performance analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Early access to new features</span>
              </li>
            </ul>
            
            <Button className="w-full btn-hover-effect">
              Get Weekly Access
            </Button>
          </div>
          
          {/* Monthly Plan */}
          <div className="bg-gradient-to-br from-primary/10 via-accent to-primary/5 rounded-xl p-8 border border-primary/20 shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]">
            <div className="absolute -right-3 -top-3">
              <span className="inline-block py-1 px-3 rounded-md text-xs font-medium bg-primary text-primary-foreground">POPULAR</span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold">Monthly Pro</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">$9</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Best value for consistent studying</p>
            </div>
            
            <ul className="space-y-3 mt-6 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Unlimited quizzes</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Up to 30 questions per quiz</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>PYQ style questions</span>
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
                <span>Student progress dashboard</span>
              </li>
            </ul>
            
            <Button className="w-full btn-hover-effect">
              Get Pro Access
            </Button>
          </div>
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8">Ready to transform your study experience?</h3>
          <Button size="lg" className="btn-hover-effect">
            Get Started Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
