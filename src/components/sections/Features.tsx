
import { FileText, Youtube, CheckCircle, BarChart3, Headphones, Mic, Video, MessageSquare } from "lucide-react";
import FeatureCard from "../ui-custom/FeatureCard";
import AnimatedImage from "../ui-custom/AnimatedImage";

export const Features = () => {
  const features = [
    {
      title: "PDF & Slides Processing",
      description: "Turn any document or presentation into interactive quizzes in seconds. Perfect for lecture notes and textbooks.",
      icon: FileText,
      badge: "Instant Results"
    },
    {
      title: "YouTube Video Analysis",
      description: "Convert educational videos into comprehensive quizzes with a single URL. Extract knowledge from any video lecture.",
      icon: Youtube,
      badge: "Smart Parsing"
    },
    {
      title: "Customizable Quizzes",
      description: "Choose from 10, 20, or 30 questions with adjustable difficulty levels to match your learning stage.",
      icon: CheckCircle,
      badge: "Personalized"
    },
    {
      title: "Learning Analytics",
      description: "Track knowledge gaps, monitor progress, and receive personalized study recommendations based on your performance.",
      icon: BarChart3,
      badge: "Data-Driven"
    },
    {
      title: "Audio Summaries",
      description: "Coming Soon: Listen to AI-generated audio summaries of your materials. Perfect for learning while commuting.",
      icon: Headphones,
      badge: "Coming Soon"
    },
    {
      title: "Audio/Video Direct Upload",
      description: "Coming Soon: Upload lecture recordings, podcasts, or videos directly to generate comprehensive study materials.",
      icon: Mic,
      badge: "Coming Soon"
    },
    {
      title: "Interactive Chat Interface",
      description: "Coming Soon: Chat with your materials to ask questions and receive answers with proper citations and explanations.",
      icon: MessageSquare,
      badge: "Coming Soon"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Powerful Study Features</h2>
          <p className="text-muted-foreground max-w-2xl">
            Blackblue combines cutting-edge AI with proven learning techniques to help you study smarter, not harder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="opacity-0 animate-fade-in feature-card-hover" style={{ animationDelay: `${index * 100 + 100}ms`, animationFillMode: 'forwards' }}>
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
                Exam-Ready Question Generation
              </h3>
              <p className="text-muted-foreground mb-6">
                Our AI analyzes previous exam patterns and creates questions that match real test formats. Perfect for standardized test prep and final exams.
              </p>
              <ul className="space-y-3">
                {["Matches exam question patterns", "Simulates real test conditions", "Covers all testable concepts", "Provides detailed explanations", "Tracks exam readiness"].map((item, i) => (
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
                  alt="Exam Question Analysis"
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
