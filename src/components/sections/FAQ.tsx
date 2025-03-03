
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How accurate are Blackblue's generated quizzes?",
      answer: "Blackblue's AI has been trained on thousands of educational materials and employs advanced natural language processing to ensure high accuracy. Our quizzes extract key concepts, facts, and relationships from your content with over 95% accuracy based on user feedback. The system also continuously improves as more users utilize the platform."
    },
    {
      question: "Can I customize the types of questions generated?",
      answer: "Absolutely! You can select from multiple question formats including multiple choice, true/false, short answer, and matching questions. You can also adjust the difficulty level from beginner to expert, and specify particular topics or sections to focus on within your learning materials."
    },
    {
      question: "How does Blackblue help me identify knowledge gaps?",
      answer: "Our sophisticated analytics engine tracks your performance across all quizzes and identifies patterns in your incorrect answers. The system creates a personalized knowledge map highlighting areas where you excel and topics that need more attention. You'll receive tailored recommendations for additional practice on challenging concepts."
    },
    {
      question: "When will the audio summaries feature be available?",
      answer: "Our audio summaries feature is currently in final beta testing and will be available to all subscribers within the next month. This feature will convert your learning materials into concise, easy-to-understand audio explanations perfect for review on the go."
    },
    {
      question: "Can I use Blackblue for group study or classroom settings?",
      answer: "Yes! Blackblue offers team accounts for study groups and classroom usage. Instructors can upload course materials to generate quizzes for the entire class, track student performance, and identify concepts that need additional instruction. Students can collaborate on quiz creation and share study materials within the platform."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a no-questions-asked 7-day refund policy for all new subscriptions. If you're not completely satisfied with Blackblue within your first week, simply contact our support team for a full refund. After this period, you can cancel anytime to prevent future billing, with access continuing until the end of your current payment cycle."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about how Blackblue can transform your learning experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-b border-border">
                <AccordionTrigger className="text-lg font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Have more questions?</p>
          <a href="mailto:support@blackblue.xyz" className="text-primary hover:underline">
            Contact our support team for immediate assistance
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
