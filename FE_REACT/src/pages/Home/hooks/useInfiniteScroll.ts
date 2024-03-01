import { useEffect, useRef } from "react";

const useInfiniteScroll = (callback: () => void, loading: boolean) => {
  const loader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          callback();
        }
      },
      {
        root: null,
        rootMargin: "20px",
        threshold: 0.1,
      }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(loader.current);
      }
    };
  }, [callback, loading]);

  return loader;
};

export default useInfiniteScroll;
