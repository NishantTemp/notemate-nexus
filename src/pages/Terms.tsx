
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-subtle-gradient">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using NotemateAI, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
              <p>Permission is granted to temporarily access the materials on NotemateAI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on NotemateAI's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
              <p>The materials on NotemateAI's website are provided "as is". NotemateAI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitations</h2>
              <p>In no event shall NotemateAI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on NotemateAI's website, even if NotemateAI or a NotemateAI authorized representative has been notified orally or in writing of the possibility of such damage.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Accuracy of Materials</h2>
              <p>The materials appearing on NotemateAI's website could include technical, typographical, or photographic errors. NotemateAI does not warrant that any of the materials on its website are accurate, complete or current. NotemateAI may make changes to the materials contained on its website at any time without notice.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Links</h2>
              <p>NotemateAI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by NotemateAI of the site. Use of any such linked website is at the user's own risk.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Modifications</h2>
              <p>NotemateAI may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at: <a href="mailto:terms@notemateai.com" className="text-primary hover:underline">terms@notemateai.com</a></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
