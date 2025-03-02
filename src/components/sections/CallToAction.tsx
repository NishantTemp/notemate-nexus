
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const CallToAction = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary/10 via-accent to-primary/5 rounded-3xl p-8 md:p-12 shadow-xl border border-primary/20 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8 md:gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Start Creating Effective Quizzes Today
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Join thousands of students and educators who are already using NotemateAI to enhance their learning experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-hover-effect">
                  Start For Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="mt-6">
                <p className="text-sm text-muted-foreground">
                  No credit card required • Cancel anytime
                </p>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg">
                <div className="text-center mb-4">
                  <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">MOST POPULAR</span>
                  <h3 className="text-2xl font-semibold">Pro Plan</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">$9</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
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
                </ul>
                
                <Button className="w-full btn-hover-effect">
                  Choose Pro Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
