import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations
 * Uses Intersection Observer for performance
 */
export function useScrollReveal(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, stop observing for performance
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -50px 0px',
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options.threshold, options.rootMargin]);

    return [ref, isVisible];
}

/**
 * Component wrapper for scroll reveal animations
 */
export function ScrollReveal({
    children,
    className = '',
    animation = 'reveal',
    delay = 0,
    ...props
}) {
    const [ref, isVisible] = useScrollReveal();

    const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

    return (
        <div
            ref={ref}
            className={`${animation} ${isVisible ? 'visible' : ''} ${delayClass} ${className}`}
            style={{ opacity: isVisible ? undefined : 0 }}
            {...props}
        >
            {children}
        </div>
    );
}

export default useScrollReveal;
