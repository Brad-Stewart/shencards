import { content } from '@/lib/content';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import ContactForm from './ContactForm';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Contact() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <div className={`text-center mb-16 ${hasIntersected ? 'fade-in' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-business-primary to-dev-accent mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {content.contact.blurb}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className={hasIntersected ? 'slide-in-left' : ''}>
              <ContactForm />
            </div>

            {/* Contact Methods */}
            <div className={`space-y-8 ${hasIntersected ? 'slide-in-right' : ''}`}>
              <div className="card-elegant p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Other Ways to Connect</h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center group hover-lift p-4 rounded-lg transition-all">
                    <div className="w-12 h-12 bg-gradient-business rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600 text-sm">Get in touch directly</p>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="btn-enhanced"
                      asChild
                    >
                      <a href={`mailto:${content.contact.email}`}>
                        Send Email
                      </a>
                    </Button>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center group hover-lift p-4 rounded-lg transition-all">
                    <div className="w-12 h-12 bg-gradient-to-r from-business-primary to-dev-primary rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                      <p className="text-gray-600 text-sm">Professional network</p>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="btn-enhanced"
                      asChild
                    >
                      <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer">
                        Connect
                      </a>
                    </Button>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-center group hover-lift p-4 rounded-lg transition-all">
                    <div className="w-12 h-12 bg-gradient-dev rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">GitHub</h4>
                      <p className="text-gray-600 text-sm">View my code</p>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="btn-enhanced"
                      asChild
                    >
                      <a href={content.contact.github} target="_blank" rel="noopener noreferrer">
                        Follow
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Quick info */}
              <div className={`card-elegant p-6 text-center ${hasIntersected ? 'fade-in-delay-2' : ''}`}>
                <MessageCircle className="w-8 h-8 text-business-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
                <p className="text-gray-600 text-sm">
                  I typically respond to messages within 24 hours. 
                  For urgent matters, LinkedIn is often the fastest way to reach me.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}