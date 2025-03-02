
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  animation?: "fade-in" | "scale-in" | "float" | "slide-in-right" | "slide-in-left" | "slide-in-bottom";
  delay?: string;
}

export const AnimatedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  animation = "fade-in",
  delay = "",
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  useEffect(() => {
    if (isLoaded) {
      setShowImage(true);
    }
  }, [isLoaded]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!isLoaded && (
        <div 
          className={cn(
            "absolute inset-0 bg-muted/30 animate-pulse rounded-md",
            className
          )}
          style={{ width, height }}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "object-cover",
          showImage ? `animate-${animation} ${delay}` : "opacity-0",
          className
        )}
      />
    </div>
  );
};

export default AnimatedImage;
