import { content } from '@/lib/content';
import { CheckCircle, Code, Users, Wrench } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Skills() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <div className={`text-center mb-16 ${hasIntersected ? 'fade-in' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-business-primary to-dev-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Business Expertise */}
            <div className={`card-elegant p-8 hover-lift ${hasIntersected ? 'slide-in-left' : ''}`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-business rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-business-primary">Business Expertise</h3>
              </div>
              <ul className="space-y-3">
                {content.skills.business.map((skill, index) => (
                  <li key={index} className={`flex items-start ${hasIntersected ? 'fade-in-delay-1' : ''}`} style={{animationDelay: `${0.1 + index * 0.1}s`}}>
                    <CheckCircle className="w-5 h-5 text-business-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Expertise */}
            <div className={`card-elegant p-8 hover-lift ${hasIntersected ? 'slide-in-right' : ''}`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-dev rounded-lg flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dev-primary">Technical Expertise</h3>
              </div>
              <ul className="space-y-3">
                {content.skills.technical.map((skill, index) => (
                  <li key={index} className={`flex items-start ${hasIntersected ? 'fade-in-delay-1' : ''}`} style={{animationDelay: `${0.1 + index * 0.1}s`}}>
                    <CheckCircle className="w-5 h-5 text-dev-accent mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tools Section */}
          <div className="mt-12">
            <div className={`card-elegant p-8 hover-lift ${hasIntersected ? 'fade-in-delay-2' : ''}`}>
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-business-primary to-dev-accent rounded-lg flex items-center justify-center mr-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tools & Technologies</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {content.skills.tools.map((tool, index) => (
                  <div key={index} className={`flex items-center ${hasIntersected ? 'fade-in-delay-3' : ''}`} style={{animationDelay: `${0.2 + index * 0.05}s`}}>
                    <CheckCircle className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}