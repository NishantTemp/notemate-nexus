
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/40 py-3 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-foreground flex items-center">
            <img 
              src="/lovable-uploads/47f84fd4-dd19-483f-878d-993510ca0fec.png" 
              alt="Blackblue Logo" 
              className="h-5 hover:opacity-90 transition-opacity" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#features" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex items-center">
          <a href="https://app.blackblue.xyz" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="rounded-full px-5 border-primary/20 bg-transparent hover:bg-primary/10 hover:text-primary">
              Login <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground/80 p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl p-4 border-t border-border/20 shadow-sm">
          <nav className="flex flex-col space-y-4 pt-2 pb-3">
            <a
              href="#features"
              className="text-foreground/70 hover:text-primary p-2 rounded-md transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-foreground/70 hover:text-primary p-2 rounded-md transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-foreground/70 hover:text-primary p-2 rounded-md transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-foreground/70 hover:text-primary p-2 rounded-md transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-2">
              <a href="https://app.blackblue.xyz" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-center rounded-full text-sm">
                  Login <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
