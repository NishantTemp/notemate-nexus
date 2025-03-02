import { FileText, Youtube, CheckCircle, BarChart3 } from "lucide-react";
import FeatureCard from "../ui-custom/FeatureCard";
import AnimatedImage from "../ui-custom/AnimatedImage";

export const Features = () => {
  const features = [
    {
      title: "PDF & Slides Conversion",
      description: "Upload your PDF documents or slide presentations to instantly generate relevant quizzes based on the content.",
      icon: FileText,
      badge: "Instant Parsing"
    },
    {
      title: "YouTube Integration",
      description: "Simply paste a YouTube URL and NotemateAI will analyze the video content to create targeted quiz questions.",
      icon: Youtube,
      badge: "Smart Analysis"
    },
    {
      title: "Multiple Question Options",
      description: "Choose between 10, 20, or 30 question quizzes depending on your study needs and material depth.",
      icon: CheckCircle,
      badge: "Flexible"
    },
    {
      title: "Results & Summary",
      description: "Receive immediate results with a comprehensive summary of your performance and knowledge gaps.",
      icon: BarChart3,
      badge: "Actionable Insights"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl">
            NotemateAI comes with everything you need to generate meaningful quizzes from your learning materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 100 + 100}ms`, animationFillMode: 'forwards' }}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                badge={feature.badge}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-secondary/50 border border-border/60 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="opacity-0 animate-slide-in-left" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                PYQ Style Questions
              </h3>
              <p className="text-muted-foreground mb-6">
                Upload previous year questions (PYQ) and our advanced AI will generate new questions that match the same pattern and difficulty level.
              </p>
              <ul className="space-y-3">
                {["Analyze question patterns", "Match complexity levels", "Generate similar questions", "Prepare more effectively"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="opacity-0 animate-slide-in-right" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <div className="glass rounded-xl overflow-hidden">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Previous Year Questions Analysis"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
