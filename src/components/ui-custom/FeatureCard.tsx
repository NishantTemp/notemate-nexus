
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Badge from "./Badge";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  badge?: string;
}

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className,
  badge,
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "group p-6 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm",
        "hover:bg-card hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20",
        "transition-all duration-300 ease-in-out",
        className
      )}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div 
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary"
          >
            <Icon className="w-6 h-6" />
          </div>
          {badge && (
            <Badge variant="outline" className="opacity-70 group-hover:opacity-100 transition-opacity">
              {badge}
            </Badge>
          )}
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
