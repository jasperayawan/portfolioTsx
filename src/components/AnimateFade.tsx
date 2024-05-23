import React, { useEffect, useRef, useState } from 'react';

interface AnimateFadeProps {
    children: React.ReactNode;
    className?: string;
    threshold?: number;
}

const AnimateFade: React.FC<AnimateFadeProps> = ({ children, className = '', threshold = 0.0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
            setIsVisible(entries[0].isIntersecting)
        }
      },
      { threshold }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={observerRef}
      className={`${className} ${isVisible ? 'animate-fade-up animate-duration-500 animate-delay-500' : 'opacity-0 translate-y-20'}`}
    >
      {children}
    </div>
  );
};

export default AnimateFade;
