
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

export const Badge = ({ 
  children, 
  variant = "default",
  className 
}: BadgeProps) => {
  return (
    <span 
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default" && 
          "bg-primary/10 text-primary border border-primary/20",
        variant === "secondary" && 
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === "outline" && 
          "text-foreground border border-border bg-background",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
