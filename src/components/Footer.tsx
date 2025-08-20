import { content } from '@/lib/content';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2 text-business-gradient">Brad Stewart</h3>
            <p className="text-gray-400">
              Business Solutions Manager & Programmer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href={`mailto:${content.contact.email}`}
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-business-primary transition-colors"
              aria-label="Send email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={content.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={content.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-dev-accent transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Brad Stewart
            </p>
            <p className="text-sm text-gray-500 mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}