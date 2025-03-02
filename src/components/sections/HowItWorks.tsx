
import { Button } from "@/components/ui/button";
import AnimatedImage from "../ui-custom/AnimatedImage";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Materials",
      description: "Simply upload your PDF, slides, or paste a YouTube URL.",
      image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      number: "02",
      title: "Configure Your Quiz",
      description: "Select the number of questions (10, 20, or 30) and optional settings.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      number: "03",
      title: "Generate & Take Quiz",
      description: "Our AI generates relevant questions based on your content.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      number: "04",
      title: "Review Results & Summary",
      description: "Get immediate feedback and a detailed performance analysis.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">How NotemateAI Works</h2>
          <p className="text-muted-foreground max-w-2xl">
            From upload to results in just a few clicks. Our streamlined process makes quiz generation effortless.
          </p>
        </div>

        <div className="space-y-16 md:space-y-32">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div 
                className={`opacity-0 ${
                  index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
                }`} 
                style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl font-light text-primary/70">{step.number}</span>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                {index === steps.length - 1 && (
                  <Button className="mt-6 btn-hover-effect">
                    Try It Now
                  </Button>
                )}
              </div>
              
              <div 
                className={`opacity-0 ${
                  index % 2 === 0 ? "animate-slide-in-right" : "animate-slide-in-left"
                }`}
                style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
              >
                <div className="glass rounded-xl overflow-hidden">
                  <AnimatedImage
                    src={step.image}
                    alt={step.title}
                    className="w-full aspect-video object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
