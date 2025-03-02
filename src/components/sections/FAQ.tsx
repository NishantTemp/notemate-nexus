
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How does NotemateAI generate quizzes?",
      answer: "NotemateAI uses advanced artificial intelligence to analyze your learning materials - whether they're PDFs, slides, or YouTube videos. Our AI identifies key concepts, important facts, and critical relationships between ideas, then transforms them into targeted quiz questions designed to test your understanding and retention."
    },
    {
      question: "Can I customize the difficulty level of my quizzes?",
      answer: "Yes! You can adjust the complexity of generated questions based on your learning needs. Whether you're just beginning to learn a subject or preparing for advanced examinations, NotemateAI can create questions that match your current skill level."
    },
    {
      question: "What does 'PYQ style questions' mean?",
      answer: "PYQ (Previous Year Questions) style means that our AI can analyze the pattern, format, and difficulty level of past exam questions you upload, then generate new questions that follow the same structure. This is extremely valuable for exam preparation, as it helps you practice with questions similar to what you might encounter on your actual test."
    },
    {
      question: "When will the audio lectures feature be available?",
      answer: "We're actively developing our AI audio lectures feature, which will convert your study materials into clear, concise audio explanations. This feature is coming soon and will be available to all subscribers when released. Stay tuned for updates!"
    },
    {
      question: "Can I use NotemateAI for group study or classroom settings?",
      answer: "Absolutely! NotemateAI works great for both individual study and educational settings. Teachers and study group leaders can generate quizzes from course materials and share them with students. Our analytics can help track overall performance and identify concepts that need reinforcement."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime from your account settings. Your access will continue until the end of your current billing period. We don't offer refunds for partial subscription periods, but you're welcome to continue using all features until your subscription ends."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about NotemateAI and how it can enhance your learning experience.
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
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a href="mailto:support@notemateai.com" className="text-primary hover:underline">
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
