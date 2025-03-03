
import { FileText, Youtube, CheckCircle, BarChart3, Headphones, Mic, Video, MessageSquare } from "lucide-react";
import FeatureCard from "../ui-custom/FeatureCard";
import AnimatedImage from "../ui-custom/AnimatedImage";

export const Features = () => {
  const features = [
    {
      title: "PDF & Slides Conversion",
      description: "Upload your documents or presentations to instantly generate comprehensive quizzes tailored to your study materials.",
      icon: FileText,
      badge: "Instant Parsing"
    },
    {
      title: "YouTube Integration",
      description: "Transform any educational video into a structured quiz by simply pasting a YouTube URL. Perfect for video lectures.",
      icon: Youtube,
      badge: "Smart Analysis"
    },
    {
      title: "Multiple Question Options",
      description: "Customize your learning experience with flexible quiz lengths of 10, 20, or 30 questions to match your study session needs.",
      icon: CheckCircle,
      badge: "Flexible"
    },
    {
      title: "Performance Analytics",
      description: "Track your progress with detailed insights that identify knowledge gaps and suggest areas for focused improvement.",
      icon: BarChart3,
      badge: "Actionable Insights"
    },
    {
      title: "Audio Lectures",
      description: "Coming Soon: Listen to AI-generated audio lectures synthesized from your learning materials. Perfect for on-the-go studying.",
      icon: Headphones,
      badge: "Coming Soon"
    },
    {
      title: "Audio/Video Direct Upload",
      description: "Coming Soon: Upload your lectures, podcasts, or video content directly to generate comprehensive study materials and quizzes.",
      icon: Mic,
      badge: "Coming Soon"
    },
    {
      title: "Interactive Chat Interface",
      description: "Coming Soon: Engage with a sophisticated chat system that allows you to discuss and query your study materials with proper citations.",
      icon: MessageSquare,
      badge: "Coming Soon"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Advanced Study Features</h2>
          <p className="text-muted-foreground max-w-2xl">
            NotemateAI transforms how you study with intelligent tools designed to enhance comprehension and retention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
        
        <div className="mt-12 bg-secondary/50 border border-border/60 rounded-2xl p-8 md:p-12">
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
