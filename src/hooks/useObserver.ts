import { useEffect, useRef, useState } from "react";

interface ObserverOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  triggerOnHidden?: boolean;
}

const useObserver = ({
  threshold = 0.2,
  rootMargin = "0px",
  once = true,
  triggerOnHidden = false,
}: ObserverOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          if (once) observer.disconnect();
        } else {
          if (triggerOnHidden) setShow(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, triggerOnHidden]);

  return { ref, show };
};

export default useObserver;
