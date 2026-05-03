import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({ children, delay = 0, className = "", direction = "up" }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate-x-0 translate-y-0 scale-100";
    switch (direction) {
      case "up":
        return "translate-y-[30px] scale-[0.98]";
      case "down":
        return "-translate-y-[30px] scale-[0.98]";
      case "left":
        return "translate-x-[30px] scale-[0.98]";
      case "right":
        return "-translate-x-[30px] scale-[0.98]";
      case "none":
        return "scale-[0.98]";
      default:
        return "translate-y-[30px] scale-[0.98]";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[800ms] ease-premium ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
