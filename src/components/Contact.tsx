import { content } from '@/lib/content';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-business-primary to-dev-accent mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {content.contact.blurb}
            </p>
          </div>

          <div className="card-elegant p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Email */}
              <div className="text-center group hover-lift">
                <div className="w-16 h-16 bg-gradient-business rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm mb-4">Get in touch directly</p>
                <Button 
                  variant="outline" 
                  className="btn-outline-business"
                  asChild
                >
                  <a href={`mailto:${content.contact.email}`}>
                    {content.contact.email}
                  </a>
                </Button>
              </div>

              {/* LinkedIn */}
              <div className="text-center group hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-business-primary to-dev-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <p className="text-gray-600 text-sm mb-4">Professional network</p>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  asChild
                >
                  <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer">
                    Connect
                  </a>
                </Button>
              </div>

              {/* GitHub */}
              <div className="text-center group hover-lift">
                <div className="w-16 h-16 bg-gradient-dev rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub</h3>
                <p className="text-gray-600 text-sm mb-4">View my code</p>
                <Button 
                  variant="outline" 
                  className="btn-outline-dev"
                  asChild
                >
                  <a href={content.contact.github} target="_blank" rel="noopener noreferrer">
                    Follow
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="btn-business text-lg px-8 py-4"
              asChild
            >
              <a href={`mailto:${content.contact.email}`} className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}