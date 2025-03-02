
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-foreground flex items-center">
            <span className="bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-md mr-2">N</span>
            Notemate<span className="text-primary">AI</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Pricing
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="btn-hover-effect">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg p-4 border-t border-border/50">
          <nav className="flex flex-col space-y-4 pt-2 pb-4">
            <a
              href="#features"
              className="text-foreground/80 hover:text-primary p-2 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-foreground/80 hover:text-primary p-2 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-foreground/80 hover:text-primary p-2 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full justify-center">
                Sign In
              </Button>
              <Button className="w-full justify-center">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
