import { content } from '@/lib/content';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function About() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto" ref={ref}>
          <div className={`text-center mb-16 ${hasIntersected ? 'fade-in' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-business-primary to-dev-accent mx-auto rounded-full"></div>
          </div>
          
          <div className={`card-elegant p-8 md:p-12 hover-lift ${hasIntersected ? 'fade-in-delay-1' : ''}`}>
            <div className="prose prose-lg prose-gray max-w-none">
              {content.about.split('\n\n').map((paragraph, index) => (
                <p key={index} className={`text-gray-700 leading-relaxed mb-6 last:mb-0 ${hasIntersected ? 'fade-in-delay-2' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}