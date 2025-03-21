
import { FileText, Youtube, CheckCircle, BarChart3, Headphones, Mic, Video, MessageSquare } from "lucide-react";
import FeatureCard from "../ui-custom/FeatureCard";
import AnimatedImage from "../ui-custom/AnimatedImage";

export const Features = () => {
  const features = [
    {
      title: "PDF & Slides",
      description: "Turn any document or presentation into interactive quizzes in seconds. Perfect for lecture notes and textbooks.",
      icon: FileText,
      badge: "Instant Results"
    },
    {
      title: "YouTube Video",
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
      title: "PYQ Style",
      description: "Customize the questions style across a broad range by uploading PYQs of your institution.",
      icon: BarChart3,
      badge: "Data-Driven"
    },
    {
      title: "Audio Lectures",
      description: "Coming Soon: Listen to AI-generated audio lectures of your materials. Perfect for learning while commuting.",
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
      </div>
    </section>
  );
};

export default Features;
